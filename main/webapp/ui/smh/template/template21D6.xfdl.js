(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS04300D6");
            this.set_titletext("수질검사");
            if (Form == this.constructor)
            {
                this._setFormPosition(958,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사방법명\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"검사방법명\">수질검사</Col><Col id=\"No\">1</Col><Col id=\"유효상태\">유효</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목명\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목유형\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"검사항목명\">02.PH</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"생성자\"/><Col id=\"생성일\">20200214164515</Col><Col id=\"수정자\"/><Col id=\"수정일\">20200214164515</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"검사항목명\">03.Cl</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"검사항목명\">1. PH</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"검사항목명\">1번공급수 온도(℃)</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"검사항목명\">2. 탁도</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">5</Col></Row><Row><Col id=\"검사항목명\">2번공급수 온도(℃)</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">6</Col></Row><Row><Col id=\"검사항목명\">3. 전기전도도</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">7</Col></Row><Row><Col id=\"검사항목명\">3번공급수 온도(℃)</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">8</Col></Row><Row><Col id=\"검사항목명\">4. Cl</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">9</Col></Row><Row><Col id=\"검사항목명\">4번공급수 온도(℃)</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">10</Col></Row><Row><Col id=\"검사항목명\">5. TOC</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">11</Col></Row><Row><Col id=\"검사항목명\">공급수 온도(℃)</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">12</Col></Row><Row><Col id=\"검사항목명\">순수 PH</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">13</Col></Row><Row><Col id=\"검사항목명\">온도(℃)</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">14</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","34",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","12.55%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("검사 종류 명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_00","Static30:5","5","250","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_value("수질검사");
            obj.set_cssclass("display");
            obj.set_text("수질검사");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_title1","0","66","70","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검사 종류");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title3","50%","66","117","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검사 방법 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_01","50%","100",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사항목명\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"검사항목유형\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"생성자\"/><Cell col=\"5\" text=\"생성일\"/><Cell col=\"6\" text=\"수정자\"/><Cell col=\"7\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사항목명\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:검사항목유형\"/><Cell col=\"3\" text=\"bind:유효상태\"/><Cell col=\"4\" text=\"bind:생성자\"/><Cell col=\"5\" text=\"bind:생성일\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\"/><Cell col=\"6\" text=\"bind:수정자\"/><Cell col=\"7\" text=\"bind:수정일\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","100",null,null,"grd_01:10","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사방법명\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"생성자\"/><Cell col=\"4\" text=\"생성일\"/><Cell col=\"5\" text=\"수정자\"/><Cell col=\"6\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사방법명\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:유효상태\"/><Cell col=\"3\" text=\"bind:생성자\"/><Cell col=\"4\" text=\"bind:생성일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"5\" text=\"bind:수정자\"/><Cell col=\"6\" text=\"bind:수정일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"72","29","24","0",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_basIdclass",null,"72","26","24","29",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_basIdclass",null,"72","26","24","55",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlUp00",null,"72","29","24","sta_title3:10",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_basIdclass00",null,"72","26","24","519",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_basIdclass00",null,"72","26","24","btn_delRow_ds_basIdclass00:0",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",958,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("template21D6.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
