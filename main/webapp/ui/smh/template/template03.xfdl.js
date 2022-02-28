(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template03");
            this.set_titletext("조회조건+그리드T+그리드B");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">CCT</Col></Row><Row><Col id=\"data\">IFC</Col></Row><Row><Col id=\"data\">IFV</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">유효</Col></Row><Row><Col id=\"data\">유효하지 않음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb02", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">고객ID</Col></Row><Row><Col id=\"data\">MES고객명</Col></Row><Row><Col id=\"data\">Site고객명</Col></Row><Row><Col id=\"data\">설명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"SiteID\" type=\"STRING\" size=\"256\"/><Column id=\"창고ID\" type=\"STRING\" size=\"256\"/><Column id=\"창고명\" type=\"STRING\" size=\"256\"/><Column id=\"설명\" type=\"STRING\" size=\"256\"/><Column id=\"위치\" type=\"STRING\" size=\"256\"/><Column id=\"장소\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">1</Col><Col id=\"창고ID\">OSP45</Col><Col id=\"창고명\">PT-디스미어</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">2</Col><Col id=\"창고ID\">SUB55</Col><Col id=\"창고명\">SUB 반</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">3</Col><Col id=\"창고ID\">SUB73</Col><Col id=\"창고명\">(S)부식</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">4</Col><Col id=\"창고ID\">OSP64</Col><Col id=\"창고명\">F전자</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">5</Col><Col id=\"창고ID\">OSP202</Col><Col id=\"창고명\">디아이</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">6</Col><Col id=\"창고ID\">OSP276</Col><Col id=\"창고명\">테스트테크(UV)</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">7</Col><Col id=\"창고ID\">FGI11</Col><Col id=\"창고명\">안산 완제품</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">8</Col><Col id=\"창고ID\">FGI01</Col><Col id=\"창고명\">안산생산제품</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">9</Col><Col id=\"창고ID\">SUB200</Col><Col id=\"창고명\">영풍(외주)</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">10</Col><Col id=\"창고ID\">OSP222</Col><Col id=\"창고명\">(S)AOI-1</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">11</Col><Col id=\"창고ID\">OSP90</Col><Col id=\"창고명\">대건</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">12</Col><Col id=\"창고ID\">OSP03</Col><Col id=\"창고명\">대아전자</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">13</Col><Col id=\"창고ID\">SUB47</Col><Col id=\"창고명\">공정기술</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">14</Col><Col id=\"창고ID\">CCT01</Col><Col id=\"창고명\">CCT 상품창고</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">15</Col><Col id=\"창고ID\">OSP74</Col><Col id=\"창고명\">지비티</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">16</Col><Col id=\"창고ID\">SUB66</Col><Col id=\"창고명\">CNC(신)-SHT</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">17</Col><Col id=\"창고ID\">OSP221</Col><Col id=\"창고명\">영석전자(사외)</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">18</Col><Col id=\"창고ID\">OSP194</Col><Col id=\"창고명\">F전자(설비)</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">19</Col><Col id=\"창고ID\">SUB54</Col><Col id=\"창고명\">R/GUIDE(신)</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">20</Col><Col id=\"창고ID\">SUB75</Col><Col id=\"창고명\">(S)M/K</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">21</Col><Col id=\"창고ID\">SUB43</Col><Col id=\"창고명\">RTR  동도금</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"창고ID\">SUB64</Col><Col id=\"창고명\">IF(수직)-동도금</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col><Col id=\"No\">22</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"창고ID\">SUB67</Col><Col id=\"창고명\">기능검사</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col><Col id=\"No\">23</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"창고ID\">SUB46</Col><Col id=\"창고명\">샘플</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col><Col id=\"No\">24</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"창고ID\">SUB44</Col><Col id=\"창고명\">SUB 반</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col><Col id=\"No\">25</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"창고ID\">OSP85</Col><Col id=\"창고명\">센트렉스</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col><Col id=\"No\">26</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"창고ID\">SUB65</Col><Col id=\"창고명\">AUTO PRESS</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col><Col id=\"No\">27</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"창고ID\">OSP38</Col><Col id=\"창고명\">유진산업</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col><Col id=\"No\">28</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"창고ID\">OSP168</Col><Col id=\"창고명\">나노솔루션</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col><Col id=\"No\">29</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"창고ID\">OSP48</Col><Col id=\"창고명\">앤티플렉스</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col><Col id=\"No\">30</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"창고ID\">OSP196</Col><Col id=\"창고명\">태우테크놀리지(주)</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"창고ID\">SUB59</Col><Col id=\"창고명\">IFC(신)-디스미어</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-03-30 15:00:40</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"창고ID\">SUB72</Col><Col id=\"창고명\">(S)노광</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\">2020-03-06 02:36:26</Col><Col id=\"수정일\">INTERFACE</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"창고ID\">REI02</Col><Col id=\"창고명\">안산 재검</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\">2020-03-06 02:36:26</Col><Col id=\"수정일\">INTERFACE</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"창고ID\">SUB57</Col><Col id=\"창고명\">1-자동타발</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\">2020-03-06 02:36:26</Col><Col id=\"수정일\">INTERFACE</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"창고ID\">HDI01</Col><Col id=\"창고명\">영업홀딩제품</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\">2020-03-06 02:36:26</Col><Col id=\"수정일\">INTERFACE</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"창고ID\">OSP30</Col><Col id=\"창고명\">삼오(외)</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\">2020-03-06 02:36:26</Col><Col id=\"수정일\">INTERFACE</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"창고ID\">OSP05</Col><Col id=\"창고명\">IFC_SMT</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\">2020-03-06 02:36:26</Col><Col id=\"수정일\">INTERFACE</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"창고ID\">OSP07</Col><Col id=\"창고명\">삼오</Col><Col id=\"설명\"/><Col id=\"위치\"/><Col id=\"장소\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"수정자\">2020-03-06 02:36:26</Col><Col id=\"수정일\">INTERFACE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"창고위치\" type=\"STRING\" size=\"256\"/><Column id=\"창고위치명\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col></Row><Row><Col id=\"No\">2</Col></Row><Row><Col id=\"No\">3</Col></Row><Row><Col id=\"No\">4</Col></Row><Row><Col id=\"No\">5</Col></Row><Row><Col id=\"No\">6</Col></Row><Row><Col id=\"No\">7</Col></Row><Row><Col id=\"No\">8</Col></Row><Row><Col id=\"No\">9</Col></Row><Row><Col id=\"No\">10</Col></Row><Row><Col id=\"No\">11</Col></Row><Row><Col id=\"No\">12</Col></Row><Row><Col id=\"No\">13</Col></Row><Row><Col id=\"No\">14</Col></Row><Row><Col id=\"No\">15</Col></Row><Row><Col id=\"No\">16</Col></Row><Row><Col id=\"No\">17</Col></Row><Row><Col id=\"No\">18</Col></Row><Row><Col id=\"No\">19</Col></Row><Row><Col id=\"No\">20</Col></Row><Row><Col id=\"No\">21</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
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
            obj.set_taborder("6");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_00","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb00");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("7");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","60","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","35","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb01");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_02","108","60","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb02");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","85",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","125","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","125","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("11");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("12");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"105","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("13");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","131","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("14");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_00);
            obj.set_text("Tabpage2");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","144","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("창고 리스트  <fc v=\"#f31d24\">2,300</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,null,"0","299",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Site ID\"/><Cell col=\"2\" text=\"창고 ID\"/><Cell col=\"3\" text=\"창고명\"/><Cell col=\"4\" text=\"설명\"/><Cell col=\"5\" text=\"위치\"/><Cell col=\"6\" text=\"장소\"/><Cell col=\"7\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"8\" text=\"생성자\"/><Cell col=\"9\" text=\"수정자\"/><Cell col=\"10\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:SiteID\"/><Cell col=\"2\" text=\"bind:창고ID\"/><Cell col=\"3\" text=\"bind:창고명\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:설명\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:위치\"/><Cell col=\"6\" text=\"bind:장소\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:유효상태\"/><Cell col=\"8\" text=\"bind:생성자\"/><Cell col=\"9\" text=\"bind:수정자\"/><Cell col=\"10\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01_00","0",null,"147","34",null,"265",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("Locator List  <fc v=\"#f31d24\">2,300</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnExcelUp00",null,null,"29","24","0","269",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_00_00","0",null,null,"265","0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_grd01");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"창고위치\"/><Cell col=\"2\" text=\"창고위치명\"/><Cell col=\"3\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"생성자\"/><Cell col=\"5\" text=\"생성일\"/><Cell col=\"6\" text=\"수정자\"/><Cell col=\"7\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:창고위치\"/><Cell col=\"2\" text=\"bind:창고위치명\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:유효상태\"/><Cell col=\"4\" text=\"bind:생성자\"/><Cell col=\"5\" text=\"bind:생성일\"/><Cell col=\"6\" text=\"bind:수정자\"/><Cell col=\"7\" text=\"bind:수정일\"/></Band></Format></Formats>");
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
        this.loadIncludeScript("template03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
