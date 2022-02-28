(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSA00100M");
            this.set_titletext("공통팝업관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,721);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_popup", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"POPUP_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"JOB_GUBUN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_CD\" size=\"256\" type=\"STRING\"/><Column id=\"POPUP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"QRY_URL\" size=\"256\" type=\"STRING\"/><Column id=\"MTH\" size=\"256\" type=\"STRING\"/><Column id=\"DEL_YN\" size=\"256\" type=\"STRING\"/><Column id=\"CREATED_BY\" size=\"256\" type=\"STRING\"/><Column id=\"CREATION_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_BY\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_UPDATE_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATE_LOGIN\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"QRY_TY\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupPls", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"POPUP_PLS_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"POPUP_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CLUM_KOREAN_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CLUM_ENG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CLUM_SIZE\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CLUM_TY\" size=\"256\" type=\"STRING\"/><Column id=\"HRZNTLTY_ALIGN\" size=\"256\" type=\"STRING\"/><Column id=\"QRY_SEQ\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CREATED_BY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CREATED_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_BY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"LAST_UPDATED_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATE_LOGIN\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"QEE_ORDR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QEE_DRC\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CBO_CODE_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_srhCndClum", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"POPUP_SRH_CND_CLUM_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"POPUP_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"SRH_CLUM_KOREAN_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SRH_CLUM_ENG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SRH_CLUM_TY\" size=\"256\" type=\"STRING\"/><Column id=\"SRH_VL\" size=\"256\" type=\"STRING\"/><Column id=\"FIXING_CLUM_YN\" size=\"256\" type=\"STRING\"/><Column id=\"CREATED_BY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CREATION_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_BY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"LAST_UPDATE_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATE_LOGIN\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"QEE_ORDR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPLACE_STR\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_RETURN_COLS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qryTy", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"desc\">선택</Col></Row><Row><Col id=\"code\">U</Col><Col id=\"desc\">Url</Col></Row><Row><Col id=\"code\">Q</Col><Col id=\"desc\">Query</Col></Row><Row><Col id=\"code\">QR</Col><Col id=\"desc\">Query Replace</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"POPUP_CD\" size=\"256\" type=\"STRING\"/><Column id=\"POPUP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"POPUP_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_GUBUN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTH\" type=\"STRING\" size=\"256\"/><Column id=\"QRY_TY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delete", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CM_POPUP_ID\" size=\"256\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CM_POPUP_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"POPUP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_culmTy", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">STRING</Col><Col id=\"desc\">String</Col></Row><Row><Col id=\"desc\">Bigdecimal</Col><Col id=\"code\">BIGDECIMAL</Col></Row><Row><Col id=\"code\">DATE</Col><Col id=\"desc\">Date</Col></Row><Row><Col id=\"desc\">Combo</Col><Col id=\"code\">COMBO</Col></Row><Row><Col id=\"code\">LIST</Col><Col id=\"desc\">List</Col></Row><Row><Col id=\"code\">POPUP</Col><Col id=\"desc\">Popup</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hrzntltyQee", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">left</Col><Col id=\"desc\">left</Col></Row><Row><Col id=\"code\">center</Col><Col id=\"desc\">center</Col></Row><Row><Col id=\"code\">right</Col><Col id=\"desc\">right</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdCulmTy", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"desc\">normal</Col><Col id=\"code\">normal</Col></Row><Row><Col id=\"code\">date</Col><Col id=\"desc\">date</Col></Row><Row><Col id=\"code\">number</Col><Col id=\"desc\">number</Col></Row><Row><Col id=\"code\">decimal</Col><Col id=\"desc\">decimal</Col></Row><Row><Col id=\"code\">check</Col><Col id=\"desc\">check</Col></Row><Row><Col id=\"code\">combo</Col><Col id=\"desc\">combo</Col></Row><Row><Col id=\"code\">list</Col><Col id=\"desc\">list</Col></Row></Rows>");
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


            obj = new Dataset("ds_drc", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"desc\">선택</Col></Row><Row><Col id=\"code\">ASC</Col><Col id=\"desc\">ASC</Col></Row><Row><Col id=\"code\">DESC</Col><Col id=\"desc\">DESC</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","30",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_popupNm","286","10","140","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","209","10","73","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("팝업명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_tooltiptext("41F1A3ADED6E4982B0F502607C53617C");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","10.68%","56",null,"43","88.22%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","-1",null,"43","97.8%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","0%",null,null,"10","77.97%","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","76","0","10",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","188","0","20",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","276","0","10",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","20","10","74","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("업무구분");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("left");
            obj.set_tooltiptext("SYSTEMWORKTYPE");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_respType","86","10","102","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SystemWorkType,ALL,Y,Y");
            obj.set_tabstop("true");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static08","447","10","57","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("팝업코드");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("left");
            obj.set_tooltiptext("CODEID");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09","54.96%","0",null,null,"43.94%","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_popupCd","510","10","92","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","6","519","108","21",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("조회컬럼");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add00",null,"520","67","21","80",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_GridPlus");
            obj.set_tooltiptext("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del00",null,"520","67","21","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_GridMinus");
            obj.set_tooltiptext("행삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_popupPls","0","551",null,"165","9",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_popupPls");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"183\"/><Column size=\"68\"/><Column size=\"99\"/><Column size=\"87\"/><Column size=\"63\"/><Column size=\"72\"/><Column size=\"56\"/><Column size=\"280\"/><Column size=\"141\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"컬럼한글명\"/><Cell col=\"1\" text=\"컬럼영문명\"/><Cell col=\"2\" text=\"SIZE\"/><Cell col=\"3\" text=\"컬럼유형\"/><Cell col=\"4\" text=\"수평정렬\"/><Cell col=\"5\" text=\"컬럼순서\"/><Cell col=\"6\" text=\"정렬순서\"/><Cell col=\"7\" text=\"방향\"/><Cell col=\"8\" text=\"ComboText(List Query)\"/><Cell col=\"9\" text=\"다국어ID\"/><Cell col=\"10\" text=\"다국어명\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:CLUM_KOREAN_NM\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:CLUM_ENG_NM\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:CLUM_SIZE\" textAlign=\"right\" editautoselect=\"true\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:CLUM_TY\" combodataset=\"ds_grdCulmTy\" combocodecol=\"code\" combodatacol=\"desc\" textAlign=\"left\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:HRZNTLTY_ALIGN\" combodataset=\"ds_hrzntltyQee\" combocodecol=\"code\" combodatacol=\"desc\" textAlign=\"left\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:QRY_SEQ\" textAlign=\"right\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:QEE_ORDR\"/><Cell col=\"7\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:QEE_DRC\" combodataset=\"ds_drc\" combocodecol=\"code\" combodatacol=\"desc\"/><Cell col=\"8\" text=\"bind:CBO_CODE_TYPE\" edittype=\"expr:&apos;combo,list&apos;.indexOf(dataset.getColumn(currow,&apos;CLUM_TY&apos;))&lt;0 ? &apos;none&apos;:&apos;normal&apos;\"/><Cell col=\"9\" text=\"bind:DICTIONARYID\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"10\" text=\"bind:DICTIONARYNAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0.33%","87","140","21",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("팝업정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("41F1A3ADED6E4982B0F502607C53617C");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0.33%","329","119","21",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"330","60","21","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_DR_GridMinus");
            obj.set_tooltiptext("행삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"330","60","21","75",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("행추가");
            obj.set_cssclass("btn_DR_GridPlus");
            obj.set_tooltiptext("행추가");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_srhCndClum","0.00%","361",null,"144","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_srhCndClum");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"234\"/><Column size=\"175\"/><Column size=\"100\"/><Column size=\"280\"/><Column size=\"68\"/><Column size=\"67\"/><Column size=\"0\"/><Column size=\"161\"/><Column size=\"125\"/><Column size=\"184\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"컬럼한글명\"/><Cell col=\"1\" text=\"컬럼영문명\"/><Cell col=\"2\" text=\"컬럼유형\"/><Cell col=\"3\" text=\"Combo Text(List Query, Popup Code)\"/><Cell col=\"4\" text=\"고정여부\"/><Cell col=\"5\" text=\"정렬순서\"/><Cell col=\"6\" text=\"치환\"/><Cell col=\"7\" text=\"다국어ID\"/><Cell col=\"8\" text=\"다국어명\"/><Cell col=\"9\" text=\"Pop Return Cols\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:SRH_CLUM_KOREAN_NM\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:SRH_CLUM_ENG_NM\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:SRH_CLUM_TY\" combodataset=\"ds_culmTy\" combocodecol=\"code\" combodatacol=\"desc\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"3\" edittype=\"expr:&apos;COMBO,LIST,POPUP&apos;.indexOf(dataset.getColumn(currow,&apos;SRH_CLUM_TY&apos;))&lt;0 ? &apos;none&apos;:&apos;normal&apos;\" text=\"bind:SRH_VL\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"4\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:FIXING_CLUM_YN\" combodataset=\"ds_yn\" combocodecol=\"code\" combodatacol=\"desc\" textAlign=\"center\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:QEE_ORDR\"/><Cell col=\"6\" text=\"bind:REPLACE_STR\" edittype=\"normal\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:DICTIONARYID\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandsize=\"24\"/><Cell col=\"8\" text=\"bind:DICTIONARYNAME\"/><Cell col=\"9\" text=\"bind:POPUP_RETURN_COLS\" edittype=\"expr:&apos;POPUP&apos;.indexOf(dataset.getColumn(currow,&apos;SRH_CLUM_TY&apos;))&lt;0 ? &apos;none&apos;:&apos;normal&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","60","21","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Toolbar_Save");
            this.addChild(obj.name, obj);

            obj = new Static("Static06",null,"28","10","42","10",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","98.91%","-6",null,"1856","0%",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","0","73","118","15",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0%","109",null,"10","87.17%",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0%","351",null,"10","87.17%",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0%","315",null,"15","87.17%",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0.00%","505",null,"15","87.50%",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0.11%","541",null,"10","87.61%",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_popup","0.00%","119",null,"202","53.91%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_popup");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"86\"/><Column size=\"90\"/><Column size=\"305\"/><Column size=\"93\"/><Column size=\"196\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"팝업ID\"/><Cell col=\"1\" text=\"업무구분\" tooltiptext=\"SYSTEMWORKTYPE\"/><Cell col=\"2\" text=\"팝업코드\" tooltiptext=\"CODEID\"/><Cell col=\"3\" text=\"팝업명\" tooltiptext=\"41F1A3ADED6E4982B0F502607C53617C\"/><Cell col=\"4\" text=\"조회유형\" tooltiptext=\"CODETYPE\"/><Cell col=\"5\" text=\"Url/쿼리\" tooltiptext=\"URL_QUERY\"/><Cell col=\"6\" text=\"조회유형\"/></Band><Band id=\"body\"><Cell text=\"bind:CM_POPUP_ID\"/><Cell col=\"1\" displaytype=\"combotext\" edittype=\"none\" text=\"bind:JOB_GUBUN_CD\" combocodecol=\"C,SystemWorkType,SEL,Y,N\"/><Cell col=\"2\" text=\"bind:POPUP_CD\"/><Cell col=\"3\" text=\"bind:POPUP_NM\" textAlign=\"left\"/><Cell col=\"4\" displaytype=\"combotext\" edittype=\"none\" text=\"bind:QRY_TY\" combodataset=\"ds_qryTy\" combocodecol=\"code\" combodatacol=\"desc\"/><Cell col=\"5\" text=\"bind:QRY_URL\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:QRY_TY\" combodataset=\"ds_qryTy\" combocodecol=\"code\" combodatacol=\"desc\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add01",null,"93","60","21","75",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_cssclass("btn_DR_GridPlus");
            obj.set_tooltiptext("GridAdd");
            this.addChild(obj.name, obj);

            obj = new Div("div","46.85%","119",null,"203","12",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","2","88",null,"20","81.54%",null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_text("조회URL/쿼리");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("bold 8pt \"Dotum\"");
            obj.set_textAlign("right");
            obj.set_tooltiptext("URL_QUERY");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static07","2","62",null,"20","81.54%",null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_text("팝업명");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_tooltiptext("41F1A3ADED6E4982B0F502607C53617C");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_popupNm","20.54%","62",null,"20","0.83%",null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_dictionaryid","20.54%","174",null,"20","54.15%",null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_visible("true");
            obj.set_enable("false");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03","2.90%","174",null,"20","81.54%",null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_text("다국어ID");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_visible("true");
            obj.set_textAlign("right");
            obj.set_tooltiptext("DICTIONARYID");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_popupCd","20.33%","36",null,"20","54.77%",null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00","2","36",null,"20","81.54%",null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_text("팝업코드");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_tooltiptext("CODEID");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static05","2","10",null,"20","81.54%",null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_text("업무구분");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_tooltiptext("SYSTEMWORKTYPE");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_respType","20.33%","10",null,"20","54.77%",null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SystemWorkType,SEL,Y,Y");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static08","49.05%","10",null,"21","35.37%",null,null,null,null,null,this.div.form);
            obj.set_taborder("11");
            obj.set_text("조회유형");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_tooltiptext("CODETYPE");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_qryTy","66.80%","10",null,"20","0.83%",null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_qryTy");
            obj.set_codecolumn("code");
            obj.set_datacolumn("desc");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            this.div.addChild(obj.name, obj);

            obj = new TextArea("txt_qryUrl","20.54%","88",null,"83","0.83%",null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            obj.set_cssclass("essential");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static16","0%","0",null,"10","-3.35%",null,null,null,null,null,this.div.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static17","0%","31",null,"5","-3.35%",null,null,null,null,null,this.div.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static10","0%","57",null,"5","-3.35%",null,null,null,null,null,this.div.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static11","0%","83",null,"5","-3.35%",null,null,null,null,null,this.div.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static12","0%",null,null,"5","-3.35%","-15",null,null,null,null,this.div.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static28","64.11%","0",null,"63","32.57%",null,null,null,null,null,this.div.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static13","18.05%","0",null,null,"79.46%","-15",null,null,null,null,this.div.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_pop","46.06%","174",null,"20","47.72%",null,null,null,null,null,this.div.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            obj.set_tooltiptext("Toolbar_Search");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_dictionaryname","53.11%","174",null,"20","0.83%",null,null,null,null,null,this.div.form);
            obj.set_taborder("20");
            obj.set_cssclass("essential");
            obj.set_visible("true");
            obj.set_enable("false");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_00","235","36",null,"20","35.37%",null,null,null,null,null,this.div.form);
            obj.set_taborder("21");
            obj.set_text("생성자");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_tooltiptext("CREATOR");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_creator","66.74%","36",null,"20","0.63%",null,null,null,null,null,this.div.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_del01",null,"93","60","21","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_DR_GridMinus");
            obj.set_tooltiptext("GridDelete");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0%","21",null,"9","1.09%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"0","60","21","76",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("초기화");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","21","141",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Toolbar_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,721,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","div_search.form.edt_popupCd","cssclass","ds_result","POPUP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div.form.edt_popupNm","value","ds_popup","POPUP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div.form.edt_dictionaryid","value","ds_popup","DICTIONARYID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div.form.edt_popupCd","value","ds_popup","POPUP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div.form.cbo_respType","value","ds_popup","JOB_GUBUN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div.form.cbo_qryTy","value","ds_popup","QRY_TY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div.form.txt_qryUrl","value","ds_popup","QRY_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_popupNm","cssclass","ds_result","POPUP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div.form.edt_dictionaryname","value","ds_popup","DICTIONARYNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div.form.edt_creator","value","ds_popup","CREATED_BY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMSA00100M.xfdl", function() {
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";
        /******************************************************************************/
        /* Form Init																  */
        /******************************************************************************/
        /*
         기능 : 초기화 (폼 로드 시 초기화)
         */
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	// 엔터키 설정 함수(조회)
        	this.gfn_setEnterSearch(this.div_search, "nfn_search");
        };
        // **************************************************************************************************
        // 검색 이벤트
        // **************************************************************************************************
        this.fn_search = function (obj, e)
        {
        	this.ds_popup.clearData();
        	this.ds_popupPls.clearData();
        	this.ds_srhCndClum.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "POPUP_CD", this.div_search.form.edt_popupCd.value);
        	this.ds_search.setColumn(0, "POPUP_NM", this.div_search.form.edt_popupNm.value);
        	this.ds_search.setColumn(0, "JOB_GUBUN_CD", this.div_search.form.cbo_respType.value);
        	this.ds_search.setColumn(0, "DEL_YN", 'N');

        	var sSvcID = "selectCmdPopupList";
        	var sController = "/cmsa00100/selectCmdPopupList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_popup=output";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdPopupList");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	this.btn_add01.set_enable(true);
        };

        // **************************************************************************************************
        // 검색 이벤트
        // **************************************************************************************************
        this.fn_search2 = function (obj, e)
        {
        	if (this.ds_popup.rowposition < 0)
        	{
        		return;
        	}

        	this.ds_popupPls.clearData();
        	this.ds_srhCndClum.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "POPUP_ID", this.ds_popup.getColumn(this.ds_popup.rowposition, "POPUP_ID"));


        	var sSvcID = "selectCmdPopupPlsList";
        	var sController = "/cmsa00100/selectCmdPopupPlsList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_popupPls=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdPopupPlsList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	var sSvcID = "selectCmdPopupSrhCndClumList";
        	var sController = "/cmsa00100/selectCmdPopupSrhCndClumList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_srhCndClum=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdPopupSrhCndClumList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        // **************************************************************************************************
        // 저장 이벤트
        // **************************************************************************************************
        this.fn_save = function (obj, e)
        {
        	var bOK = this.gfn_Message("InfoPopupSave", null, "conf", "yesno");
        	if (bOK == false) return;

        	if (!this.gfn_dsIsUpdated(this.ds_popup)
        		 && !this.gfn_dsIsUpdated(this.ds_srhCndClum)
        		 && !this.gfn_dsIsUpdated(this.ds_popupPls))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	var component = this.div;
        	var strColIdList = "cbo_respType,cbo_qryTy,edt_popupNm,txt_qryUrl";
        	var strColNmList = "업무구분,조회유형,팝업명,조회URL";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false)
        	{
        		return;
        	}

        	if (!this.gfn_GridKeyCheck(this.grd_popupPls, ["CLUM_KOREAN_NM", "CLUM_ENG_NM", "CLUM_SIZE", "CLUM_TY"]))
        	{
        		return;
        	}

        	// var component = this.grd_popupPls;
        	// var strColIdList = "CLUM_KOREAN_NM,CLUM_ENG_NM,CLUM_SIZE,CLUM_TY";
        	// var strColNmList = "컬럼한글명,컬럼영문명,컬럼크기,컬럼유형";
        	// var rtn = this.nfn_MandatoryCheckGrid(component,strColIdList,strColNmList);
        	// if(rtn==false) return;

        	if (!this.gfn_GridKeyCheck(this.grd_srhCndClum, ["SRH_CLUM_KOREAN_NM", "SRH_CLUM_ENG_NM", "SRH_CLUM_TY"]))
        	{
        		return;
        	}

        	// var component = this.grd_srhCndClum;
        	// var strColIdList = "SRH_CLUM_KOREAN_NM,SRH_CLUM_ENG_NM,SRH_CLUM_TY";
        	// var strColNmList = "검색컬럼한글명,검색컬럼영문명,검색컬럼유형";
        	// var rtn = this.nfn_MandatoryCheckGrid(component,strColIdList,strColNmList);
        	// if(rtn==false) return;

        	var qryUrl = this.div.form.txt_qryUrl.value;
        	qryUrl = qryUrl.toUpperCase();
        	if (this.div.form.cbo_qryTy.value == "Q")
        	{
        		if (qryUrl.indexOf("WHERE") < 0)
        		{
        			alert("WHERE 구문을 추가하세요(WHERE 1=1)");
        			return;
        		}
        	}
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveCmdPopup";
        	var sController = "/cmsa00100/saveCmdPopup.do";
        	var sInDatasets = "INPUT_H=ds_popup:U INPUT_L=ds_popupPls:U INPUT_C=ds_srhCndClum:U";
        	var sOutDatasets = "ds_result=output";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "saveCmdPopup");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*******************************************************************************
         *  콜백 함수
         ******************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "selectCmdPopupList")
        		{
        				this.grd_srhCndClum.setRealColSize("body",6,0);
        				if(this.ds_popup.getColumn(this.ds_popup.rowposition,"QRY_TY")=="QR"){
        					this.grd_srhCndClum.setRealColSize("body",6,48);
        				}
        		}
        		else if (trId == "saveCmdPopup")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.btn_add01.set_enable(true);
        			if (!this.nfn_isNull(this.ds_result.getColumn(0, "POPUP_ID")))
        			{
        				this.ds_popup.setColumn(this.ds_popup.rowposition, "POPUP_ID", this.ds_result.getColumn(0, "POPUP_ID"));
        				this.ds_popup.setColumn(this.ds_popup.rowposition, "POPUP_CD", this.ds_result.getColumn(0, "POPUP_CD"));
        			}
        			this.fn_search2();
        		}
        	}
        };

        this.btn_add_onclick = function (obj, e)
        {
        	if (this.ds_popup.rowposition < 0)
        	{
        		alert("팝업정보를 입력하세요");
        		return;
        	}
        	var nRow = this.ds_srhCndClum.addRow();
        	this.ds_srhCndClum.setColumn(nRow, "POPUP_ID", this.ds_popup.getColumn(this.ds_popup.rowposition, "POPUP_ID"));
        	this.ds_srhCndClum.setColumn(nRow, "SRH_CLUM_TY", "STRING");
        	this.ds_srhCndClum.setColumn(nRow, "FIXING_CLUM_YN", "N");
        	if(this.div.form.cbo_qryTy.value=="QR"){
        		this.ds_srhCndClum.setColumn(nRow, "REPLACE_STR", "{"+nRow+"}");
        	}
        };

        this.btn_del_onclick = function (obj, e)
        {
        	this.ds_srhCndClum.deleteRow(this.ds_srhCndClum.rowposition);
        };

        this.btn_add00_onclick = function (obj, e)
        {
        	if (this.ds_popup.rowposition < 0)
        	{
        		alert("팝업정보를 입력하세요");
        		return;
        	}
        	var nRow = this.ds_popupPls.addRow();
        	this.ds_popupPls.setColumn(nRow, "POPUP_ID", this.ds_popup.getColumn(this.ds_popup.rowposition, "POPUP_ID"));
        	this.ds_popupPls.setColumn(nRow, "CLUM_TY", "normal");
        	this.ds_popupPls.setColumn(nRow, "HRZNTLTY_ALIGN", "center");
        };

        this.btn_del00_onclick = function (obj, e)
        {
        	this.ds_popupPls.deleteRow(this.ds_popupPls.rowposition);
        };


        this.grd_popup_onselectchanged = function (obj, e)
        {
        	this.ds_popupPls.clearData();
        	this.ds_srhCndClum.clearData();
        	if (this.nfn_isNull(this.ds_popup.getColumn(e.row, "POPUP_ID"))) return

        	this.fn_search2();

        	this.btn_add01.set_enable(true);

        	if(this.div.form.cbo_qryTy.value=="QR"){
        		this.grd_srhCndClum.setRealColSize("body",6,48);
        	}
        	if(this.div.form.cbo_qryTy.value=="U"){
        		this.grd_popupPls.setRealColSize("body",6,0);
        		this.grd_popupPls.setRealColSize("body",7,0);
        	}
        };

        this.btn_add01_onclick = function (obj, e)
        {
        	// this.ds_popup.clearData();
        	this.ds_popupPls.clearData();
        	this.ds_srhCndClum.clearData();

        	var nRow = this.ds_popup.addRow();
        	//this.ds_popup.setColumn(nRow, "JOB_GUBUN_CD", this.div_search.form.cbo_respType.value);
        	this.ds_popup.setColumn(nRow, "QRY_TY", "Q");
        	this.ds_popup.setColumn(nRow, "DEL_YN", "N");
        	this.ds_popup.setColumn(nRow, "MTH", "userQueryList");

        	this.btn_add01.set_enable(false);
        };

        this.btn_del01_onclick = function (obj, e)
        {
        	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        	if (bOK == false)
        	{
        		return;
        	}

        	this.ds_popup.deleteRow(this.ds_popup.rowposition);
        	if (this.ds_popup.rowcount == 0)
        	{
        		this.ds_popupPls.clearData();
        		this.ds_srhCndClum.clearData();
        	}
        	this.btn_add01.set_enable(true);
        };

        this.div_search_edt_popupNm_onkeydown = function (obj, e)
        {
        	if (e.keycode != 13)
        	{
        		return;
        	}

        	this.fn_search();
        };

        this.div_search_btn_clear_onclick = function (obj, e)
        {
        	this.div_search.form.edt_popupNm.set_value("");
        	this.div_search.form.cbo_respType.set_text("전체");
        };

        this.div_btn_pop_onclick = function(obj,e)
        {
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
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00103";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "DICTIONARYID|DICTIONARYNAME";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "1=1|DICTIONARYID="+this.div.form.edt_dictionaryid.value;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        	//this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };
        this.grd_srhCndClum_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.col, "DICTIONARYID"))
        	{

        		//nfn_openComPopup = function(popupId, type, popupCd, rtnCols, paramCols, paramValues, searchStr)
        		this.nfn_openComPopup("SEARCH_DICTIONARY2","B", "P00002", "DICTIONARYID|DICTIONARYNAME","","","");
        /*
        		var popupId = "SEARCH_DICTIONARY2";
        		var oArg = {};
        		oArg.arg_type = "B";
        		oArg.arg_popupCd = "P00002";
        		oArg.arg_popupNm = "";
        		oArg.arg_rtnCols = "DICTIONARYID|DICTIONARYNAME";
        		oArg.arg_paramCols = "";
        		oArg.arg_paramValues = "";
        		oArg.arg_searchStr = "";

        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        */
        	}
        };

        this.grd_popupPls_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.col, "DICTIONARYID"))
        	{
        		var popupId = "SEARCH_DICTIONARY3";
        		var oArg = {};
        		oArg.arg_type = "B";
        		oArg.arg_popupCd = "P00002";
        		oArg.arg_popupNm = "";
        		oArg.arg_rtnCols = "DICTIONARYID|DICTIONARYNAME";
        		oArg.arg_paramCols = "";
        		oArg.arg_paramValues = "";
        		oArg.arg_searchStr = "";

        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        	}
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
        		var nRow = this.ds_popup.rowposition;

        		this.ds_popup.setColumn(nRow, "DICTIONARYID", rtn[0]);
        		this.ds_popup.setColumn(nRow, "DICTIONARYNAME", rtn[1]);
        	}
        	if(sPopupId == "SEARCH_DICTIONARY2")
        	{
        	/*
        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			for(var j=0; j<colArray.length; j++){
        				trace(""+i+","+j+"-->"+colArray[j]);
        			}
        		}
        	*/
        		var nRow = this.ds_srhCndClum.rowposition;

        		this.ds_srhCndClum.setColumn(nRow, "DICTIONARYID", rtn[0]);
        		this.ds_srhCndClum.setColumn(nRow, "DICTIONARYNAME", rtn[1]);
        	}
        	if(sPopupId == "SEARCH_DICTIONARY3")
        	{
        		var nRow = this.ds_popupPls.rowposition;

        		this.ds_popupPls.setColumn(nRow, "DICTIONARYID", rtn[0]);
        		this.ds_popupPls.setColumn(nRow, "DICTIONARYNAME", rtn[1]);
        	}
        }


        this.div_cbo_qryTy_onitemchanged = function(obj,e)
        {
        	this.grd_srhCndClum.setRealColSize("body",6,0);
        	this.grd_popupPls.setRealColSize("body",6,72);
        	this.grd_popupPls.setRealColSize("body",7,56);
        	if(e.postvalue=="QR"){
        		this.grd_srhCndClum.setRealColSize("body",6,48);
        	}
        	if(e.postvalue=="U"){
        		this.grd_popupPls.setRealColSize("body",6,0);
        		this.grd_popupPls.setRealColSize("body",7,0);
        	}
        };

        this.ds_srhCndClum_onvaluechanged = function(obj,e)
        {
        	if(this.div.form.cbo_qryTy.value=="QR" && e.columnid == "FIXING_CLUM_YN"){
        		if(e.newvalue=="N"){
        			obj.setColumn(e.row,"REPLACE_STR","");
        		}
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.Static00.addEventHandler("onclick",this.Static10_onclick,this);
            this.btn_add00.addEventHandler("onclick",this.btn_add00_onclick,this);
            this.btn_del00.addEventHandler("onclick",this.btn_del00_onclick,this);
            this.grd_popupPls.addEventHandler("oncellclick",this.grd_EapInvoicesAll_oncellclick,this);
            this.grd_popupPls.addEventHandler("onexpandup",this.grd_popupPls_onexpandup,this);
            this.Static02.addEventHandler("onclick",this.Static10_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static10_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.grd_srhCndClum.addEventHandler("onexpandup",this.grd_srhCndClum_onexpandup,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.grd_popup.addEventHandler("onselectchanged",this.grd_popup_onselectchanged,this);
            this.btn_add01.addEventHandler("onclick",this.btn_add01_onclick,this);
            this.div.form.cbo_qryTy.addEventHandler("onitemchanged",this.div_cbo_qryTy_onitemchanged,this);
            this.div.form.btn_pop.addEventHandler("onclick",this.div_btn_pop_onclick,this);
            this.btn_del01.addEventHandler("onclick",this.btn_del01_onclick,this);
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear_onclick,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_popupPls.addEventHandler("onvaluechanged",this.ds_popupPls_onvaluechanged,this);
            this.ds_srhCndClum.addEventHandler("onvaluechanged",this.ds_srhCndClum_onvaluechanged,this);
        };
        this.loadIncludeScript("CMSA00100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
