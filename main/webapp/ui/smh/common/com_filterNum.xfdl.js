(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("com_filterNum");
            this.set_titletext("com_filterNum");
            if (Form == this.constructor)
            {
                this._setFormPosition(250,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_values", this);
            obj._setContents("<ColumnInfo><Column id=\"DESC\" type=\"STRING\" size=\"256\"/><Column id=\"VAL\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_textfilter", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DESC\">Equals</Col><Col id=\"CD\">EQ</Col></Row><Row><Col id=\"DESC\">Does Not Equal</Col><Col id=\"CD\">NEQ</Col></Row><Row><Col id=\"DESC\">Is Null</Col><Col id=\"CD\">IN</Col></Row><Row><Col id=\"DESC\">Is Not Null</Col><Col id=\"CD\">INN</Col></Row><Row><Col id=\"DESC\">Between</Col><Col id=\"CD\">BT</Col></Row><Row><Col id=\"DESC\">Greater Than</Col><Col id=\"CD\">GT</Col></Row><Row><Col id=\"DESC\">Greater Than Or Equal To</Col><Col id=\"CD\">GTOEQ</Col></Row><Row><Col id=\"DESC\">Less Than</Col><Col id=\"CD\">LT</Col></Row><Row><Col id=\"DESC\">Less Than Or Equal To</Col><Col id=\"CD\">LTOEQ</Col></Row><Row><Col id=\"DESC\">Above Average</Col><Col id=\"CD\">AV</Col></Row><Row><Col id=\"DESC\">Below Average</Col><Col id=\"CD\">BV</Col></Row><Row><Col id=\"DESC\">Custom Filter</Col><Col id=\"CD\">CF</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_textfilterCustom", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DESC\">Equals</Col><Col id=\"CD\">EQ</Col></Row><Row><Col id=\"DESC\">Does Not Equal</Col><Col id=\"CD\">NEQ</Col></Row><Row><Col id=\"DESC\">Is Null</Col><Col id=\"CD\">IN</Col></Row><Row><Col id=\"DESC\">Is Not Null</Col><Col id=\"CD\">INN</Col></Row><Row><Col id=\"DESC\">Between</Col><Col id=\"CD\">BT</Col></Row><Row><Col id=\"DESC\">Greater Than</Col><Col id=\"CD\">GT</Col></Row><Row><Col id=\"DESC\">Greater Than Or Equal To</Col><Col id=\"CD\">GTOEQ</Col></Row><Row><Col id=\"DESC\">Less Than</Col><Col id=\"CD\">LT</Col></Row><Row><Col id=\"DESC\">Less Than Or Equal To</Col><Col id=\"CD\">LTOEQ</Col></Row><Row><Col id=\"DESC\">Above Average</Col><Col id=\"CD\">AV</Col></Row><Row><Col id=\"DESC\">Below Average</Col><Col id=\"CD\">BV</Col></Row></Rows>");
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

            obj = new Static("Static03","6","33","36","20",null,null,null,null,null,null,this.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("From");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("From");
            obj.set_textAlign("right");
            this.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03_00","127","33","27","20",null,null,null,null,null,null,this.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("To");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("To");
            obj.set_textAlign("right");
            this.tab.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("msk_from","49","33","70","20",null,null,null,null,null,null,this.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_format("#,###.##");
            obj.set_displaynulltext("0");
            obj.set_displayinvalidtext("0");
            this.tab.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("msk_to","159","33","70","20",null,null,null,null,null,null,this.tab.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_format("#,###.##");
            obj.set_displaynulltext("0");
            obj.set_displayinvalidtext("0");
            this.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab);
            obj.set_text("Numeric Filters");
            this.tab.addChild(obj.name, obj);

            obj = new Combo("cbo_textfilter","0","17",null,"20","0",null,null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_textfilter");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("DESC");
            obj.set_text("Equals");
            obj.set_value("EQ");
            obj.set_index("0");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_values","0","43",null,"20","0",null,null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_values");
            obj.set_codecolumn("DESC");
            obj.set_datacolumn("DESC");
            obj.set_value("BW");
            obj.set_index("-1");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_from","2.44%","70",null,"20","80.49%",null,null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("From");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("From");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_to","2.44%","100",null,"20","80.49%",null,null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("To");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("To");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_valuesFrom","50","70",null,"20","0",null,null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_values");
            obj.set_codecolumn("DESC");
            obj.set_datacolumn("DESC");
            obj.set_visible("false");
            obj.set_value("BW");
            obj.set_index("-1");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_valuesTo","50","100",null,"20","0",null,null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_values");
            obj.set_codecolumn("DESC");
            obj.set_datacolumn("DESC");
            obj.set_visible("false");
            obj.set_value("BW");
            obj.set_index("-1");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_custom","1","141",null,"150","1",null,null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("6");
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
            obj.set_innerdataset("ds_values");
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
            obj.set_innerdataset("ds_values");
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
        this.registerScript("com_filterNum.xfdl", function() {
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
        	this.fn_setDsValues();
        	this.ds_textfilter.filter("CD!='TN' && CD!='BN'");
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
        //	this.tab.Tabpage1.form.msk_from.set_value(objDs.getMin(objDs.getColID(this.objGrdCol)));
        //	this.tab.Tabpage1.form.msk_to.set_value(objDs.getMax(objDs.getColID(this.objGrdCol)));
        	this.tab.Tabpage1.form.msk_from.set_value(objDs.getMin(colNm));
        	this.tab.Tabpage1.form.msk_to.set_value(objDs.getMax(colNm));

        	var row = this.ds_values.addRow();
        	this.ds_values.setColumn(row,"DESC","Select a Value..");
        	for(var i=0; i<objDs.rowcount; i++){
        		var seekVal = objDs.getColumn(i,colNm);
        		if(this.ds_values.findRow("VAL",this.gfn_isEmpty(seekVal))>=0) continue;
        		var row = this.ds_values.findRowExpr("VAL>"+this.gfn_isEmpty(seekVal));
        		if(row>=0){
        			this.ds_values.insertRow(row);
        		}else{
        			row = this.ds_values.addRow();
        		}
        		this.ds_values.setColumn(row,"VAL",this.gfn_isEmpty(seekVal));
        		this.ds_values.setColumn(row,"DESC",this.gfn_isEmpty(seekVal));
        		if(this.ds_values.rowcount>100) break;
        	}
        	this.tab.Tabpage2.form.cbo_values.set_index(0);
        	this.tab.Tabpage2.form.cbo_valuesFrom.set_index(0);
        	this.tab.Tabpage2.form.cbo_valuesTo.set_index(0);
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
        		grdObj.setCellProperty("head",this.objGrdCell,"expandshow","23");
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
        	if(e.row<0) return;	//check일 경우 return

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
        	//trace(strFilter);
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

        this.tab_Tabpage1_msk_from_canchange = function(obj,e)
        {
        	var objDs = this.parent.parent.objects[this.objDsNm];
        	var colId = grdObj.getCellProperty("Body", this.objGrdCol, "text").replace("bind:","");//objDs.getColID(this.objGrdCol);
        	var valFrom = e.postvalue;
        	if(this.gfn_isNull(valFrom)) valFrom = 0;
        	var strFilter = colId + " >= " + valFrom;
        	var valTo = this.tab.Tabpage1.form.msk_to.value;
        	if(this.gfn_isNull(valTo)) valTo = 0;
        	var strFilter = strFilter + "&&" + colId + " <= " + valTo;
        	objDs.filter(strFilter);
        	if(!this.gfn_isNull(strFilter)) {
        		this.filterCols = colId;  //this.filterCols = this.filterCols + "," + this.objGrdCol;
        	}

        };

        this.tab_Tabpage1_msk_to_canchange = function(obj,e)
        {
        	var objDs = this.parent.parent.objects[this.objDsNm];
        	var colId = grdObj.getCellProperty("Body", this.objGrdCol, "text").replace("bind:","");//objDs.getColID(this.objGrdCol);
        	var valFrom = this.tab.Tabpage1.form.msk_from.value;
        	if(this.gfn_isNull(valFrom)) valFrom = 0;
        	var strFilter = colId + " >= " + valFrom;
        	var valTo = e.postvalue;
        	if(this.gfn_isNull(valTo)) valTo = 0;
        	var strFilter = strFilter + "&&" + colId + " <= " + valTo;
        	objDs.filter(strFilter);
        	if(!this.gfn_isNull(strFilter)) {
        		this.filterCols = colId;  //this.filterCols = this.filterCols + "," + this.objGrdCol;
        	}

        };

        this.tab_Tabpage2_cbo_textfilter_onitemchanged = function(obj,e)
        {
        	var objDs = this.parent.parent.objects[this.objDsNm];
        	var colNm = grdObj.getCellProperty("Body", this.objGrdCol, "text").replace("bind:","");//objDs.getColID(this.objGrdCol);//
        	//var objColInfo = objDs.getColumnInfo(colNm);
        	if(!this.tab.Tabpage2.form.cbo_values.visible){
        		this.tab.Tabpage2.form.cbo_values.set_index(0);
            }

        	this.tab.Tabpage2.form.cbo_values.set_visible(false);
        	this.tab.Tabpage2.form.sta_from.set_visible(false);
        	this.tab.Tabpage2.form.sta_to.set_visible(false);
        	this.tab.Tabpage2.form.cbo_valuesFrom.set_visible(false);
        	this.tab.Tabpage2.form.cbo_valuesTo.set_visible(false);
        	this.tab.Tabpage2.form.div_custom.set_visible(false);

        	var strFilter = "";
        	switch(e.postvalue) {	//this.tab.Tabpage2.form.cbo_textfilter.value
        		case "EQ":	//Equals
        			this.tab.Tabpage2.form.cbo_values.set_visible(true);
        			if(!this.gfn_isNull(this.tab.Tabpage2.form.cbo_values.value)){
        				strFilter = colNm + "==" + this.tab.Tabpage2.form.cbo_values.value;
        				objDs.filter(strFilter);
        			}
        			break;
        		case "NEQ":	//Does Not Equal
        			this.tab.Tabpage2.form.cbo_values.set_visible(true);
        			if(!this.gfn_isNull(this.tab.Tabpage2.form.cbo_values.value)){
        				strFilter = colNm + "!=" + this.tab.Tabpage2.form.cbo_values.value;
        				objDs.filter(strFilter);
        			}
        			break;
        		case "IN":	//Is Null
        			strFilter = colNm + "==''";
        			objDs.filter(strFilter);
        			break;
        		case "INN":	//Is Not Null
        			strFilter = colNm + "!=''";
        			objDs.filter(strFilter);
        			break;
        		case "BT":	//Between
        			this.tab.Tabpage2.form.sta_from.set_visible(true);
        			this.tab.Tabpage2.form.sta_to.set_visible(true);
        			this.tab.Tabpage2.form.cbo_valuesFrom.set_visible(true);
        			this.tab.Tabpage2.form.cbo_valuesTo.set_visible(true);
        			break;
        		case "GT":	//Greater Than
        			this.tab.Tabpage2.form.cbo_values.set_visible(true);
        			break;
        		case "GTOEQ":	//Greater Than Or Equal To
        			this.tab.Tabpage2.form.cbo_values.set_visible(true);
        			break;
        		case "LT":	//Less Than
        			this.tab.Tabpage2.form.cbo_values.set_visible(true);
        			break;
        		case "LTOEQ":	//Less Than Or Equal To
        			this.tab.Tabpage2.form.cbo_values.set_visible(true);
        			break;
        		case "TN":	//Top N
        			//strFilter = colNm + "!=''"
        			break;
        		case "BN":	//Bottom N
        			//strFilter = colNm + "!=''"
        			break;
        		case "AV":	//Above Average
        			strFilter = colNm + ">" + objDs.getAvgNF(colNm);
        			objDs.filter(strFilter);
        			break;
        		case "BV":	//Below Average
        			strFilter = colNm + "<" + objDs.getAvgNF(colNm);
        			objDs.filter(strFilter);
        			break;
        		case "CF":	//Custom Filter
        			this.tab.Tabpage2.form.div_custom.set_top(44);
        			this.tab.Tabpage2.form.div_custom.set_visible(true);
        			break;
        		default:
        	}
        	trace("strFilter-->"+strFilter);
        	if(!this.gfn_isNull(strFilter)) {
        		this.filterCols = colNm;  //this.filterCols = this.filterCols + "," + this.objGrdCol;
        	}


        };

        this.tab_Tabpage2_cbo_values_onitemchanged = function(obj,e)
        {
        	var objDs = this.parent.parent.objects[this.objDsNm];
        	var objColInfo = objDs.getColumnInfo(colNm);

        	var colNm = grdObj.getCellProperty("Body", this.objGrdCol, "text").replace("bind:","");

        	var strFilter = "";
        	switch(this.tab.Tabpage2.form.cbo_textfilter.value) {
        	case "EQ":	//Equals
        		strFilter = colNm + "==" + e.postvalue;
        		objDs.filter(strFilter);
        		break;
        	case "NEQ":	//Does Not Equal
        		strFilter = colNm + "!=" + e.postvalue;
        		objDs.filter(strFilter);
        		break;
        	case "IN":	//Is Null
        		strFilter = colNm + "==''";
        		objDs.filter(strFilter);
        		break;
        	case "INN":	//Is Not Null
        		strFilter = colNm + "!=''";
        		objDs.filter(strFilter);
        		break;
        	case "BT":	//Between
        		break;
        	case "GT":	//Greater Than
        		strFilter = colNm + ">" + e.postvalue;
        		objDs.filter(strFilter);
        		break;
        	case "GTOEQ":	//Greater Than Or Equal To
        		strFilter = colNm + ">=" + e.postvalue;
        		objDs.filter(strFilter);
        		break;
        	case "LT":	//Less Than
        		strFilter = colNm + "<" + e.postvalue;
        		objDs.filter(strFilter);
        		break;
        	case "LTOEQ":	//Less Than Or Equal To
        		strFilter = colNm + "<=" + e.postvalue;
        		objDs.filter(strFilter);
        		break;
        	case "TN":	//Top N
        		//strFilter = colNm + "!=''"
        		break;
        	case "BN":	//Bottom N
        		//strFilter = colNm + "!=''"
        		break;
        	case "AV":	//Above Average
        		strFilter = colNm + ">" + objDs.getAvgNF(colNm);
        		objDs.filter(strFilter);
        		break;
        	case "BV":	//Below Average
        		strFilter = colNm + "<" + objDs.getAvgNF(colNm);
        		objDs.filter(strFilter);
        		break;
        	case "CF":	//Custom Filter
        		break;
        	default:
        	}
        	trace("strFilter2-->"+strFilter);
        	if(!this.gfn_isNull(strFilter)) {
        		this.filterCols = colNm;  //this.filterCols = this.filterCols + "," + this.objGrdCol;
        	}

        };

        this.tab_Tabpage2_cbo_valuesFrom_onitemchanged = function(obj,e)
        {
        	var objDs = this.parent.parent.objects[this.objDsNm];
        	var objColInfo = objDs.getColumnInfo(colNm);

        	var colNm = grdObj.getCellProperty("Body", this.objGrdCol, "text").replace("bind:","");//objDs.getColID(this.objGrdCol);//grdObj.getCellProperty("Body", this.objGrdCell, "text").replace("bind:","");
        	strFilter = colNm + ">=" + e.postvalue;
        	objDs.filter(strFilter);
        	trace("strFilter3-->"+strFilter);
        	if(!this.gfn_isNull(strFilter)) {
        		this.filterCols = colNm;  //this.filterCols = this.filterCols + "," + this.objGrdCol;
        	}

        };

        this.tab_Tabpage2_cbo_valuesTo_onitemchanged = function(obj,e)
        {
        	var objDs = this.parent.parent.objects[this.objDsNm];
        	var objColInfo = objDs.getColumnInfo(colNm);

        	var colNm = grdObj.getCellProperty("Body", this.objGrdCell, "text").replace("bind:","");//objDs.getColID(this.objGrdCol);//grdObj.getCellProperty("Body", this.objGrdCell, "text").replace("bind:","");
        	strFilter = colNm + "<=" + e.postvalue;
        	objDs.filter(strFilter);
        	trace("strFilter4-->"+strFilter);
        	if(!this.gfn_isNull(strFilter)) {
        		this.filterCols = colNm;  //this.filterCols = this.filterCols + "," + this.objGrdCol;
        	}


        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab.Tabpage1.form.msk_from.addEventHandler("canchange",this.tab_Tabpage1_msk_from_canchange,this);
            this.tab.Tabpage1.form.msk_to.addEventHandler("canchange",this.tab_Tabpage1_msk_to_canchange,this);
            this.tab.Tabpage2.form.cbo_textfilter.addEventHandler("onitemchanged",this.tab_Tabpage2_cbo_textfilter_onitemchanged,this);
            this.tab.Tabpage2.form.cbo_values.addEventHandler("onitemchanged",this.tab_Tabpage2_cbo_values_onitemchanged,this);
            this.tab.Tabpage2.form.cbo_valuesFrom.addEventHandler("onitemchanged",this.tab_Tabpage2_cbo_valuesFrom_onitemchanged,this);
            this.tab.Tabpage2.form.cbo_valuesTo.addEventHandler("onitemchanged",this.tab_Tabpage2_cbo_valuesTo_onitemchanged,this);
            this.tab.Tabpage2.form.div_custom.form.cbo_textfilter.addEventHandler("onitemchanged",this.tab_Tabpage2_div_custom_cbo_textfilter_onitemchanged,this);
            this.tab.Tabpage2.form.div_custom.form.cbo_values.addEventHandler("onitemchanged",this.tab_Tabpage2_div_custom_cbo_values_onitemchanged,this);
            this.tab.Tabpage2.form.div_custom.form.edt_textfilter.addEventHandler("canchange",this.tab_Tabpage2_div_custom_edt_textfilter_canchange,this);
            this.tab.Tabpage2.form.div_custom.form.cbo_textfilter2.addEventHandler("onitemchanged",this.tab_Tabpage2_div_custom_cbo_textfilter2_onitemchanged,this);
            this.tab.Tabpage2.form.div_custom.form.cbo_values2.addEventHandler("onitemchanged",this.tab_Tabpage2_div_custom_cbo_values2_onitemchanged,this);
            this.tab.Tabpage2.form.div_custom.form.edt_textfilter2.addEventHandler("canchange",this.tab_Tabpage2_div_custom_edt_textfilter2_canchange,this);
            this.tab.Tabpage2.form.div_custom.form.rdo_andOr.addEventHandler("onitemchanged",this.tab_Tabpage2_div_custom_rdo_andOr_onitemchanged,this);
            this.btn_clearfilter.addEventHandler("onclick",this.btn_clearfilter_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.ds_values.addEventHandler("onvaluechanged",this.ds_values_onvaluechanged,this);
        };
        this.loadIncludeScript("com_filterNum.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
