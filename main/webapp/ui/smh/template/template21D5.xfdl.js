(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS04300D5");
            this.set_titletext("수입(원자재가공품)");
            if (Form == this.constructor)
            {
                this._setFormPosition(958,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"자재분류\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"자재분류\">BA[일반SUBBASE]</Col><Col id=\"No\">1</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"자재분류\">BS[BONDING]</Col><Col id=\"No\">2</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"자재분류\">CL[COVERLAY]</Col><Col id=\"No\">3</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"자재분류\">CT[캐리어테잎-ARRAY用]</Col><Col id=\"No\">4</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"자재분류\">DM[DUMMY]</Col><Col id=\"No\">5</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"자재분류\">DT[접착제]</Col><Col id=\"No\">6</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"자재분류\">EP[보강판EPOXY]</Col><Col id=\"No\">7</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"자재분류\">FG[MAIN BASE]</Col><Col id=\"No\">8</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"자재분류\">FR[FR4 FCCL]</Col><Col id=\"No\">9</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"자재분류\">GF[GND 확장 FILM]</Col><Col id=\"No\">10</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"자재분류\">IF[G-FAST,절연필름]</Col><Col id=\"No\">11</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"자재분류\">KT[KAPTON-TAPE]</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">12</Col></Row><Row><Col id=\"자재분류\">MT[METAL-SHEET]</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">13</Col></Row><Row><Col id=\"자재분류\">NT[캐리어테잎-CNC단차用]</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">14</Col></Row><Row><Col id=\"자재분류\">PE[보강판PET]</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">15</Col></Row><Row><Col id=\"자재분류\">PI[보강판PI]</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">16</Col></Row><Row><Col id=\"자재분류\">PP[PREPREG]</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">17</Col></Row><Row><Col id=\"자재분류\">PT[캐리어테잎-스크래치방지用]</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">18</Col></Row><Row><Col id=\"자재분류\">SB[노광공정SUBBASE]</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">19</Col></Row><Row><Col id=\"자재분류\">SE[층간접착제]</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">20</Col></Row><Row><Col id=\"자재분류\">SH[SHIELD]</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">21</Col></Row><Row><Col id=\"자재분류\">SU[보강판SUS]</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">22</Col></Row><Row><Col id=\"자재분류\">WT[캐리어테잎-주름방지用]</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">23</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사방법명\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"검사방법명\">두께검사</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\">20200214164515</Col><Col id=\"수정자\"/><Col id=\"수정일\">20200214164515</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"검사방법명\">접착제검사</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">3</Col><Col id=\"검사방법명\">치수검사</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">4</Col><Col id=\"검사방법명\">환경유해물질</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree00", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">0</Col><Col id=\"name\">INTERFLEX</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"name\">AL[알루미늄]</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"name\">BA[일반SUBBASE]</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">BASE검사</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">두께검사</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">치수검사</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">환경유해물질</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"name\">BS[BONDING]</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">BONDING</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">B/S검사</Col></Row><Row><Col id=\"name\">두께검사</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"name\">치수검사</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"name\">환경유해물질</Col><Col id=\"level\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd02", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목명\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목유형\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"검사항목명\">거침(돌기)</Col><Col id=\"검사항목유형\">OK_NG</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"검사항목명\">기포</Col><Col id=\"검사항목유형\">OK_NG</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"검사항목명\">스크래치</Col><Col id=\"검사항목유형\">OK_NG</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"검사항목명\">자재혼입</Col><Col id=\"검사항목유형\">OK_NG</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"No\">5</Col><Col id=\"검사항목명\">주름</Col><Col id=\"검사항목유형\">OK_NG</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"No\">6</Col><Col id=\"검사항목명\">찍힘</Col><Col id=\"검사항목유형\">OK_NG</Col><Col id=\"유효상태\">유효</Col></Row></Rows>");
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
            obj.set_value("수입(원자재)");
            obj.set_cssclass("display");
            obj.set_text("수입(원자재)");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_title1","0","66","70","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검사 종류");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","0","100","230","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_03","15","10",null,"20","37",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_search03",null,"10","22","20","15",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.div_00.addChild(obj.name, obj);

            obj = new Grid("grd_tree","0","141","230",null,null,"0",null,null,null,null,this);
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
            this.addChild(obj.name, obj);

            obj = new Static("sta_title4","84.00%","66","117","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("검사 항목 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title2","240","66","108","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("자재분류리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_02","84%","100",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사항목명\"/><Cell col=\"2\" text=\"검사항목유형\"/><Cell col=\"3\" text=\"유효상태\" cssclass=\"cell_end,cell_point\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사항목명\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:검사항목유형\"/><Cell col=\"3\" text=\"bind:유효상태\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_01","488","100",null,null,"grd_02:10","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사 방법 명\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"생성자\"/><Cell col=\"4\" text=\"생성일\"/><Cell col=\"5\" text=\"수정자\"/><Cell col=\"6\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사방법명\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:유효상태\"/><Cell col=\"3\" text=\"bind:생성자\"/><Cell col=\"4\" text=\"bind:생성일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"5\" text=\"bind:수정자\"/><Cell col=\"6\" text=\"bind:수정일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","240","100","238",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"140\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재분류\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"유효상태\" cssclass=\"cell_point,cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:자재분류\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:유효상태\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"72","29","24","sta_title4:10",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_basIdclass",null,"72","26","24","btn_xlUp:0",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_basIdclass",null,"72","26","24","btn_delRow_ds_basIdclass:0",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlUp00","449","72","29","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlUp01",null,"72","29","24","0",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title3","488","66","117","34",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("검사 방법 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
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
        this.loadIncludeScript("template21D5.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
