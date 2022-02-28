(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS04300D1");
            this.set_titletext("약품검사");
            if (Form == this.constructor)
            {
                this._setFormPosition(958,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사방법명\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"검사방법명\">IPQC</Col><Col id=\"No\">1</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">허준</Col><Col id=\"수정자\">허준</Col><Col id=\"수정일\">20200424095731</Col><Col id=\"생성일\">20200424095731</Col></Row><Row><Col id=\"검사방법명\">규격측정(계측값)</Col><Col id=\"No\">2</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"수정자\"/><Col id=\"수정일\"/><Col id=\"생성일\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목명\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목유형\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"검사항목명\">300-T</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\">20200214164515</Col><Col id=\"수정자\"/><Col id=\"수정일\">20200214164515</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"검사항목명\">ACID CLEAN 320</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">3</Col><Col id=\"검사항목명\">Au Matal</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">4</Col><Col id=\"검사항목명\">CG-125 A</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">5</Col><Col id=\"검사항목명\">CG-125 B</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">6</Col><Col id=\"검사항목명\">CS-507</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">7</Col><Col id=\"검사항목명\">Cl</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">8</Col><Col id=\"검사항목명\">Cleaner</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">임용희</Col><Col id=\"생성일\">20200214164515</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">9</Col><Col id=\"검사항목명\">Conditioner</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">10</Col><Col id=\"검사항목명\">Cu</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">11</Col><Col id=\"검사항목명\">Cu 불순물</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">12</Col><Col id=\"검사항목명\">CuSO4</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">13</Col><Col id=\"검사항목명\">D-70</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">14</Col><Col id=\"검사항목명\">FS-300</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">임용희</Col><Col id=\"생성일\">20200214164515</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">15</Col><Col id=\"검사항목명\">H2O2</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">16</Col><Col id=\"검사항목명\">H2SO4</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">17</Col><Col id=\"검사항목명\">HCHO</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">18</Col><Col id=\"검사항목명\">HVS-202 A</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">19</Col><Col id=\"검사항목명\">HVS-202 B</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">20</Col><Col id=\"검사항목명\">K2CO3</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">21</Col><Col id=\"검사항목명\">Mn</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">Na2Co3</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">NaOH</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">NaOH (33%)</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">Ni Matal</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">Ni 불순물</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">Normality</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">ORC-124SL</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">ORC-212</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">ORC-240NH</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">ORC-410B</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">ORC-435A</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">ORC-445R</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">ORC-455</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">OXONE (TEST)</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">P-copper</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">임용희</Col><Col id=\"생성일\">20200214164515</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">PC-316</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">Pd</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">Per Mn</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">Ph</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">ST-901 AM</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">ST-901 BM</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">VF-100 Brigthner</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">VF-100 Leveler</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">VF-100 Wetter</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">bath strenght</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">conditiner P500</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">임용희</Col><Col id=\"생성일\">20200214164515</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">solid 1단</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">solid 2단</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"검사항목명\">비중</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"검사항목명\">환원제</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col></Row></Rows>");
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
            obj.set_value("약품검사");
            obj.set_cssclass("display");
            obj.set_text("약품검사");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_title1","0","66","107","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검사 방법 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title2","45%","66","117","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검사 항목 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,"72","29","24","sta_title2:10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel00",null,"72","26","24","btnExcelUp:0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd00",null,"72","26","24","btnDel00:0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel01",null,"72","26","24","29",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd01",null,"72","26","24","55",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUp01",null,"72","29","24","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00_00","45%","100",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_grd01");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사항목명\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"검사 항목 유형\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"생성자\"/><Cell col=\"5\" text=\"생성일\"/><Cell col=\"6\" text=\"수정자\"/><Cell col=\"7\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사항목명\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:검사항목유형\"/><Cell col=\"3\" text=\"bind:유효상태\"/><Cell col=\"4\" text=\"bind:생성자\"/><Cell col=\"5\" text=\"bind:생성일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"6\" text=\"bind:수정자\"/><Cell col=\"7\" text=\"bind:수정일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","100",null,null,"grd_00_00:10","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사 방법 명\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"생성자\"/><Cell col=\"4\" text=\"생성일\"/><Cell col=\"5\" text=\"수정자\"/><Cell col=\"6\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사방법명\" textAlign=\"left\" expandshow=\"show\" expandsize=\"24\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"2\" text=\"bind:유효상태\"/><Cell col=\"3\" text=\"bind:생성자\"/><Cell col=\"4\" text=\"bind:생성일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"5\" text=\"bind:수정자\"/><Cell col=\"6\" text=\"bind:수정일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
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
        this.loadIncludeScript("template21D1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
