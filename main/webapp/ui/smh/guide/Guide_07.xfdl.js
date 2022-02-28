(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide_07");
            this.set_titletext("Chart");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,2332);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_barchart", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">2018</Col><Col id=\"data\">500</Col></Row><Row><Col id=\"name\">2019</Col><Col id=\"data\">532</Col></Row><Row><Col id=\"name\">2020</Col><Col id=\"data\">609</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_barchart00", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"data1\" type=\"STRING\" size=\"256\"/><Column id=\"data2\" type=\"STRING\" size=\"256\"/><Column id=\"data3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">2018</Col><Col id=\"data1\">500</Col><Col id=\"data2\">303</Col><Col id=\"data3\">512</Col></Row><Row><Col id=\"name\">2019</Col><Col id=\"data1\">532</Col><Col id=\"data2\">567</Col><Col id=\"data3\">235</Col></Row><Row><Col id=\"name\">2020</Col><Col id=\"data1\">609</Col><Col id=\"data2\">235</Col><Col id=\"data3\">135</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pieChart00", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">문재인</Col><Col id=\"data\">64</Col></Row><Row><Col id=\"name\">이재명</Col><Col id=\"data\">82</Col></Row><Row><Col id=\"name\">이낙연</Col><Col id=\"data\">53</Col></Row><Row><Col id=\"name\">윤석열</Col><Col id=\"data\">89</Col></Row><Row><Col id=\"name\">추미애</Col><Col id=\"data\">23</Col></Row><Row><Col id=\"name\">안철수</Col><Col id=\"data\">24</Col></Row><Row><Col id=\"name\">나경원</Col><Col id=\"data\">67</Col></Row><Row><Col id=\"name\">주호영</Col><Col id=\"data\">54</Col></Row><Row><Col id=\"name\">박범계</Col><Col id=\"data\">73</Col></Row><Row><Col id=\"name\">허경영</Col><Col id=\"data\">10</Col></Row><Row><Col id=\"name\">김종철</Col><Col id=\"data\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_barchart01", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"rainfall\" type=\"STRING\" size=\"256\"/><Column id=\"mean\" type=\"STRING\" size=\"256\"/><Column id=\"base\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">ABBOTSFORD</Col><Col id=\"rainfall\">69</Col><Col id=\"mean\">66.2</Col><Col id=\"base\">30</Col></Row><Row><Col id=\"name\">CONCORD</Col><Col id=\"rainfall\">34</Col><Col id=\"mean\">48.6</Col><Col id=\"base\">30</Col></Row><Row><Col id=\"name\">SYDNEY BOTANIC GARDENS</Col><Col id=\"rainfall\">94.1</Col><Col id=\"mean\">68.2</Col><Col id=\"base\">30</Col></Row><Row><Col id=\"name\">CHATSWOOD BOWLING CLUB</Col><Col id=\"rainfall\">78</Col><Col id=\"mean\">51</Col><Col id=\"base\">30</Col></Row><Row><Col id=\"name\">CONCORD GOLF CLUB</Col><Col id=\"rainfall\">11.2</Col><Col id=\"mean\">59</Col><Col id=\"base\">30</Col></Row><Row><Col id=\"name\">MARRICKVILLE GOLF CLUB</Col><Col id=\"rainfall\">56</Col><Col id=\"mean\">56</Col><Col id=\"base\">30</Col></Row><Row><Col id=\"name\">SYDNEY AIRPORT AMO</Col><Col id=\"rainfall\">122.6</Col><Col id=\"mean\">56</Col><Col id=\"base\">30</Col></Row><Row><Col id=\"name\">PENNANT HILLS</Col><Col id=\"rainfall\">83.4</Col><Col id=\"mean\">64</Col><Col id=\"base\">30</Col></Row><Row><Col id=\"name\">RANDWICK BOWLING CLUB</Col><Col id=\"rainfall\">80</Col><Col id=\"mean\">66</Col><Col id=\"base\">30</Col></Row><Row><Col id=\"name\">SANS SOUCI</Col><Col id=\"rainfall\">36</Col><Col id=\"mean\">51</Col><Col id=\"base\">30</Col></Row><Row><Col id=\"name\">TERREY HILLS AWS</Col><Col id=\"rainfall\">58.9</Col><Col id=\"mean\">69</Col><Col id=\"base\">30</Col></Row><Row><Col id=\"name\">SYDNEY</Col><Col id=\"rainfall\">101</Col><Col id=\"mean\">65</Col><Col id=\"base\">30</Col></Row><Row><Col id=\"name\">STRATHFIELD GOLF CLUB</Col><Col id=\"rainfall\">33.6</Col><Col id=\"mean\">45</Col><Col id=\"base\">30</Col></Row><Row><Col id=\"name\">LUCAS HEIGHTS</Col><Col id=\"rainfall\">91.4</Col><Col id=\"mean\">51</Col><Col id=\"base\">30</Col></Row><Row><Col id=\"name\">CASTLE COVE</Col><Col id=\"rainfall\">53.4</Col><Col id=\"mean\">69</Col><Col id=\"base\">30</Col></Row><Row><Col id=\"name\">PARRAMATTA NORTH</Col><Col id=\"rainfall\">33.6</Col><Col id=\"mean\">52</Col><Col id=\"base\">30</Col></Row><Row><Col id=\"name\">COLLAROY</Col><Col id=\"rainfall\">91.4</Col><Col id=\"mean\">66</Col><Col id=\"base\">30</Col></Row><Row><Col id=\"name\">BANKSTOWN AIRPORT AWS</Col><Col id=\"rainfall\">53.4</Col><Col id=\"mean\">43</Col><Col id=\"base\">30</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart1", this);
            obj._setContents("<ColumnInfo><Column id=\"년월일\" type=\"STRING\" size=\"256\"/><Column id=\"입고LOT\" type=\"STRING\" size=\"256\"/><Column id=\"불량LOT\" type=\"STRING\" size=\"256\"/><Column id=\"불량율\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"불량LOT\">1</Col><Col id=\"불량율\">100</Col><Col id=\"입고LOT\">1</Col><Col id=\"년월일\">20210202</Col></Row><Row><Col id=\"불량LOT\">1</Col><Col id=\"불량율\">20</Col><Col id=\"입고LOT\">5</Col><Col id=\"년월일\">20210208</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart3", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">50</Col><Col id=\"name\">E A40N02E RF CAMERA(6L)-M3/4LㅣFA1</Col></Row><Row><Col id=\"name\">B S16N10B RF CAMERA(6L)-M3/4LㅣFA1</Col><Col id=\"value\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart2", this);
            obj._setContents("<ColumnInfo><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"입고LOT\" type=\"STRING\" size=\"256\"/><Column id=\"불량LOT\" type=\"STRING\" size=\"256\"/><Column id=\"불량율\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"불량LOT\">1</Col><Col id=\"불량율\">20</Col><Col id=\"입고LOT\">5</Col><Col id=\"품목명\">E A40N02E RF CAMERA(6L)-M3/4LㅣFA1</Col></Row><Row><Col id=\"불량LOT\">1</Col><Col id=\"불량율\">100</Col><Col id=\"입고LOT\">1</Col><Col id=\"품목명\">B S16N10B RF CAMERA(6L)-M3/4LㅣFA1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart4", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"percentage\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">1</Col><Col id=\"name\">Open류</Col><Col id=\"percentage\">0.03</Col></Row><Row><Col id=\"name\">Short류</Col><Col id=\"value\">3</Col><Col id=\"percentage\">0.1</Col></Row><Row><Col id=\"name\">기타</Col><Col id=\"value\">8</Col><Col id=\"percentage\">0.28</Col></Row><Row><Col id=\"name\">도금류</Col><Col id=\"value\">1</Col><Col id=\"percentage\">0.03</Col></Row><Row><Col id=\"name\">분석대상</Col><Col id=\"value\">70</Col><Col id=\"percentage\">2.43</Col></Row><Row><Col id=\"name\">홀류</Col><Col id=\"value\">9</Col><Col id=\"percentage\">0.31</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart5", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"percentage\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">1</Col><Col id=\"name\">전 불량률</Col><Col id=\"percentage\">1.67</Col></Row><Row><Col id=\"name\">후 불량률</Col><Col id=\"value\">3</Col><Col id=\"percentage\">1.67</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart6", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"percentage\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">4</Col><Col id=\"name\">Open류</Col><Col id=\"percentage\">0.56</Col></Row><Row><Col id=\"name\">Short류</Col><Col id=\"value\">8</Col><Col id=\"percentage\">1.11</Col></Row><Row><Col id=\"name\">기타</Col><Col id=\"value\">2</Col><Col id=\"percentage\">0.28</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static21","0","0",null,"51","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Chart Bar Color Guide");
            obj.set_cssclass("sta_guide_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","0","51",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_guide_Label");
            obj.set_textAlign("center");
            obj.set_text("Color");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00","347","221","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("30%");
            obj.set_background("#62be1b");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00","382","221","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("30%");
            obj.set_background("#3c4596");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00","417","221","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("30%");
            obj.set_background("#be0071");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00_00","452","221","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("30%");
            obj.set_background("#4bc4c2");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00","697","221","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("30%");
            obj.set_background("#ffe100");
            obj.set_color("#000000");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00_00","487","221","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("30%");
            obj.set_background("#f8b334");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00_00_00","522","221","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("30%");
            obj.set_background("#9c6add");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_00","557","221","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("30%");
            obj.set_background("#2ba3a8");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00_00_00","592","221","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("30%");
            obj.set_background("#0c84c1");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_00_00","627","221","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("30%");
            obj.set_background("#ea5d66");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00_00_00_00","662","221","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("30%");
            obj.set_background("#8fdc55");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00_01","347","261","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("30%");
            obj.set_background("#62be1b");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_01","382","261","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("30%");
            obj.set_background("#3c4596");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00_01","417","261","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("30%");
            obj.set_background("#be0071");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00_00_01","452","261","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("30%");
            obj.set_background("#4bc4c2");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_01","592","261","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("30%");
            obj.set_background("#ffe100");
            obj.set_color("#000000");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00_00_01","487","261","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("30%");
            obj.set_background("#f8b334");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_00_01","522","261","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("30%");
            obj.set_background("#2ba3a8");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00_00_00_01","557","261","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("30%");
            obj.set_background("#ea5d66");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00_01_00","347","301","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("30%");
            obj.set_background("#62be1b");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_01_00","382","301","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("30%");
            obj.set_background("#0c84c1");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00_01_00","417","301","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("30%");
            obj.set_background("#ebebeb");
            obj.set_color("#000000");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00_00_01_00","452","301","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("30%");
            obj.set_background("#ea5d66");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00_00_01_00","487","301","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("30%");
            obj.set_background("#ffe100");
            obj.set_color("#000000");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00_01_00_00","347","341","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("30%");
            obj.set_background("#0c84c1");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_01_00_00","382","341","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("30%");
            obj.set_background("#62be1b");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00_00_01_00_00","417","341","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("30%");
            obj.set_background("#f8b334");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_01_00_00_00","347","381","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("30%");
            obj.set_background("#62be1b");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00_00_01_00_00_00","382","381","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("30%");
            obj.set_background("#ebebeb");
            obj.set_color("#000000");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00_01_00_00_00","347","421","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("30%");
            obj.set_background("#62be1b");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","229","225","109","17",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Color 11개");
            obj.set_cssclass("txt_13B");
            this.addChild(obj.name, obj);

            obj = new Static("Static46_00","229","265","109","17",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Color 8개");
            obj.set_cssclass("txt_13B");
            this.addChild(obj.name, obj);

            obj = new Static("Static46_00_00","229","305","109","17",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Color 5개");
            obj.set_cssclass("txt_13B");
            this.addChild(obj.name, obj);

            obj = new Static("Static46_00_00_00","229","345","109","17",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Color 3개");
            obj.set_cssclass("txt_13B");
            this.addChild(obj.name, obj);

            obj = new Static("Static46_00_00_00_00","229","385","109","17",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Color 2개");
            obj.set_cssclass("txt_13B");
            this.addChild(obj.name, obj);

            obj = new Static("Static46_00_00_00_00_00","229","425","109","17",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Color 1개");
            obj.set_cssclass("txt_13B");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart01","15","502","332","289",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_binddataset("ds_barchart");
            obj.set_border("1px solid #e8e8e8");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Bar Chart",
            		"textfont": "normal 700 12pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"visible": true,
            		"textcolor": "#222222",
            		"subtextfont": "normal 400 10pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"horizontalitemgap": "5",
            		"background": "#ffffff",
            		"markertextgap": "3",
            		"align": "rightcenter"
            	},
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "0px",
            		"background": "#f0f0f0",
            		"linestyle": "0px none",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#cdcdcd",
            		"size": "12",
            		"visible": false
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "0px",
            		"background": "#f0f0f0",
            		"linestyle": "0px none",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#cdcdcd",
            		"size": "12",
            		"visible": false
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletext": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "bold 9pt \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "9pt \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"visible": true,
            		"labelgap": "3",
            		"axislinestyle": "0px none"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barsize": "60",
            			"itemtextvisible": true,
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "bold 9pt \"맑은 고딕\"",
            			"valuecolumn": "bind:data",
            			"baritemtextposition": "end",
            			"baritemtextgap": "10",
            			"barfillstyle": "#62be1b",
            			"barlinestyle": "0px none"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis",
            			"titletext": "valueaxis",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "bold 12pt \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"axislinestyle": "1px solid #e8e8e8",
            			"titlegap": "10",
            			"tickmax": "700"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart02","357","502","327","289",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_binddataset("ds_barchart00");
            obj.set_border("1px solid #e8e8e8");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Bar Chart",
            		"textfont": "normal 700 12pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"visible": true,
            		"textcolor": "#222222",
            		"subtextfont": "normal 400 10pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px",
            		"itemtextfont": "9pt \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"horizontalitemgap": "8",
            		"background": "#ffffff",
            		"markertextgap": "3",
            		"align": "rightcenter"
            	},
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "0px",
            		"background": "#f0f0f0",
            		"linestyle": "0px none",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#cdcdcd",
            		"size": "12",
            		"visible": false
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "0px",
            		"background": "#f0f0f0",
            		"linestyle": "0px solid #ffffff",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#cdcdcd",
            		"size": "12",
            		"visible": false
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"background": "#ffffff"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletext": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "bold 10pt \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "9pt \"맑은 고딕\"",
            		"axislinestyle": "0px none",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"visible": true
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barsize": "80",
            			"itemtextvisible": true,
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "bold 9pt \"맑은 고딕\"",
            			"valuecolumn": "bind:data1",
            			"baritemtextposition": "end",
            			"baritemtextgap": "10",
            			"barfillstyle": "#0c84c1",
            			"barlinestyle": "0px solid #ffffff"
            		},
            		{
            			"id": "series1",
            			"titletext": "series",
            			"barvisible": true,
            			"barsize": "80",
            			"itemtextvisible": true,
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "bold 9pt \"맑은 고딕\"",
            			"valuecolumn": "bind:data2",
            			"baritemtextposition": "end",
            			"baritemtextgap": "10",
            			"barfillstyle": "#62be1b",
            			"barlinestyle": "0px solid #ffffff"
            		},
            		{
            			"id": "series2",
            			"titletext": "series",
            			"barvisible": true,
            			"barsize": "80",
            			"itemtextvisible": true,
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "bold 9pt \"맑은 고딕\"",
            			"valuecolumn": "bind:data3",
            			"baritemtextposition": "end",
            			"baritemtextgap": "10",
            			"barfillstyle": "#f8b334",
            			"barlinestyle": "0px solid #ffffff"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"titletext": "valueaxis",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "bold 14px \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"axislinestyle": "1px solid #e8e8e8",
            			"titlegap": "10",
            			"tickmax": "700"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.addChild(obj.name, obj);

            obj = new PieChart("PieChart00","694","502","286","289",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_binddataset("ds_pieChart00");
            obj.set_border("1px solid #e8e8e8");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Pie Chart",
            		"textfont": "normal 700 12pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"visible": true,
            		"textcolor": "#222222",
            		"subtextfont": "normal 400 10pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px",
            		"itemtextfont": "9pt \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"horizontalitemgap": "8",
            		"background": "#ffffff",
            		"markertextgap": "3"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"innerradius": "100",
            			"linestyle": "0px none",
            			"itemtextvisible": true,
            			"itemtextfont": "bold 9pt \"맑은 고딕\"",
            			"valuecolumn": "bind:data",
            			"itemtextcolor": "#333333",
            			"itemtexttype": "normal",
            			"itemtextguidesize": "15",
            			"itemtextguidelinestyle": "1px solid #d2d2d2"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart04","357","1314","327","280",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_binddataset("ds_chart2");
            obj.set_border("1px solid #e8e8e8");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 12pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"subtext": "Multi Axis",
            		"subtextcolor": "#555555",
            		"subtextalign": "right",
            		"text": "Basic Chart",
            		"textcolor": "#222222",
            		"subtextfont": "normal 10pt/normal \"맑은 고딕\"",
            		"visible": "false"
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"top": ""
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"labelgap": "3",
            		"axislinestyle": "0px none",
            		"labeltextwidth": "120"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "입고LOT",
            			"barvisible": true,
            			"barsize": "60",
            			"itemtextvisible": "false",
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "bold 9pt \"맑은 고딕\"",
            			"valuecolumn": "bind:입고LOT",
            			"valueaxis": "LOT",
            			"barfillstyle": "#0c84c1",
            			"stacktype": "normal"
            		},
            		{
            			"id": "series3",
            			"valuecolumn": "bind:불량LOT",
            			"valueaxis": "LOT",
            			"titletext": "불량 LOT",
            			"barsize": "60",
            			"stacktype": "normal",
            			"barfillstyle": "#ea5d66",
            			"itemtextcolor": "#ffffff"
            		},
            		{
            			"id": "series2",
            			"titletext": "불량율(%)",
            			"barvisible": false,
            			"itemtextvisible": "false",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 9pt \"맑은 고딕\"",
            			"valuecolumn": "bind:불량율",
            			"valueaxis": "Percentage",
            			"pointvisible": true,
            			"pointsize": "12",
            			"pointshape": "circle",
            			"linestyle": "3px solid #000000",
            			"linevisible": true,
            			"pointfillstyle": "#000000",
            			"pointlinestyle": "3px solid #000000",
            			"barfillstyle": "#000000",
            			"lineopacity": "0"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "LOT",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"labeltype": "text",
            			"titlegap": 10,
            			"gap": "0",
            			"tickmax": "7",
            			"tickmin": "0",
            			"axislinestyle": "1px solid #e8e8e8",
            			"visible": "true",
            			"labeltextwidth": "60"
            		},
            		{
            			"id": "Percentage",
            			"boardlinevisible": "false",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #f1f1f1",
            			"axislinestyle": "1px solid #e8e8e8",
            			"gap": "0",
            			"titlegap": "0",
            			"tickmin": "0",
            			"tickmax": "110",
            			"labelgap": "5",
            			"labelmask": "###%",
            			"visible": "true",
            			"opposite": "true",
            			"labeltype": "normal",
            			"boardlinestyle": "1px solid #f1f1f1"
            		}
            	]
            });
            obj.set_categorycolumn("bind:품목명");
            this.addChild(obj.name, obj);

            obj = new PieChart("PieChart01","694","1314",null,"280","44",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_border("1px solid #e8e8e8");
            obj.set_binddataset("ds_chart3");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Simple Pie",
            		"textfont": "12pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"subtext": "Pie Chart",
            		"subtextalign": "right",
            		"subtextcolor": "gray",
            		"subtextfont": "italic 10pt/normal \"Arial\"",
            		"visible": false
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"itemcolumncount": "1",
            		"left": "",
            		"padding": "10px 10px 0px"
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "#ffffff",
            		"textfont": "9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"radius": "60",
            			"itemtextvisible": true,
            			"itemtextfont": "bold 10pt \"Arial\",\"맑은 고딕\"",
            			"valuecolumn": "bind:value",
            			"fillstyle": "#2ba3a8,#ea5d66",
            			"itemtexttype": "text",
            			"selectindent": 20,
            			"selectcolumn": "bind:select",
            			"selectopacity": "1.0",
            			"itemtextguidelinestyle": "1px solid darkgray",
            			"itemtextguideopacity": "1",
            			"itemtextguidesize": "20",
            			"opacity": "0.8",
            			"linestyle": "1px solid white",
            			"selectlinestyle": "1px solid white",
            			"highlightfillstyle": "yellow",
            			"highlightopacity": "0.5",
            			"highlightvisible": true,
            			"itemtext": "bind:value",
            			"itemtextmask": "##%",
            			"startangle": "270"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart03","15","1314","332","280",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_binddataset("ds_chart1");
            obj.set_border("1px solid #e8e8e8");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 12pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"subtext": "Multi Axis",
            		"subtextcolor": "#555555",
            		"subtextalign": "right",
            		"text": "Basic Chart",
            		"textcolor": "#222222",
            		"subtextfont": "normal 10pt/normal \"맑은 고딕\"",
            		"visible": "false"
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"top": ""
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"labelmask": "####-##-##",
            		"axislinestyle": "0px none",
            		"gap": "5"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "입고LOT",
            			"barvisible": true,
            			"barsize": "60",
            			"itemtextvisible": "false",
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "bold 9pt \"맑은 고딕\"",
            			"valuecolumn": "bind:입고LOT",
            			"valueaxis": "LOT",
            			"barfillstyle": "#0c84c1",
            			"stacktype": "normal"
            		},
            		{
            			"id": "series3",
            			"valuecolumn": "bind:불량LOT",
            			"valueaxis": "LOT",
            			"titletext": "불량 LOT",
            			"barsize": "60",
            			"barfillstyle": "#ea5d66",
            			"itemtextcolor": "#ffffff",
            			"stacktype": "normal"
            		},
            		{
            			"id": "series2",
            			"titletext": "불량율(%)",
            			"barvisible": false,
            			"itemtextvisible": "false",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 9pt \"맑은 고딕\"",
            			"valuecolumn": "bind:불량율",
            			"valueaxis": "Percentage",
            			"pointvisible": true,
            			"pointsize": "12",
            			"pointshape": "circle",
            			"linestyle": "3px dotted #000000",
            			"linevisible": true,
            			"pointfillstyle": "#000000",
            			"pointlinestyle": "3px solid #000000"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "LOT",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"labeltype": "text",
            			"titlegap": "10",
            			"tickmax": "7",
            			"tickmin": "0",
            			"axislinestyle": "1px solid #e8e8e8",
            			"visible": "true"
            		},
            		{
            			"id": "Percentage",
            			"boardlinevisible": "false",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #f1f1f1",
            			"axislinestyle": "1px solid #e8e8e8",
            			"gap": "0",
            			"titlegap": "0",
            			"tickmin": "0",
            			"tickmax": "110",
            			"labelgap": "5",
            			"labelmask": "###%",
            			"visible": "true",
            			"opposite": "true",
            			"labeltype": "normal",
            			"boardlinestyle": "1px solid #f1f1f1"
            		}
            	],
            	"crosshair": {
            		"id": "crosshair",
            		"type": "y",
            		"xlinestyle": "1px solid #dddddd",
            		"ylinestyle": "1px solid #dddddd",
            		"tooltiptype": "y",
            		"xlinetooltipfillstyle": "#000000",
            		"xlinetooltipborderradius": "5px",
            		"xlinetooltiptextcolor": "#ffffff",
            		"ylinetooltipborderradius": "5px",
            		"ylinetooltipfillstyle": "#000000",
            		"ylinetooltiptextcolor": "#ffffff",
            		"ylinetooltipgap": "0"
            	}
            });
            obj.set_categorycolumn("bind:년월일");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","943","420","51","23",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("sta_01");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","15","801","965","503",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_binddataset("ds_barchart01");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e8e8e8");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Bar Chart",
            		"textfont": "normal 700 12pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"visible": true,
            		"textcolor": "#222222",
            		"subtextfont": "normal 400 10pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"horizontalitemgap": "5",
            		"background": "#ffffff",
            		"markertextgap": "3",
            		"align": "rightcenter"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 12pt/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 8pt/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"visible": true,
            		"axislinestyle": "0px none",
            		"labelgap": "5",
            		"labelrotate": "40"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 9pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"axislinestyle": "1px solid #e8e8e8",
            			"titlegap": "10",
            			"tickmax": "150"
            		}
            	],
            	"hrangebar": {
            		"id": "hrangebar",
            		"background": "#f0f0f0",
            		"linestyle": "0px none",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#cdcdcd",
            		"size": "12",
            		"visible": false,
            		"trackbarpadding": "0px"
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "0px",
            		"background": "#f0f0f0",
            		"linestyle": "0px none",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#cdcdcd",
            		"size": "12",
            		"visible": false
            	},
            	"crosshair": {
            		"id": "crosshair",
            		"type": "xy",
            		"xlinestyle": "1px solid #dddddd",
            		"ylinestyle": "1px solid #dddddd",
            		"tooltiptype": "xy",
            		"xlinetooltipfillstyle": "#000000",
            		"ylinetooltipfillstyle": "#000000",
            		"ylinetooltippadding": "5px 10px 5px 5px",
            		"xlinetooltippadding": "5px 3px 5px 5px",
            		"xlinetooltiptextcolor": "#ffffff",
            		"xlinetooltipborderradius": "5px",
            		"ylinetooltiptextcolor": "#ffffff",
            		"ylinetooltipborderradius": "5px",
            		"visible": true,
            		"ylinetooltipgap": "5"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "mean",
            			"barvisible": true,
            			"barsize": "40",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "normal 700 9pt/normal \"맑은 고딕\"",
            			"valuecolumn": "bind:mean",
            			"itemtextposition": "inside middle",
            			"barlinestyle": "0px none",
            			"barfillstyle": "#ebebeb",
            			"itemtextvisible": "true",
            			"valueaxis": "valueaxis",
            			"itemtexttype": "normal",
            			"stacktype": "normal"
            		},
            		{
            			"id": "series1",
            			"titletext": "rainfall",
            			"barvisible": "false",
            			"barsize": "40",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "normal 700 9pt/normal \"맑은 고딕\"",
            			"valuecolumn": "bind:rainfall",
            			"itemtextposition": "inside start",
            			"itemtextvisible": "false",
            			"itemtexttype": "number",
            			"barlinestyle": "1px solid #62be1b",
            			"barfillstyle": "#1abd9c",
            			"linevisible": "true",
            			"linestyle": "3px solid #62be1b",
            			"linefillstyle": "#1abd9c",
            			"lineareavisible": "false",
            			"pointvisible": "true",
            			"pointfillstyle": "#ffffff",
            			"pointlinestyle": "3px solid #62be1b",
            			"linetype": "segment",
            			"stacktype": "none"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart05","15","1618","522","307",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_border("1px solid #e8e8e8");
            obj.set_background("#ffffff");
            obj.set_binddataset("ds_chart4");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 12pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555",
            		"subtextalign": "right",
            		"textcolor": "#222222",
            		"subtextfont": "normal 10pt/normal \"맑은 고딕\"",
            		"visible": true
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"top": "",
            		"visible": false,
            		"markertype": "square"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"axislinestyle": "0px none",
            		"gap": "5"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barfillstyle": "#f8b334",
            			"barsize": "60",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:value",
            			"barlinestyle": "0px none",
            			"valueaxis": "valueaxis0",
            			"lineareafillstyle": "#ffffff",
            			"lineitemtextposition": "centertop",
            			"stacktype": "none"
            		},
            		{
            			"id": "series1",
            			"titletext": "series",
            			"barvisible": false,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:percentage",
            			"linevisible": true,
            			"valueaxis": "percentage",
            			"lineitemtextgap": "5",
            			"lineitemtextposition": "centertop",
            			"linestyle": "2px solid #000000",
            			"barlinestyle": "1px solid #000000",
            			"pointlinestyle": "2px solid #000000",
            			"pointfillstyle": "#ffffff",
            			"pointitemtextposition": "centertop",
            			"itemtext": "bind:percentage",
            			"pointsize": "10"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"labeltype": "text",
            			"titlegap": "10",
            			"tickmax": "80",
            			"tickmin": "0",
            			"axislinestyle": "1px solid #e8e8e8",
            			"visible": "true"
            		},
            		{
            			"id": "percentage",
            			"boardlinevisible": "false",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #f1f1f1",
            			"axislinestyle": "1px solid #e8e8e8",
            			"gap": "0",
            			"titlegap": "0",
            			"tickmin": "0",
            			"tickmax": "3",
            			"labelgap": "5",
            			"visible": "true",
            			"opposite": "true",
            			"labeltype": "normal",
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labelmask": "#%"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart05_00","552","1618","428","307",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_border("1px solid #e8e8e8");
            obj.set_binddataset("ds_chart4");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 12pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555",
            		"subtextalign": "right",
            		"textcolor": "#222222",
            		"subtextfont": "normal 10pt/normal \"맑은 고딕\"",
            		"visible": true
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"top": "",
            		"visible": false,
            		"markertype": "square"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"axislinestyle": "0px none",
            		"gap": "5"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barfillstyle": "#62be1b,#3c4596,#be0071,#4bc4c2,#f8b334,#9c6add,#2ba3a8,#0c84c1,#ea5d66",
            			"barsize": "60",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:value",
            			"barlinestyle": "0px none",
            			"valueaxis": "valueaxis0",
            			"lineareafillstyle": "#ffffff",
            			"lineitemtextposition": "centertop",
            			"stacktype": "none"
            		},
            		{
            			"id": "series1",
            			"titletext": "series",
            			"barvisible": false,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:percentage",
            			"linevisible": true,
            			"valueaxis": "percentage",
            			"lineitemtextgap": "5",
            			"lineitemtextposition": "centertop",
            			"linestyle": "2px solid #000000",
            			"barlinestyle": "1px solid #000000",
            			"pointlinestyle": "2px solid #000000",
            			"pointfillstyle": "#ffffff",
            			"pointitemtextposition": "centertop",
            			"itemtext": "bind:percentage",
            			"pointsize": "10"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"labeltype": "text",
            			"titlegap": "10",
            			"tickmax": "80",
            			"tickmin": "0",
            			"axislinestyle": "1px solid #e8e8e8",
            			"visible": "true"
            		},
            		{
            			"id": "percentage",
            			"boardlinevisible": "false",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #f1f1f1",
            			"axislinestyle": "1px solid #e8e8e8",
            			"gap": "0",
            			"titlegap": "0",
            			"tickmin": "0",
            			"tickmax": "3",
            			"labelgap": "5",
            			"visible": "true",
            			"opposite": "true",
            			"labeltype": "normal",
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labelmask": "#%"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart05_01","15","1935","198","239",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_border("1px solid #e8e8e8");
            obj.set_background("#ffffff");
            obj.set_binddataset("ds_chart5");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 12pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555",
            		"subtextalign": "right",
            		"textcolor": "#222222",
            		"subtextfont": "normal 10pt/normal \"맑은 고딕\"",
            		"visible": true
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"top": "",
            		"visible": false,
            		"markertype": "square"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"axislinestyle": "0px none",
            		"gap": "5"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barfillstyle": "#62be1b,#0c84c1",
            			"barsize": "70",
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:percentage",
            			"barlinestyle": "0px none",
            			"valueaxis": "percentage",
            			"lineareafillstyle": "#ffffff",
            			"lineitemtextposition": "centertop",
            			"stacktype": "none",
            			"itemtextvisible": "true"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "percentage",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #f1f1f1",
            			"axislinestyle": "1px solid #e8e8e8",
            			"gap": "0",
            			"titlegap": "0",
            			"tickmin": "0",
            			"tickmax": "2",
            			"labelgap": "5",
            			"visible": "true",
            			"boardlinestyle": "1px solid #f1f1f1",
            			"boardlinevisible": "true"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart05_00_00","259","1935","278","239",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_border("1px solid #e8e8e8");
            obj.set_binddataset("ds_chart6");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 12pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555",
            		"subtextalign": "right",
            		"textcolor": "#222222",
            		"subtextfont": "normal 10pt/normal \"맑은 고딕\"",
            		"visible": true
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"top": "",
            		"visible": false,
            		"markertype": "square"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"axislinestyle": "0px none",
            		"gap": "5"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barfillstyle": "#ea5d66,#0c84c1,#2ba3a8",
            			"barsize": "60",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:value",
            			"barlinestyle": "0px none",
            			"valueaxis": "valueaxis0",
            			"lineareafillstyle": "#ffffff",
            			"lineitemtextposition": "centertop",
            			"stacktype": "none"
            		},
            		{
            			"id": "series1",
            			"titletext": "series",
            			"barvisible": false,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#000000",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:percentage",
            			"linevisible": true,
            			"valueaxis": "percentage",
            			"lineitemtextgap": "5",
            			"lineitemtextposition": "centertop",
            			"linestyle": "2px solid #000000",
            			"barlinestyle": "1px solid #000000",
            			"pointlinestyle": "2px solid #000000",
            			"pointfillstyle": "#ffffff",
            			"pointitemtextposition": "centertop",
            			"itemtext": "bind:percentage",
            			"pointsize": "10"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"labeltype": "text",
            			"titlegap": "10",
            			"tickmax": "9",
            			"tickmin": "0",
            			"axislinestyle": "1px solid #e8e8e8",
            			"visible": "true"
            		},
            		{
            			"id": "percentage",
            			"boardlinevisible": "false",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #f1f1f1",
            			"axislinestyle": "1px solid #e8e8e8",
            			"gap": "0",
            			"titlegap": "0",
            			"tickmin": "0",
            			"tickmax": "2",
            			"labelgap": "5",
            			"visible": "true",
            			"opposite": "true",
            			"labeltype": "normal",
            			"boardlinestyle": "1px solid #f1f1f1"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,2332,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Guide_07.xfdl", function() {
        this.BasicChart00_ondrawend = function(obj,e)
        {
        		// getAxisPointPos
          // tick label을 찾아 위치정보를 얻는다.
          // param 1 : category / value
          // param 2 : tick 이 있어야 하며 tick label text
          var pos = obj.getAxisPointPos("valueaxis", "60");

          if(!pos) return;

          var text = "Average";
          var fontstyle = '10pt 맑은 고딕';

          // addUserControl
          // series group에 control을 생성한다.
          // param 1 : control name
          // param 2 : text / rect / path / arc
          var item = obj.addUserControl("itemtext1", "text");
          item.set_font(fontstyle);
          item.set_color("#f26522");

          // get font size
          var fontobj = nexacro.FontObject(fontstyle);
          var sz = nexacro.getTextSize(text, fontobj);

          fontobj = null;
          item.set_x(pos.x);
          item.set_y(pos.y - 10);
          item.set_text(text);

          var item2 = obj.addUserControl("itemrect1", "rect");
          item2.set_x(pos.x-1);
          item2.set_y(pos.y-1);
          item2.set_width(obj.getBorderPosInfo().w);
          item2.set_height(1);
          item2.set_fillstyle("#f26522");


          obj.userControlDraw();

          // delete
          /*
          obj.removeUserControl("itemtext1");
          obj.userControlDraw();
          */
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.BasicChart01.addEventHandler("ondrawend",this.BasicChart00_ondrawend,this);
            this.BasicChart00.addEventHandler("ondrawend",this.BasicChart00_ondrawend,this);
        };
        this.loadIncludeScript("Guide_07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
