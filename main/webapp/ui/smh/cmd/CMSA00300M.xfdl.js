(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSA00300M");
            this.set_titletext("공통코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,637);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lookupTypes", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODECLASSTYPE\" size=\"256\" type=\"STRING\"/><Column id=\"LOOKUP_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"DESCRIPTION\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE_CATEGORY\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE1\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE2\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE3\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE4\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE5\" size=\"256\" type=\"STRING\"/><Column id=\"CREATED_BY\" size=\"256\" type=\"STRING\"/><Column id=\"CREATION_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_BY\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_UPDATE_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"MEANING\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTCODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"NM_K\" type=\"STRING\" size=\"256\"/><Column id=\"NM_E\" type=\"STRING\" size=\"256\"/><Column id=\"NM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NM_V\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lookupValues", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LOOKUP_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"LOOKUP_CODE\" size=\"256\" type=\"STRING\"/><Column id=\"MEANING\" size=\"256\" type=\"STRING\"/><Column id=\"DESCRIPTION\" size=\"256\" type=\"STRING\"/><Column id=\"ENABLED_FLAG\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE1\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE2\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE3\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE4\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE5\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE6\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE7\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE8\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE9\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE10\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CREATED_BY\" size=\"256\" type=\"STRING\"/><Column id=\"CREATION_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_BY\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_UPDATE_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"PARENTCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/><Column id=\"NM_K\" type=\"STRING\" size=\"256\"/><Column id=\"NM_E\" type=\"STRING\" size=\"256\"/><Column id=\"NM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NM_V\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JOB_GUBUN_CD\" size=\"256\" type=\"STRING\"/><Column id=\"LOOKUP_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"MEANING\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delete", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RESP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOOKUP_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_respType", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">COM</Col><Col id=\"desc\">COM.공통</Col></Row><Row><Col id=\"desc\">EAP.세출</Col><Col id=\"code\">EAP</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_yn", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"desc\">Y</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"desc\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_month00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"GRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NM\">호출테스트</Col><Col id=\"FUNC\">fn_test</Col><Col id=\"GRD_NM\">grd_lookupValues</Col><Col id=\"DICTIONARYID\">C85615DF258C45A3BAB2BE6497185D7D</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_parent", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LOOKUP_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"LOOKUP_CODE\" size=\"256\" type=\"STRING\"/><Column id=\"MEANING\" size=\"256\" type=\"STRING\"/><Column id=\"DESCRIPTION\" size=\"256\" type=\"STRING\"/><Column id=\"ENABLED_FLAG\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE1\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE2\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE3\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE4\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE5\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE6\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE7\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE8\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE9\" size=\"256\" type=\"STRING\"/><Column id=\"ATTRIBUTE10\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CREATED_BY\" size=\"256\" type=\"STRING\"/><Column id=\"CREATION_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_BY\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_UPDATE_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"PARENTCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/><Column id=\"NM_K\" type=\"STRING\" size=\"256\"/><Column id=\"NM_E\" type=\"STRING\" size=\"256\"/><Column id=\"NM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NM_V\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0%","36",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_lookupType","88","10","170","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","22","10","62","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("코드그룹");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_tooltiptext("4D11357CF39E475E94177AF8B379F814");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_description","349","10","173","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","278","10","63","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("코드그룹명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_tooltiptext("CODECLASSNAME");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","-1",null,"43","97.8%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","0%",null,null,"10","76.87%","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","7.03%","1",null,null,"88.68%","-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","27.03%","0",null,"43","67.69%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09","36.04%","-1",null,null,"59.67%","1",null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_lookupTypes","0","126",null,"221","53.7%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_lookupTypes");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"170\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드그룹\" tooltiptext=\"4D11357CF39E475E94177AF8B379F814\"/><Cell col=\"1\" text=\"코드그룹명\" tooltiptext=\"CODECLASSNAME\"/><Cell col=\"2\" text=\"코드그룹명(K)\" tooltiptext=\"580FD2421C4B4691BBB4566F0C626A2A\"/><Cell col=\"3\" text=\"코드그룹명(E)\" tooltiptext=\"CC5280D42A094CB68475ED36A8152B5D\"/><Cell col=\"4\" text=\"코드그룹명(C)\" tooltiptext=\"36260B9F346E4A2DBD9C907CF7C50DD7\"/><Cell col=\"5\" text=\"코드그룹명(V)\" tooltiptext=\"712A61E1C34A487DA229DFC7C7AADA6A\"/></Band><Band id=\"body\"><Cell text=\"bind:LOOKUP_TYPE\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:MEANING\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:NM_K\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:NM_E\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:NM_C\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:NM_V\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div","47.07%","126",null,"221","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","2.11%","37",null,"20","82.11%",null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_text("코드그룹명");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("CODECLASSNAME");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static07","2.11%","11",null,"20","82.11%",null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_text("코드그룹");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("4D11357CF39E475E94177AF8B379F814");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_meaning","19.24%","37",null,"20","1.27%",null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_inputmode("upper");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_lookupType","19.16%","11",null,"20","52.00%",null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.set_cssclass("essential");
            obj.set_readonly("false");
            obj.set_inputmode("normal");
            obj.set_text("12345678");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static02","2.11%","140",null,"20","82.11%",null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_text("다국어(K)");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("580FD2421C4B4691BBB4566F0C626A2A");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_nmK","19.16%","141",null,"20","52.00%",null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_nmE","66.53%","141",null,"20","0.84%",null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static04","50.74%","140",null,"20","34.53%",null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_text("다국어(E)");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("CC5280D42A094CB68475ED36A8152B5D");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static21","0%","0",null,"10","-3.17%",null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static23","0%","31",null,"5","-3.17%",null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static24","0%","57",null,"5","-3.17%",null,null,null,null,null,this.div.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static26","0%","83",null,"5","-3.17%",null,null,null,null,null,this.div.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static27","0%","136",null,"5","0%",null,null,null,null,null,this.div.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static29","0%","109",null,"5","0%",null,null,null,null,null,this.div.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static30","0%","188",null,"5","0%",null,null,null,null,null,this.div.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static31","0%","162",null,"5","0%",null,null,null,null,null,this.div.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static32","0%","214",null,"5","0%",null,null,null,null,null,this.div.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03","2.11%","63",null,"20","82.11%",null,null,null,null,null,this.div.form);
            obj.set_taborder("18");
            obj.set_text("적요");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("REMARK");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new TextArea("txa_description","19.16%","63",null,"46","1.47%",null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_useYn","66.95%","11",null,"20","1.47%",null,null,null,null,null,this.div.form);
            obj.set_taborder("19");
            obj.set_codecolumn("C,UseYn,SEL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static06_00","50.74%","11",null,"20","34.53%",null,null,null,null,null,this.div.form);
            obj.set_taborder("20");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("USAGESTATUS");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static08_00","2.11%","113",null,"20","82.11%",null,null,null,null,null,this.div.form);
            obj.set_taborder("21");
            obj.set_text("다국어ID");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("DICTIONARYID");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_dictionaryid","19.16%","114",null,"20","47.16%",null,null,null,null,null,this.div.form);
            obj.set_taborder("22");
            obj.set_inputmode("normal");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_dictionaryname","59.58%","114",null,"20","6",null,null,null,null,null,this.div.form);
            obj.set_taborder("23");
            obj.set_inputmode("upper");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static02_00","2.11%","193",null,"20","82.11%",null,null,null,null,null,this.div.form);
            obj.set_taborder("24");
            obj.set_text("코드그룹타입");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("CODECLASSTYPE");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static04_00","51.79%","192",null,"20","34.74%",null,null,null,null,null,this.div.form);
            obj.set_taborder("25");
            obj.set_text("상위");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("PARENTPROCESSSEGMENTCLASSID");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_parent","66.53%","193",null,"20","6.32%",null,null,null,null,null,this.div.form);
            obj.set_taborder("26");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_dic","53.89%","114","22","20",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("27");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_cssclass("btn_WF_finder");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static02_01","2.11%","166",null,"20","82.11%",null,null,null,null,null,this.div.form);
            obj.set_taborder("28");
            obj.set_text("다국어(C)");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("36260B9F346E4A2DBD9C907CF7C50DD7");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_emC","19.16%","167",null,"20","52.00%",null,null,null,null,null,this.div.form);
            obj.set_taborder("29");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static04_01","50.74%","166",null,"20","34.53%",null,null,null,null,null,this.div.form);
            obj.set_taborder("30");
            obj.set_text("다국어(V)");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("712A61E1C34A487DA229DFC7C7AADA6A");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_attribute2_01","66.53%","167",null,"20","1.05%",null,null,null,null,null,this.div.form);
            obj.set_taborder("31");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_codeclasstype","19.16%","193",null,"20","52.00%",null,null,null,null,null,this.div.form);
            obj.set_taborder("32");
            obj.set_codecolumn("C,CodeClassType,SEL,Y,Y");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_parent","94.53%","193","22","20",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("33");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_cssclass("btn_WF_finder");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00","0.33%","368","122","21",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("코드");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("IDDEFINITIONINFOLIST");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"371","60","20","75",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("행추가");
            obj.set_cssclass("btn_DR_GridPlus");
            obj.set_tooltiptext("GridAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"371","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_DR_GridMinus");
            obj.set_tooltiptext("GridDelete");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_lookupValues","0%","395",null,null,"10","1",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_lookupValues");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"175\"/><Column size=\"145\"/><Column size=\"157\"/><Column size=\"141\"/><Column size=\"157\"/><Column size=\"157\"/><Column size=\"157\"/><Column size=\"157\"/><Column size=\"181\"/><Column size=\"67\"/><Column size=\"61\"/><Column size=\"97\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"97\"/><Column size=\"97\"/><Column size=\"97\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드그룹\" tooltiptext=\"CODECLASSID\" expandimage=\"url(&apos;theme://images/grd_head_icon11_N.png&apos;)\" expandshow=\"hide\" expandsize=\"24\"/><Cell col=\"1\" text=\"코드\" tooltiptext=\"CODEID\"/><Cell col=\"2\" text=\"코드명\" tooltiptext=\"CODENAME\"/><Cell col=\"3\" text=\"설명\" tooltiptext=\"REMARK\"/><Cell col=\"4\" text=\"코드명(K)\" tooltiptext=\"580FD2421C4B4691BBB4566F0C626A2A\"/><Cell col=\"5\" text=\"코드명(E)\" tooltiptext=\"CC5280D42A094CB68475ED36A8152B5D\"/><Cell col=\"6\" text=\"코드명(C)\" tooltiptext=\"36260B9F346E4A2DBD9C907CF7C50DD7\"/><Cell col=\"7\" text=\"코드명(V)\" tooltiptext=\"712A61E1C34A487DA229DFC7C7AADA6A\"/><Cell col=\"8\" text=\"다국어 ID\" tooltiptext=\"DICTIONARYID\" expandimage=\"url(&apos;theme://images/grd_head_icon11_N.png&apos;)\" expandshow=\"hide\" expandsize=\"24\"/><Cell col=\"9\" text=\"사용여부\" tooltiptext=\"USAGESTATUS\"/><Cell col=\"10\" text=\"정렬순서\" tooltiptext=\"DISPLAYSEQUENCE\"/><Cell col=\"11\" text=\"상위 코드\" tooltiptext=\"PARENTCODEID\"/><Cell col=\"12\" text=\"부가정보1\"/><Cell col=\"13\" text=\"부가정보2\"/><Cell col=\"14\" text=\"부가정보3\"/><Cell col=\"15\" text=\"부가정보4\"/><Cell col=\"16\" text=\"부가정보5\"/><Cell col=\"17\" text=\"부가정보1\"/><Cell col=\"18\" text=\"부가정보2\"/><Cell col=\"19\" text=\"부가정보3\" tooltiptext=\"PARENTCODEID\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" editfilter=\"upper,digit,char\" text=\"bind:LOOKUP_TYPE\" combodataset=\"ds_respType\" combocodecol=\"code\" combodatacol=\"desc\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"1\" edittype=\"expr:dataset.getRowType(currow) ==1 ? &apos;none&apos;:&apos;normal&apos;\" text=\"bind:LOOKUP_CODE\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:MEANING\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:DESCRIPTION\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:NM_K\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:NM_E\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:NM_C\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:NM_V\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"8\" edittype=\"normal\" text=\"bind:DICTIONARYID\" textAlign=\"left\" expandshow=\"show\" expandsize=\"10\" editautoselect=\"true\"/><Cell col=\"9\" displaytype=\"combotext\" text=\"bind:ENABLED_FLAG\" combocodecol=\"C,UseYn,SEL,Y,Y\" textAlign=\"center\" editautoselect=\"true\"/><Cell col=\"10\" edittype=\"normal\" text=\"bind:DISPLAYSEQUENCE\" textAlign=\"center\" displaytype=\"number\" editautoselect=\"true\"/><Cell col=\"11\" edittype=\"combo\" text=\"bind:PARENTCODEID\" textAlign=\"left\" displaytype=\"combotext\" editautoselect=\"true\" combodataset=\"ds_parent\" combocodecol=\"LOOKUP_CODE\" combodatacol=\"MEANING\"/><Cell col=\"12\" edittype=\"normal\" text=\"bind:ATTRIBUTE1\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"13\" edittype=\"normal\" text=\"bind:ATTRIBUTE2\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"14\" edittype=\"normal\" text=\"bind:ATTRIBUTE3\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"15\" edittype=\"normal\" text=\"bind:ATTRIBUTE4\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"16\" edittype=\"normal\" text=\"bind:ATTRIBUTE5\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"17\" edittype=\"normal\" text=\"bind:ATTRIBUTE1\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"18\" edittype=\"normal\" text=\"bind:ATTRIBUTE2\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"19\" edittype=\"normal\" text=\"bind:ATTRIBUTE3\" textAlign=\"left\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add01",null,"102","60","20","75",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("행추가");
            obj.set_cssclass("btn_DR_GridPlus");
            obj.set_tooltiptext("GridAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del01",null,"102","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_DR_GridMinus");
            obj.set_tooltiptext("GridDelete");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","6","97","132","21",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("코드그룹");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("GRIDCODECLASSLIST");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlDown",null,"371","90","20","140",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("파일다운로드");
            obj.set_cssclass("btn_DR_GridDownload");
            obj.set_tooltiptext("FILEDOWNLOAD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Toolbar_Save");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0%","21",null,"15","1.09%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","0%","79",null,"15","87.17%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0%","115",null,"10","87.17%",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","20","200",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Toolbar_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"0","120","20","75",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("비밀번호 초기화");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_tooltiptext("INITPASSWORD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,637,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div.form.edt_meaning","value","ds_lookupTypes","MEANING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div.form.edt_lookupType","value","ds_lookupTypes","LOOKUP_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div.form.edt_nmK","value","ds_lookupTypes","NM_K");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div.form.edt_nmE","value","ds_lookupTypes","NM_E");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_lookupType","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_search.form.edt_description","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div.form.txa_description","value","ds_lookupTypes","DESCRIPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div.form.cbo_useYn","value","ds_lookupTypes","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div.form.edt_parent","value","ds_lookupTypes","PARENTCODECLASSID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div.form.edt_dictionaryid","value","ds_lookupTypes","DICTIONARYID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div.form.edt_dictionaryname","value","ds_lookupTypes","DICTIONARYNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div.form.edt_emC","value","ds_lookupTypes","NM_C");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div.form.edt_attribute2_01","value","ds_lookupTypes","NM_V");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div.form.cbo_codeclasstype","value","ds_lookupTypes","CODECLASSTYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMSA00300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: 우정사업정보센터 통합경영관리시스템
         * 업무명 		: 업무화면 공통코드 관리
         * 파일명 		: cmsa00300.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2015.03.18
         *
         * 설  명		: 공통코드 조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2015.03.16	진성하   	최초작성
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
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        //alert(this.parent.parent.fvMenuNM);
        //alert(this.parent.parent.fvMenuID);
        	this.nfn_formInit(obj);
        	this.nfn_getCurrentSystemTime(0);
        	// 엔터키 설정 함수(조회)
        	this.gfn_setEnterSearch(this.div_search, "nfn_search");

        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e){
        	// this.div.edt_lookupType.set_value(false);
        	this.ds_lookupTypes.clearData();
        	this.ds_lookupValues.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "LOOKUP_TYPE", this.div_search.form.edt_lookupType.value);
        	this.ds_search.setColumn(0, "MEANING", this.div_search.form.edt_description.value);

        	var sSvcID = "selectEcmLookupTypesList";
        	var sController = "/cmsa00300/selectEcmLookupTypesList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_lookupTypes=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectEcmLookupTypesList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	this.btn_add01.set_enable(true);
        };

        /*
         * 기능 : 검색 상세
         */
        this.fn_search2 = function (){
        	if (this.ds_lookupTypes.rowposition < 0)
        	{
        		return;
        	}

        	this.ds_lookupValues.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "LOOKUP_TYPE", this.ds_lookupTypes.getColumn(this.ds_lookupTypes.rowposition, "LOOKUP_TYPE"));
        	var sSvcID = "selectEcmLookupValuesList";
        	var sController = "/cmsa00300/selectEcmLookupValuesList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_lookupValues=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectEcmLookupValuesList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	if(this.gfn_isNull(this.ds_lookupTypes.getColumn(this.ds_lookupTypes.rowposition, "PARENTCODECLASSID"))) return;

        	this.ds_parent.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "LOOKUP_TYPE", this.ds_lookupTypes.getColumn(this.ds_lookupTypes.rowposition, "PARENTCODECLASSID"));
        	var sSvcID = "selectEcmLookupValuesList2";
        	var sController = "/cmsa00300/selectEcmLookupValuesList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_parent=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectEcmLookupValuesList2");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	var bOK = this.gfn_Message("InfoPopupSave", null, "conf", "yesno");//nexacro.getApplication().confirm("저장하시겠습니까?");
        	if (bOK == false)
        	{
        		return;
        	}

        	if (!this.gfn_dsIsUpdated(this.ds_lookupTypes)
        		 && !this.gfn_dsIsUpdated(this.ds_lookupValues))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//IMCMM0033	저장할 데이터가 존재하지 않습니다.
        		return;
        	}

        	if (this.ds_lookupTypes.rowcount > 0)
        	{
        		var component = this.div;
        		var strColIdList = "cbo_codeclasstype,edt_lookupType";
        		var strColNmList = "4D11357CF39E475E94177AF8B379F814,CODECLASSNAME";	//코드그룹타입,코드그룹";
        		var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        		if (rtn == false) return;
        	}
        	if (!this.gfn_GridKeyCheck(this.grd_lookupValues, ["LOOKUP_TYPE", "LOOKUP_CODE", "MEANING", "ENABLED_FLAG"])) return;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveEcmLookupTypes";
        	var sController = "/cmsa00300/saveEcmLookupTypes.do";
        	var sInDatasets = "INPUT_H=ds_lookupTypes:U INPUT_L=ds_lookupValues:U";
        	var sOutDatasets = "ds_result=output";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "saveEcmLookupTypes");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        /*
         this.fn_delete = function(obj:Button,  e:nexacro.ClickEventInfo)
         {
         var bOK = application.confirm( "정말로 삭제하시겠습니까?" );
         if(bOK==false) return;

         if(this.ds_lookupTypes.rowposition<0){
         alert("삭제 대상을 선택하세요");
         return;
         }

         this.ds_delete.clearData();
         this.ds_delete.addRow();
         this.ds_delete.setColumn(0,"LOOKUP_TYPE",this.ds_lookupTypes.getColumn(this.ds_lookupTypes.rowposition,"LOOKUP_TYPE"));

         var sSvcID        = "deleteEcmLookupTypes";
         var sController   = "/cmsa00300/deleteEcmLookupTypes.do";
         var sInDatasets   = "INPUT=ds_delete:U";
         var sOutDatasets  = "";

         var sArgs = "";
         sArgs += this.gfn_setParam("method","deleteEcmLookupTypes");

         this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

         }
         */
        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId.substring(0, 6) == "select")
        		{
        			this.gfn_Message("ErrorOnSearch", trId + errMsg, "error", "ok");
        		}
        		else
        		{
        			this.gfn_Message("ErrorOnSave", trId + errMsg, "error", "ok");
        		}
        	}
        	else
        	{
        		if (trId == "selectCurrentSystemTime")
        		{
        			this.fv_currDate = this.ds_currentDate.getColumn(0, "TODATE");
        		}
        		else if (trId == "saveEcmLookupTypes")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.btn_add01.set_enable(true);
        			this.div.form.edt_lookupType.set_readonly(true);
        			this.fn_search2();
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/



        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.btn_add_onclick = function (obj, e)
        {
        	if (this.ds_lookupTypes.rowposition < 0 || this.nfn_isNull(this.ds_lookupTypes.getColumn(this.ds_lookupTypes.rowposition, "LOOKUP_TYPE")))
        	{
        		this.gfn_Message("InputSomeThing", "CODECLASSID", "warning", "ok");
        		return;
        	}

        	var nRow = this.ds_lookupValues.addRow();
        	this.ds_lookupValues.setColumn(nRow, "LOOKUP_TYPE", this.ds_lookupTypes.getColumn(this.ds_lookupTypes.rowposition, "LOOKUP_TYPE"));
        	this.ds_lookupValues.setColumn(nRow, "ENABLED_FLAG", "Y");
        	// this.ds_lookupValues.setColumn(nRow,"START_DATE_ACTIVE",this.fv_currDate);
        	// this.ds_lookupValues.setColumn(nRow,"END_DATE_ACTIVE","99991231");
        };

        this.btn_del_onclick = function (obj, e)
        {
        	this.ds_lookupValues.deleteRow(this.ds_lookupValues.rowposition);
        };

        this.grd_lookupTypes_onselectchanged = function (obj, e)
        {
        	// ("e.row->"+e.row);
        	this.ds_lookupValues.clearData();
        	if (this.ds_lookupTypes.getRowType(e.row) == 2)
        	{
        		this.div.form.edt_lookupType.set_readonly(false);
        	}
        	else
        	{
        		this.div.form.edt_lookupType.set_readonly(true);
        	}

        	if (this.nfn_isNull(this.ds_lookupTypes.getColumn(this.ds_lookupTypes.rowposition, "LOOKUP_TYPE")))
        	{
        		return;
        	}

        	this.fn_search2();
        };

        this.btn_xlDown_onclick = function (obj, e)
        {
        	var sName = "grd_lookupValues";
        	// 저장될 엑셀명
        	var file_name = "공통코드";
        	this.gfn_export_excel(sName, "Sheet1", file_name, "EXCEL");
        };

        this.btn_add01_onclick = function (obj, e)
        {
        	// this.ds_lookupTypes.clearData();
        	this.ds_lookupValues.clearData();

        	var nRow = this.ds_lookupTypes.addRow();
        	// this.div.cbo_respType.set_value("");	//.set_text("선택");
        	this.ds_lookupTypes.setColumn(nRow, "USE_YN", "Y");
        	this.div.form.edt_lookupType.set_enable(true);

        	// this.btn_add01.set_enable(false);
        };

        this.btn_del01_onclick = function (obj, e)
        {
        	if (this.ds_lookupTypes.getRowType(this.ds_lookupTypes.rowposition) == 2)
        	{
        		this.ds_lookupTypes.deleteRow(this.ds_lookupTypes.rowposition);
        	}
        	else
        	{
        		//this.alert("기등록된 메시지정보는 삭제하실 수 없습니다!! 유효상태를 'Invalid'으로 하시기 바랍니다!!");
        		this.gfn_Message("changeInvalid", null, "info", "ok");
        		return;
        	}

        	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");	//IMCMM0049 삭제하시겠습니까?
        	if (bOK == false)
        	{
        		return;
        	}

        	this.ds_lookupTypes.deleteRow(this.ds_lookupTypes.rowposition);

        	if (this.ds_lookupTypes.rowcount == 0)
        	{
        		this.ds_lookupValues.clearData();
        	}
        };


        this.div_search_edt_lookupType_onkeydown = function (obj, e)
        {
        	if (e.keycode == 13)
        	{
        		this.fn_search();
        	}
        };

        this.div_search_edt_description_onkeydown = function (obj, e)
        {
        	if (e.keycode == 13)
        	{
        		this.fn_search();
        	}
        };

        this.div_edt_lookupType_onchanged = function (obj, e)
        {
        	for (var i = 0; i < this.ds_lookupValues.rowcount; i++)
        	{
        		this.ds_lookupValues.setColumn(i, "LOOKUP_TYPE", e.postvalue);
        	}
        	var nRow = this.ds_lookupTypes.rowposition;
        	if(this.ds_lookupTypes.getRowType(nRow)==2){
        		if(this.gfn_isNull(this.ds_lookupTypes.getColumn(nRow,"DICTIONARYID"))){
        			this.ds_lookupTypes.setColumn(nRow,"DICTIONARYID",e.postvalue);
        		}
        	}
        };



        this.div_search_btn_clear1_onclick = function (obj, e)
        {
        	this.reload();
        };

        this.div_btn_dic_onclick = function(obj,e)
        {
        	if(this.ds_lookupTypes.rowposition<0) return;
        // gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        //-----------------
        // arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
        // popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        // popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        // rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        // paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        // paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        // searchStr   : 팝업 조회조건 콤보값 = 조회 값
        	var popupId = "SEARCH_DICTIONARY";
        	var oArg = {};
        	oArg.arg_type = "B";
        	oArg.arg_popupCd = "P00103";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "DICTIONARYID|NM_K|NM_E|NM_C|NM_V|DICTIONARYNAME";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "DICTIONARYID="+this.div.form.edt_dictionaryid.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        this.grd_lookupValues_onexpandup = function(obj,e)
        {
        	/*
        	if(e.row ==  -1){
        		obj.set_enableevent(false);
        		var objDs = this.objects[obj.binddataset];
        		var objColInfo = objDs.getColumnInfo(e.col);
        		trace("objColInfo-->"+objColInfo.type);

        		if(this.components["pdv_filter"]==null){
        			var objPopupDiv = new PopupDiv();
        			objPopupDiv.init("pdv_filter", e.screenx, e.screeny, 200,250);
        			if("INT,FLOAT,BIGDECIMAL".indexOf(objColInfo.type)<0)
        				objPopupDiv.set_url("common::com_filter.xfdl");
        			else
        				objPopupDiv.set_url("common::com_filterNum.xfdl");

        			this.addChild("pdv_filter", objPopupDiv);
        			objPopupDiv.set_cssclass("pdiv_POP");
        			objPopupDiv.show();
        			objPopupDiv.trackPopup( e.screenx, e.screeny-70,200,250, "fn_Callback_pdv_filter");
        		}else{
        			var objPopupDiv = this.components["pdv_filter"];
        			objPopupDiv.trackPopup( e.screenx, e.screeny-70,200,250, "fn_Callback_pdv_filter");
        			if("INT,FLOAT,BIGDECIMAL".indexOf(objColInfo.type)<0)
        				objPopupDiv.set_url("common::com_filter.xfdl");
        			else
        				objPopupDiv.set_url("common::com_filterNum.xfdl");

        			objPopupDiv.form.objGrd = obj;
        			objPopupDiv.form.objGrdCell = e.cell;
        			objPopupDiv.form.objGrdCol = e.col;
        			objPopupDiv.form.objDsNm = obj.binddataset;
        			objPopupDiv.form.reload();
        		}
        		objPopupDiv.form.objGrd = obj;
        		objPopupDiv.form.objGrdCell = e.cell;
        		objPopupDiv.form.objGrdCol = e.col;
        		objPopupDiv.form.objDsNm = obj.binddataset;
        		obj.set_enableevent(true);
        		return;
        	}*/
        	if(e.row <0) return;
        	if (this.nfn_isEqualCol(obj, e.col, "DICTIONARYID"))
        	{
        		var popupId = "SEARCH_DICTIONARY2";
        		var oArg = {};
        		oArg.arg_type = "B";
        		oArg.arg_popupCd = "P00002";
        		oArg.arg_popupNm = "";
        		oArg.arg_rtnCols = "DICTIONARYID|NM_K|NM_E|NM_C|NM_V|DICTIONARYNAME";
        		oArg.arg_paramCols = "";
        		oArg.arg_paramValues = "";
        		oArg.arg_searchStr = "DICTIONARYID="+this.ds_lookupValues.getColumn(this.ds_lookupValues.rowposition,"DICTIONARYID");

        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        	}
        	obj.set_enableevent(true);
        };
        /**************************************************************************
         * 80. 팝업
        ***************************************************************************/
        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SEARCH_DICTIONARY")
        	{
        		var nRow = this.ds_lookupTypes.rowposition;

        		this.ds_lookupTypes.setColumn(nRow, "DICTIONARYID", rtn[0]);
        		this.ds_lookupTypes.setColumn(nRow, "NM_K", rtn[1]);
        		this.ds_lookupTypes.setColumn(nRow, "NM_E", rtn[2]);
        		this.ds_lookupTypes.setColumn(nRow, "NM_C", rtn[3]);
        		this.ds_lookupTypes.setColumn(nRow, "NM_V", rtn[4]);
        		this.ds_lookupTypes.setColumn(nRow, "DICTIONARYNAME", rtn[5]);
        	}
        	if(sPopupId == "SEARCH_DICTIONARY2")
        	{
        		var nRow = this.ds_lookupValues.rowposition;
        		this.ds_lookupValues.setColumn(nRow, "DICTIONARYID", rtn[0]);
        		this.ds_lookupValues.setColumn(nRow, "NM_K", rtn[1]);
        		this.ds_lookupValues.setColumn(nRow, "NM_E", rtn[2]);
        		this.ds_lookupValues.setColumn(nRow, "NM_C", rtn[3]);
        		this.ds_lookupValues.setColumn(nRow, "NM_V", rtn[4]);
        		this.ds_lookupValues.setColumn(nRow, "DICTIONARYNAME", rtn[5]);
        	}
        	if(sPopupId == "PARENT_TYPE")
        	{
        		this.div.form.edt_parent.set_value(rtn);
        		//var nRow = this.ds_lookupValues.rowposition;
        		//this.ds_lookupValues.setColumn(nRow, "PARENTCODECLASSID", rtn[0]);
        	}

        }

        /*
        this.grd_lookupTypes_onrbuttondown = function(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo)
        {
        	var editType = obj.getCellProperty("Body",e.cell,"edittype");
        	obj.setCellProperty("Body",e.cell,"edittype","none");
        	alert(e.screenx);
        	if(this.components["pdv_grdMenu"]==null){
        		var objPopupDiv = new PopupDiv();
        		objPopupDiv.init("pdv_grdMenu", e.screenx, e.screeny,94,150+26*this.ds_grdMenu.rowcount);
        		objPopupDiv.set_url("common::com_grdMenu.xfdl");
        		this.addChild("pdv_grdMenu", objPopupDiv);
        		objPopupDiv.show();
        //		objPopupDiv.trackPopup( e.clientx+170, e.clienty+60 , "fn_Callback_pdv_grdMenu");
        		objPopupDiv.trackPopup( e.screenx, nexacro.toNumber(obj.top) + nexacro.toNumber(e.clienty), 94, objPopupDiv.height, "fn_Callback_pdv_grdMenu");
        	}else{
        		var objPopupDiv = this.components["pdv_grdMenu"];
        		objPopupDiv.trackPopup( e.screenx, nexacro.toNumber(obj.top) + nexacro.toNumber(e.clienty), 94, objPopupDiv.height, "fn_Callback_pdv_grdMenu");
        //		objPopupDiv.trackPopup( e.clientx+170, e.clienty+60 , "fn_Callback_pdv_grdMenu");
        	}
        	objPopupDiv.form.objGrdMenu = obj;
        	objPopupDiv.form.objGrdMenuRow = e.row;
        	objPopupDiv.form.objGrdMenuCell = e.cell;
        	objPopupDiv.form.objGrdMenuCol = e.col;
        	trace("row-->"+objPopupDiv.form.objGrdMenuRow);
        	trace("col-->"+objPopupDiv.form.objGrdMenuCol);
        	obj.setCellProperty("Body",e.cell,"edittype",editType);

        };

        this.fn_Callback_pdv_grdMenu = function ()
        {
        	trace("fn_Callback_pdv_grdMenu");

        };

        this.grd_lookupValues_onrbuttondown = function(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo)
        {

        trace(e.canvasy);
        trace(e.screeny);
        trace(e.clienty);
        	var editType = obj.getCellProperty("Body",e.cell,"edittype");
        	obj.setCellProperty("Body",e.cell,"edittype","none");
        	if(this.components["pdv_grdMenu"]==null){
        		var objPopupDiv = new PopupDiv();
        		objPopupDiv.init("pdv_grdMenu",e.clientx, e.clienty,94,150+26*this.ds_grdMenu.rowcount);
        		objPopupDiv.set_url("common::com_grdMenu.xfdl");
        		this.addChild("pdv_grdMenu", objPopupDiv);
        		objPopupDiv.show();
        		objPopupDiv.trackPopup( e.screenx, e.screeny-70, 94, objPopupDiv.height, "fn_Callback_pdv_grdMenu");
        	}else{
        		var objPopupDiv = this.components["pdv_grdMenu"];
        		objPopupDiv.trackPopup( e.screenx, e.screeny-70, 94, objPopupDiv.height, "fn_Callback_pdv_grdMenu");
        	}
        	objPopupDiv.form.objGrdMenu = obj;
        	objPopupDiv.form.objGrdMenuRow = e.row;
        	objPopupDiv.form.objGrdMenuCell = e.cell;
        	objPopupDiv.form.objGrdMenuCol = e.col;
        	trace("row-->"+objPopupDiv.objGrdMenuRow);
        	trace("col-->"+objPopupDiv.objGrdMenuCol);
        	obj.setCellProperty("Body",e.cell,"edittype",editType);
        };
        */


        this.fn_test = function ()
        {
        	alert("cell-->"+this.pdv_grdMenu.form.objGrdMenuCell+",col-->"+this.pdv_grdMenu.form.objGrdMenuCol+",row-->"+this.pdv_grdMenu.form.objGrdMenuRow);
        	trace("col-->"+this.pdv_grdMenu.form.objGrdMenuCol);
        	trace("row-->"+this.pdv_grdMenu.form.objGrdMenuRow);
        }
        /*
        this.grd_lookupValues_onheadclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        {
        	var bShiftKey = window.event.shiftKey;
        	if(bShiftKey){
        		if(this.components["pdv_filter"]==null){
        			var objPopupDiv = new PopupDiv();
        			objPopupDiv.init("pdv_filter",e.clientx, e.clienty,300,300);
        			objPopupDiv.set_url("common::com_filter.xfdl");
        			this.addChild("pdv_filter", objPopupDiv);
        			objPopupDiv.show();
        			objPopupDiv.trackPopup( e.screenx, e.screeny-70,300,300, "fn_Callback_pdv_grdMenu");
        		}else{
        			var objPopupDiv = this.components["pdv_filter"];
        			objPopupDiv.trackPopup( e.screenx, e.screeny-70,300,300, "fn_Callback_pdv_grdMenu");
        		}
        		objPopupDiv.form.objGrdMenu = obj;
        		objPopupDiv.form.objGrdMenuRow = e.row;
        		objPopupDiv.form.objGrdMenuCell = e.cell;
        		objPopupDiv.form.objGrdMenuCol = e.col;
        		trace("row-->"+objPopupDiv.objGrdMenuRow);
        		trace("col-->"+objPopupDiv.objGrdMenuCol);
        		return;
        	}
        };
        */

        /*
        this.grd_lookupValues_onmousemove = function(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo)
        {
        	for(var i=0; i<obj.getCellCount("head"); i++) obj.setCellProperty("head",i,"expandshow","hide");

        	if(e.row== -1){
        		obj.setCellProperty("head",e.cell,"expandimage","theme://images/grd_head_icon11_N.png");
        		obj.setCellProperty("head",e.cell,"expandshow","show");
        		obj.setCellProperty("head",e.cell,"expandsize","24");
        	}else{
        		obj.setCellProperty("head",e.cell,"expandshow","hide");
        	}
        	obj.set_enableevent(false);
        	e.stopPropagation()
        };
        */
        this.div_btn_parent_onclick = function(obj,e)
        {
        	var popupId = "PARENT_TYPE";
        	var oArg = {};
        	oArg.arg_type = "B";
        	oArg.arg_popupCd = "P00116";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "LOOKUP_TYPE";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "LOOKUP_TYPE="+this.div.form.edt_parent.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        this.div_edt_meaning_onchanged = function(obj,e)
        {
        	var nRow = this.ds_lookupTypes.rowposition;
        	if(this.ds_lookupTypes.getRowType(nRow)==2 || this.ds_lookupTypes.getRowType(nRow)==4){
        		if(this.gfn_isNull(this.ds_lookupTypes.getColumn(nRow,"DESCRIPTION"))){
        			this.ds_lookupTypes.setColumn(nRow,"DESCRIPTION",e.postvalue);
        		}
        		if(this.gfn_isNull(this.ds_lookupTypes.getColumn(nRow,"DICTIONARYNAME"))){
        			this.ds_lookupTypes.setColumn(nRow,"DICTIONARYNAME",e.postvalue);
        		}
        		if(this.gfn_isNull(this.ds_lookupTypes.getColumn(nRow,"NM_K"))){
        			this.ds_lookupTypes.setColumn(nRow,"NM_K",e.postvalue);
        		}
        		if(this.gfn_isNull(this.ds_lookupTypes.getColumn(nRow,"NM_E"))){
        			this.ds_lookupTypes.setColumn(nRow,"NM_E","(E)"+e.postvalue);
        		}
        		if(this.gfn_isNull(this.ds_lookupTypes.getColumn(nRow,"NM_C"))){
        			this.ds_lookupTypes.setColumn(nRow,"NM_C","(C)"+e.postvalue);
        		}
        		if(this.gfn_isNull(this.ds_lookupTypes.getColumn(nRow,"NM_V"))){
        			this.ds_lookupTypes.setColumn(nRow,"NM_V","(V)"+e.postvalue);
        		}
        	}
        };

        this.ds_lookupValues_onvaluechanged = function(obj,e)
        {
        	if(this.div.form.edt_lookupType.value=="COM_HISTORY_SAVE") return;

        	var nRow = e.row;
        	if(e.columnid=="LOOKUP_CODE"){
        		if(this.gfn_isNull(obj.getColumn(nRow,"DICTIONARYID")) && this.div.form.edt_lookupType.value!="COM_HISTORY_SAVE"){
        			obj.setColumn(nRow,"DICTIONARYID",obj.getColumn(nRow,"LOOKUP_TYPE")+"_"+e.newvalue);
        		}
        	}
        	if(e.columnid=="MEANING"){
        		if(this.gfn_isNull(obj.getColumn(nRow,"DESCRIPTION"))){
        			obj.setColumn(nRow,"DESCRIPTION",e.newvalue);
        		}
        		if(this.gfn_isNull(obj.getColumn(nRow,"DICTIONARYNAME"))){
        			obj.setColumn(nRow,"DICTIONARYNAME",e.newvalue);
        		}
        		if(this.gfn_isNull(obj.getColumn(nRow,"NM_K"))){
        			obj.setColumn(nRow,"NM_K",e.newvalue);
        		}
        		if(this.gfn_isNull(obj.getColumn(nRow,"NM_E"))){
        			obj.setColumn(nRow,"NM_E","(E)"+e.newvalue);
        		}
        		if(this.gfn_isNull(obj.getColumn(nRow,"NM_C"))){
        			obj.setColumn(nRow,"NM_C","(C)"+e.newvalue);
        		}
        		if(this.gfn_isNull(obj.getColumn(nRow,"NM_V"))){
        			obj.setColumn(nRow,"NM_V","(V)"+e.newvalue);
        		}
        		if(this.gfn_isNull(obj.getColumn(nRow,"DICTIONARYID"))){
        			obj.setColumn(nRow,"DICTIONARYID",obj.getColumn(nRow,"LOOKUP_CODE"));
        		}
        	}
        	/*
        	if(e.columnid=="DICTIONARYID" && this.gfn_isNull(e.newvalue)){
        		obj.setColumn(nRow,"NM_K","");
        		obj.setColumn(nRow,"NM_E","");
        		obj.setColumn(nRow,"NM_C","");
        		obj.setColumn(nRow,"NM_V","");
        	}
        	*/
        };
        /*
        this.grd_lookupTypes_onkeydown = function(obj:nexacro.Grid,e:nexacro.KeyEventInfo)
        {
        	if(obj.getCurEditType()!="none") return;

        	var dsObj = obj.getBindDataset();
        	var browser = system.navigatorname;
        	if(e.ctrlkey){
        		if(e.keycode == 67){
        			var content = obj.getCellText(obj.currentrow,obj.currentcell)
        			if(browser == "IE"){
        				system.clearClipboard();
        				system.setClipboard("CF_TEXT",content);
        			}else{
        				var oArg = {arg_content:content};
        				this.gfn_openPopup("com_copy","common::com_copy.xfdl",oArg,"");
        			}
        		}
        	}
        };
        */

        this.grd_lookupValues_onselectchanged = function(obj,e)
        {
        	if(this.ds_lookupValues.getRowType(e.row)==2){	//추가된 행의 상태
        		this.btn_del.set_enable(true);
        	}else{
        		this.btn_del.set_enable(false);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.grd_lookupTypes.addEventHandler("onselectchanged",this.grd_lookupTypes_onselectchanged,this);
            this.grd_lookupTypes.addEventHandler("onrbuttondown",this.grd_lookupTypes_onrbuttondown,this);
            this.grd_lookupTypes.addEventHandler("onheadclick",this.grd_lookupTypes_onheadclick,this);
            this.grd_lookupTypes.addEventHandler("onkeydown",this.grd_lookupTypes_onkeydown,this);
            this.div.form.edt_meaning.addEventHandler("onchanged",this.div_edt_meaning_onchanged,this);
            this.div.form.edt_lookupType.addEventHandler("onchanged",this.div_edt_lookupType_onchanged,this);
            this.div.form.btn_dic.addEventHandler("onclick",this.div_btn_dic_onclick,this);
            this.div.form.btn_parent.addEventHandler("onclick",this.div_btn_parent_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static10_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.grd_lookupValues.addEventHandler("onexpandup",this.grd_lookupValues_onexpandup,this);
            this.grd_lookupValues.addEventHandler("onrbuttondown",this.grd_lookupValues_onrbuttondown,this);
            this.grd_lookupValues.addEventHandler("onheadclick",this.grd_lookupValues_onheadclick,this);
            this.grd_lookupValues.addEventHandler("onmousemove",this.grd_lookupValues_onmousemove,this);
            this.grd_lookupValues.addEventHandler("onselectchanged",this.grd_lookupValues_onselectchanged,this);
            this.btn_add01.addEventHandler("onclick",this.btn_add01_onclick,this);
            this.btn_del01.addEventHandler("onclick",this.btn_del01_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static10_onclick,this);
            this.btn_xlDown.addEventHandler("onclick",this.btn_xlDown_onclick,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_lookupValues.addEventHandler("onvaluechanged",this.ds_lookupValues_onvaluechanged,this);
            this.ds_parent.addEventHandler("onvaluechanged",this.ds_lookupValues_onvaluechanged,this);
        };
        this.loadIncludeScript("CMSA00300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
