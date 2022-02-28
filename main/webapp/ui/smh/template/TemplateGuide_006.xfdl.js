(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TemplateGuide_005");
            this.set_titletext("그래프");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"txt\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"txt\">우익사업</Col><Col id=\"Column0\">텍스트텍스트</Col><Col id=\"Column1\">텍스트텍스트</Col><Col id=\"Column2\">텍스트텍스트</Col><Col id=\"Column3\">텍스트텍스트</Col><Col id=\"Column4\"/></Row><Row><Col id=\"lev\">1</Col><Col id=\"txt\">수익</Col><Col id=\"Column0\">텍스트텍스트</Col><Col id=\"Column1\">텍스트텍스트</Col><Col id=\"Column2\">텍스트텍스트</Col><Col id=\"Column3\">텍스트텍스트</Col><Col id=\"Column4\"/></Row><Row><Col id=\"Column0\">텍스트</Col><Col id=\"lev\">1</Col><Col id=\"Column1\">텍스트텍스트</Col><Col id=\"Column2\">텍스트텍스트</Col><Col id=\"Column3\">텍스트텍스트</Col><Col id=\"txt\">비용</Col><Col id=\"Column4\"/></Row><Row><Col id=\"Column0\">텍스트</Col><Col id=\"lev\">0</Col><Col id=\"Column2\"/><Col id=\"txt\">금융사업</Col><Col id=\"Column4\"/></Row><Row><Col id=\"lev\">1</Col><Col id=\"Column0\">텍스트</Col><Col id=\"Column2\"/><Col id=\"txt\">수익</Col><Col id=\"Column4\"/></Row><Row><Col id=\"lev\"/><Col id=\"Column0\">텍스트</Col></Row><Row><Col id=\"lev\"/><Col id=\"Column0\">텍스트</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","910","0","10","600",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","-4","346","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","12","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","65","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","75","911","542",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab00);
            obj.set_text("탭명 00001");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static01","812","-2","98","20",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("(단위 : 백만원 %)");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static35","0","47","450","183",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_InputBg");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","0","17","450","31",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("텍스트");
            obj.set_cssclass("sta_WF_Label6");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02","460","47","449","183",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_InputBg");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03","460","17","449","31",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("텍스트");
            obj.set_cssclass("sta_WF_Label6");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static04","1","230","909","11",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid09","0","240","909","265",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("6");
            obj.set_treeusecheckbox("false");
            obj.set_binddataset("Dataset01");
            obj.set_fillareatype("linerow");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"220\"/><Column size=\"225\"/><Column size=\"225\"/><Column size=\"220\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"29\"/><Row size=\"29\" band=\"summ\"/><Row size=\"29\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"헤더명\"/><Cell col=\"1\" colspan=\"2\" text=\"헤더명\"/><Cell col=\"3\" rowspan=\"2\" text=\"헤더명\"/><Cell row=\"1\" col=\"1\" text=\"소헤더명\" font=\"9pt &quot;Dotum&quot;\"/><Cell row=\"1\" col=\"2\" text=\"소헤더명\" font=\"9pt &quot;Dotum&quot;\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:txt\" suppressalign=\"first\" treelevel=\"bind:lev\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band><Band id=\"summary\"><Cell text=\"소계\" textAlign=\"right\" verticalAlign=\"middle\" padding=\"0px 10px 0px 0px\" color=\"rgba(68,68,68,1)\" font=\"bold 9pt &quot;Dotum&quot;\"/><Cell col=\"1\" colspan=\"3\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/></Cell><Cell row=\"1\" text=\"합계\" textAlign=\"right\" verticalAlign=\"middle\" padding=\"0px 10px 0px 0px\" background=\"#bcdaf6\" color=\"rgba(68,68,68,1)\" font=\"bold 9pt &quot;Dotum&quot;\"/><Cell row=\"1\" col=\"1\" colspan=\"3\" background=\"#bcdaf6\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/></Cell></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab00);
            obj.set_text("탭명 00002");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.Tab00);
            obj.set_text("탭명 00003");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","28","37","310","35",null,null,null,null,null,null,this.Tab00.tabpage3.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label6");
            obj.set_text("텍스트");
            this.Tab00.tabpage3.addChild(obj.name, obj);

            obj = new Static("Static01","450","128","10","213",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","22",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","10","10","100","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("9pt \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","115","10","150","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var Div00_form_Combo00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_innerdataset", obj);
            Div00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","275","10","139","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("9pt \"Dotum\"");
            var Div00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_form_Radio00_innerdataset", obj);
            Div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">텍스트</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">텍스트</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Radio00_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button52",null,"10","58","21","65",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button79",null,"10","52","21","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("TemplateGuide_006.xfdl", function() {

        this.Tab00_tabpage1_Static02_onclick = function (obj, e)
        {
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Tab00.tabpage1.form.Static02.addEventHandler("onclick",this.Tab00_tabpage1_Static02_onclick,this);
        };
        this.loadIncludeScript("TemplateGuide_006.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
