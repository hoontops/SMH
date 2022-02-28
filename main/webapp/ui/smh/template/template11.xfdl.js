(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template06");
            this.set_titletext("조회조건+그리드T+(그리드L+그리드R)B_RL Shuttle Button");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"설비ID\" type=\"STRING\" size=\"256\"/><Column id=\"설비명\" type=\"STRING\" size=\"256\"/><Column id=\"설비그룹명\" type=\"STRING\" size=\"256\"/><Column id=\"작업장ID\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"공정ID\" type=\"STRING\" size=\"256\"/><Column id=\"거래처ID\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\"/><Col id=\"No\">1</Col><Col id=\"설비ID\">MR81005</Col><Col id=\"설비명\">OUT-STOCKER 05호기</Col><Col id=\"설비그룹명\">OUT-STOCKER</Col><Col id=\"작업장ID\">F102002</Col><Col id=\"작업장\">1적층_2F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">2</Col><Col id=\"설비ID\">MR81004</Col><Col id=\"설비명\">OUT-STOCKER 04호기</Col><Col id=\"설비그룹명\">OUT-STOCKER</Col><Col id=\"작업장ID\">F102002</Col><Col id=\"작업장\">1적층_2F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">3</Col><Col id=\"설비ID\">MR81003</Col><Col id=\"설비명\">OUT-STOCKER 03호기</Col><Col id=\"설비그룹명\">OUT-STOCKER</Col><Col id=\"작업장ID\">F102002</Col><Col id=\"작업장\">1적층_2F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">4</Col><Col id=\"설비ID\">MR81002</Col><Col id=\"설비명\">OUT-STOCKER 02호기</Col><Col id=\"설비그룹명\">OUT-STOCKER</Col><Col id=\"작업장ID\">F102002</Col><Col id=\"작업장\">1적층_2F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">5</Col><Col id=\"설비ID\">MR81001</Col><Col id=\"설비명\">OUT-STOCKER 01호기</Col><Col id=\"설비그룹명\">OUT-STOCKER</Col><Col id=\"작업장ID\">F102002</Col><Col id=\"작업장\">1적층_2F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">6</Col><Col id=\"설비ID\">MR71005</Col><Col id=\"설비명\">IN-STOCKER 05호기</Col><Col id=\"설비그룹명\">IN-STOCKER</Col><Col id=\"작업장ID\">F102002</Col><Col id=\"작업장\">1적층_2F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">7</Col><Col id=\"설비ID\">MR71004</Col><Col id=\"설비명\">IN-STOCKER 04호기</Col><Col id=\"설비그룹명\">IN-STOCKER</Col><Col id=\"작업장ID\">F102002</Col><Col id=\"작업장\">1적층_2F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">8</Col><Col id=\"설비ID\">MR71003</Col><Col id=\"설비명\">IN-STOCKER 03호기</Col><Col id=\"설비그룹명\">IN-STOCKER</Col><Col id=\"작업장ID\">F102002</Col><Col id=\"작업장\">1적층_2F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">9</Col><Col id=\"설비ID\">MR71002</Col><Col id=\"설비명\">IN-STOCKER 02호기</Col><Col id=\"설비그룹명\">IN-STOCKER</Col><Col id=\"작업장ID\">F102002</Col><Col id=\"작업장\">1적층_2F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">10</Col><Col id=\"설비ID\">MR71001</Col><Col id=\"설비명\">IN-STOCKER 01호기</Col><Col id=\"설비그룹명\">IN-STOCKER</Col><Col id=\"작업장ID\">F102002</Col><Col id=\"작업장\">1적층_2F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">11</Col><Col id=\"설비ID\">MR61005</Col><Col id=\"설비명\">이동전차 05호기</Col><Col id=\"설비그룹명\">이동전차</Col><Col id=\"작업장ID\">F102002</Col><Col id=\"작업장\">1적층_2F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">12</Col><Col id=\"설비ID\">MR61004</Col><Col id=\"설비명\">이동전차 04호기</Col><Col id=\"설비그룹명\">이동전차</Col><Col id=\"작업장ID\">F102002</Col><Col id=\"작업장\">1적층_2F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">13</Col><Col id=\"설비ID\">MR61003</Col><Col id=\"설비명\">이동전차 03호기</Col><Col id=\"설비그룹명\">이동전차</Col><Col id=\"작업장ID\">F102002</Col><Col id=\"작업장\">1적층_2F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">14</Col><Col id=\"설비ID\">MR61002</Col><Col id=\"설비명\">이동전차 02호기</Col><Col id=\"설비그룹명\">이동전차</Col><Col id=\"작업장ID\">F102002</Col><Col id=\"작업장\">1적층_2F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">15</Col><Col id=\"설비ID\">MR61001</Col><Col id=\"설비명\">이동전차 01호기</Col><Col id=\"설비그룹명\">이동전차</Col><Col id=\"작업장ID\">F102002</Col><Col id=\"작업장\">1적층_2F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">16</Col><Col id=\"설비ID\">MQ31009</Col><Col id=\"설비명\">테이핑머신기 09호기</Col><Col id=\"설비그룹명\">테이핑머신</Col><Col id=\"작업장ID\">F105001</Col><Col id=\"작업장\">SHT 노광_5F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">17</Col><Col id=\"설비ID\">MQ31008</Col><Col id=\"설비명\">테이핑머신기 08호기</Col><Col id=\"설비그룹명\">테이핑머신</Col><Col id=\"작업장ID\">F105001</Col><Col id=\"작업장\">SHT 노광_5F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">18</Col><Col id=\"설비ID\">MQ31007</Col><Col id=\"설비명\">테이핑머신기 07호기</Col><Col id=\"설비그룹명\">테이핑머신</Col><Col id=\"작업장ID\">F105001</Col><Col id=\"작업장\">SHT 노광_5F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"설비ID\">MQ31006</Col><Col id=\"설비명\">테이핑머신기 06호기</Col><Col id=\"설비그룹명\">테이핑머신</Col><Col id=\"작업장ID\">F104007</Col><Col id=\"작업장\">SHT 부식_4F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"설비ID\">MQ31005</Col><Col id=\"설비명\">테이핑머신기 05호기</Col><Col id=\"설비그룹명\">테이핑머신</Col><Col id=\"작업장ID\">F104007</Col><Col id=\"작업장\">SHT 부식_4F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"설비ID\">MQ31003</Col><Col id=\"설비명\">테이핑머신기 02호기</Col><Col id=\"설비그룹명\">테이핑머신</Col><Col id=\"작업장ID\">F102016</Col><Col id=\"작업장\">정면(금도금)_2F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"설비ID\">MQ31002</Col><Col id=\"설비명\">테이핑머신기 01호기</Col><Col id=\"설비그룹명\">테이핑머신</Col><Col id=\"작업장ID\">F104014</Col><Col id=\"작업장\">정면(PSR)_4F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"설비ID\">MQ31001</Col><Col id=\"설비명\">테이핑머신기 01호기</Col><Col id=\"설비그룹명\">테이핑머신</Col><Col id=\"작업장ID\">F1B1001</Col><Col id=\"작업장\">SHT 동도금_B1F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"설비ID\">MQ22002</Col><Col id=\"설비명\">크린머신기(간지) 02호기</Col><Col id=\"설비그룹명\">크린머신기(간지)</Col><Col id=\"작업장ID\">F103002</Col><Col id=\"작업장\">M/K_3F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"chk\"/><Col id=\"설비ID\">MQ22001</Col><Col id=\"설비명\">크린머신기(간지) 01호기</Col><Col id=\"설비그룹명\">크린머신기(간지)</Col><Col id=\"작업장ID\">F102001</Col><Col id=\"작업장\">1가접_2F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"설비ID\">MQ21003</Col><Col id=\"설비명\">크린머신기 01호기</Col><Col id=\"설비그룹명\">크린머신기</Col><Col id=\"작업장ID\">F104018</Col><Col id=\"작업장\">필름실_4F</Col><Col id=\"공정ID\"/><Col id=\"거래처ID\"/><Col id=\"유효상태\">유효</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"점검구분\" type=\"STRING\" size=\"256\"/><Column id=\"점검구분명\" type=\"STRING\" size=\"256\"/><Column id=\"점검항목\" type=\"STRING\" size=\"256\"/><Column id=\"점검항목명\" type=\"STRING\" size=\"256\"/><Column id=\"설명\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"chk\"/><Col id=\"점검구분\">RegularCheck</Col><Col id=\"점검구분명\">MaintItemClass1</Col><Col id=\"점검항목\">MonthlyCheck</Col><Col id=\"점검항목명\">MaintItem2</Col><Col id=\"유효상태\">유효</Col><Col id=\"설명\">월간점검</Col></Row><Row><Col id=\"점검구분\">RegularCheck</Col><Col id=\"점검구분명\">MaintItemClass1</Col><Col id=\"점검항목\">YearlyCheck</Col><Col id=\"점검항목명\">MaintItem3</Col><Col id=\"설명\">연간점검</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd02", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"순번\" type=\"STRING\" size=\"256\"/><Column id=\"설비ID\" type=\"STRING\" size=\"256\"/><Column id=\"점검구분\" type=\"STRING\" size=\"256\"/><Column id=\"점검구분명\" type=\"STRING\" size=\"256\"/><Column id=\"점검항목\" type=\"STRING\" size=\"256\"/><Column id=\"점검항목명\" type=\"STRING\" size=\"256\"/><Column id=\"보전구분\" type=\"STRING\" size=\"256\"/><Column id=\"점검주기\" type=\"STRING\" size=\"256\"/><Column id=\"점검주기단위\" type=\"STRING\" size=\"256\"/><Column id=\"점검계획유형\" type=\"STRING\" size=\"256\"/><Column id=\"계획기준일\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_00","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_00);
            obj.set_text("Tabpage1");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_00","108","35","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("5");
            obj.set_text("설비 구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","60","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("6");
            obj.set_text("설비그룹");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","60",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_00","171","175","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_01","15","175","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"70","15","97","0",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","80","15","97",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("10");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"155","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("11");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","181","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("12");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("13");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","10",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_02","108","135",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("15");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"60","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label03_00","0","110","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","85","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("18");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_02","108","110","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("19");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","211","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("title","0","0","128","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("설비리스트  <fc v=\"#f31d24\">708</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,"59%","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"설비ID\"/><Cell col=\"3\" text=\"설비명\"/><Cell col=\"4\" text=\"설비그룹명\"/><Cell col=\"5\" text=\"작업장ID\"/><Cell col=\"6\" text=\"작업장\"/><Cell col=\"7\" text=\"공정ID\"/><Cell col=\"8\" text=\"거래처ID\"/><Cell col=\"9\" text=\"유효상태\" cssclass=\"cell_point\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:설비ID\"/><Cell col=\"3\" text=\"bind:설비명\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:설비그룹명\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:작업장ID\"/><Cell col=\"6\" text=\"bind:작업장\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:공정ID\"/><Cell col=\"8\" text=\"bind:거래처ID\"/><Cell col=\"9\" text=\"bind:유효상태\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title3","0","grd_00:0","177","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("설비 점검 항목 리스트 <fc v=\"#f31d24\">2</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title3_00","47.39%","grd_00:0","205","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("설비 점검항목 매핑 리스트 <fc v=\"#f31d24\">2</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_01_00","47.39%","title3_00:0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"설비ID\"/><Cell col=\"4\" text=\"점검구분\"/><Cell col=\"5\" text=\"점검구분명\"/><Cell col=\"6\" text=\"점검항목\"/><Cell col=\"7\" text=\"점검항목명\"/><Cell col=\"8\" text=\"보전구분\"/><Cell col=\"9\" text=\"점검주기\"/><Cell col=\"10\" text=\"점검주기단위\"/><Cell col=\"11\" text=\"점검계획유형\"/><Cell col=\"12\" text=\"계획기준일\"/><Cell col=\"13\" text=\"유효상태\" cssclass=\"cell_point\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:순번\"/><Cell col=\"3\" text=\"bind:설비ID\"/><Cell col=\"4\" text=\"bind:점검구분\"/><Cell col=\"5\" text=\"bind:점검구분명\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:점검항목\"/><Cell col=\"7\" text=\"bind:점검항목명\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:보전구분\"/><Cell col=\"9\" text=\"bind:점검주기\"/><Cell col=\"10\" text=\"bind:점검주기단위\"/><Cell col=\"11\" text=\"bind:점검계획유형\"/><Cell col=\"12\" text=\"bind:계획기준일\"/><Cell col=\"13\" text=\"bind:유효상태\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_01","0.00%","title3:0",null,null,"grd_01_00:54","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"점검구분\"/><Cell col=\"3\" text=\"점검구분명\"/><Cell col=\"4\" text=\"점검항목\"/><Cell col=\"5\" text=\"점검항목명\"/><Cell col=\"6\" text=\"설명\"/><Cell col=\"7\" text=\"유효상태\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:점검구분\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:점검구분명\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:점검항목\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:점검항목명\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:설명\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:유효상태\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnRight","grd_01:15","80.57%","24","24",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_shuttleR");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnReload",null,null,"26","24","btnRight:15","grd_01:2",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdReload");
            obj.set_tooltiptext("새로고침");
            this.div_work.addChild(obj.name, obj);

            obj = new Combo("cmb_00",null,null,"100","20","btnReload:10","grd_01:5",null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_text("정기 점검");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label00",null,null,"63","20","cmb_00:10","grd_01:6",null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_text("점검구분");
            obj.set_cssclass("sta_WF_label");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnLeft","grd_01:15","btnRight:10","24","24",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_shuttleL");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"562","15","57","505",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip00_00",null,"562","15","57","544",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("12");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip00_00_00",null,"587","24","10","519",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("13");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
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

            obj = new Static("sta_title","30","16","58","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("화면명");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_new.addEventHandler("onclick",this.fn_new,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("template11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
