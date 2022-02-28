(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_top");
            this.set_titletext("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,76);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Popup", this);
            obj._setContents("<ColumnInfo><Column id=\"MESSAGEID\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_topMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menuTemp", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_reversesubsum("false");
            obj.set_enableevent("true");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TOP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_OPTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ARGS\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_EXTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_RM\" type=\"STRING\" size=\"256\"/><Column id=\"ATMC_LOAD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"QRY_AUTH_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">9000</Col><Col id=\"PAGE_ID\"/><Col id=\"MENU_NM\">개발가이드 참조</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">9000</Col><Col id=\"MENU_SEQ\">51</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400010</Col><Col id=\"PAGE_ID\"/><Col id=\"MENU_NM\">GUIDE</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">9000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400012</Col><Col id=\"PAGE_ID\">Guide_01</Col><Col id=\"MENU_NM\">Guide_01</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_01.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400013</Col><Col id=\"PAGE_ID\">Guide_02</Col><Col id=\"MENU_NM\">Guide_02</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_02.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400014</Col><Col id=\"PAGE_ID\">Guide_03</Col><Col id=\"MENU_NM\">Guide_03</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_03.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400015</Col><Col id=\"PAGE_ID\">Guide_04</Col><Col id=\"MENU_NM\">Guide_04</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_04.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400016</Col><Col id=\"PAGE_ID\">Guide_05</Col><Col id=\"MENU_NM\">Guide_05</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_05.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400017</Col><Col id=\"PAGE_ID\">Guide_06</Col><Col id=\"MENU_NM\">Guide_06</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_06.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400020</Col><Col id=\"PAGE_ID\"/><Col id=\"MENU_NM\">TEMPLATE</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">4000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400021</Col><Col id=\"PAGE_ID\">TemplateGuide_001</Col><Col id=\"MENU_NM\">조회_그리드</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400022</Col><Col id=\"PAGE_ID\">TemplateGuide_002</Col><Col id=\"MENU_NM\">조회_게시판형</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400023</Col><Col id=\"PAGE_ID\">TemplateGuide_003</Col><Col id=\"MENU_NM\">조회_분리형</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400024</Col><Col id=\"PAGE_ID\">TemplateGuide_004</Col><Col id=\"MENU_NM\">입력_일반형</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400025</Col><Col id=\"PAGE_ID\">TemplateGuide_005</Col><Col id=\"MENU_NM\">입력_탭형</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_005.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400026</Col><Col id=\"PAGE_ID\">TemplateGuide_006</Col><Col id=\"MENU_NM\">그래프</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_006.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400027</Col><Col id=\"PAGE_ID\">TemplateGuide_007</Col><Col id=\"MENU_NM\">메세지</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_007.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400028</Col><Col id=\"PAGE_ID\">TemplateGuide_008</Col><Col id=\"MENU_NM\">통계_그래프</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_008.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"PAGE_ID\">TemplateGuide_009</Col><Col id=\"MENU_ID\">400029</Col><Col id=\"_chk\"/><Col id=\"MENU_NM\">통계_표</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_009.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"PAGE_ID\">PopUp_001</Col><Col id=\"MENU_ID\">400031</Col><Col id=\"_chk\"/><Col id=\"MENU_NM\">조회(PopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUp_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"PAGE_ID\">PopUp_002</Col><Col id=\"MENU_ID\">400032</Col><Col id=\"_chk\"/><Col id=\"MENU_NM\">입력(PopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUp_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"PAGE_ID\">PopUp_003</Col><Col id=\"MENU_ID\">400033</Col><Col id=\"_chk\"/><Col id=\"MENU_NM\">도움말(PopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUp_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400034</Col><Col id=\"PAGE_ID\">PopUp_004</Col><Col id=\"MENU_NM\">메세지(PopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUp_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400035</Col><Col id=\"PAGE_ID\">PopUpMD_001</Col><Col id=\"MENU_NM\">조회(MDPopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUpMD_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400036</Col><Col id=\"PAGE_ID\">PopUpMD_002</Col><Col id=\"MENU_NM\">입력(MDPopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUpMD_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400037</Col><Col id=\"PAGE_ID\">PopUpMD_003</Col><Col id=\"MENU_NM\">도움말(MDPopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUpMD_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400038</Col><Col id=\"PAGE_ID\">PopUpMD_004</Col><Col id=\"MENU_NM\">메세지(MDPopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUpMD_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">400040</Col><Col id=\"PAGE_ID\"/><Col id=\"MENU_NM\">SAMPLE</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">4000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">400041</Col><Col id=\"PAGE_ID\">Sample01</Col><Col id=\"MENU_NM\">Sample01-팝업오픈</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample01.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"MENU_RM\">AA=1&amp;BB=12</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400042</Col><Col id=\"PAGE_ID\">Sample02</Col><Col id=\"MENU_NM\">Sample02-GraphicExample</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::chart_BarHorizontalExample.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400043</Col><Col id=\"PAGE_ID\">Sample03</Col><Col id=\"MENU_NM\">Sample03-엑셀 import/export</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample03.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400044</Col><Col id=\"PAGE_ID\">Sample04</Col><Col id=\"MENU_NM\">Sample04-Grid 필수값체크</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample04.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400045</Col><Col id=\"PAGE_ID\">Sample05</Col><Col id=\"MENU_NM\">Sample05-Transaction(paging)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample05.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"_chk\">[Undefined]</Col><Col id=\"MENU_ID\">400049</Col><Col id=\"PAGE_ID\">Sample06</Col><Col id=\"MENU_NM\">Sample06-Div접기/펴기</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample06.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400050</Col><Col id=\"_chk\">[Undefined]</Col><Col id=\"PAGE_ID\">Sample07</Col><Col id=\"MENU_NM\">Sample07-Search 펼침/숨김</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample07.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400055</Col><Col id=\"PAGE_ID\">Sample08</Col><Col id=\"MENU_NM\">Sample08-Validation체크(css가이드)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample08.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"MENU_RM\">[Undefined]</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400056</Col><Col id=\"PAGE_ID\">Sample09</Col><Col id=\"MENU_NM\">Sample09-마스킹처리</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample09.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"MENU_RM\">[Undefined]</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400046</Col><Col id=\"PAGE_ID\">Sample10</Col><Col id=\"MENU_NM\">Sample10-GridSort/전체선택</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample10.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400047</Col><Col id=\"PAGE_ID\">Sample11</Col><Col id=\"MENU_NM\">Sample11-파일업/다운로드</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample11.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400048</Col><Col id=\"PAGE_ID\">Sample13</Col><Col id=\"MENU_NM\">Sample13-RichTextEditor</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample13.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400119</Col><Col id=\"PAGE_ID\">Sample19</Col><Col id=\"MENU_NM\">Sample19-스캔 이미지마스킹</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample19.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"MENU_RM\">[Undefined]</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">400120</Col><Col id=\"PAGE_ID\">Sample20</Col><Col id=\"MENU_NM\">Sample20-월선택</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample20.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">400121</Col><Col id=\"PAGE_ID\">Sample21</Col><Col id=\"MENU_NM\">Sample21-화면호출</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample21.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">400122</Col><Col id=\"PAGE_ID\">Sample22</Col><Col id=\"MENU_NM\">Sample22-화면호출(상세화면)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample22.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400051</Col><Col id=\"PAGE_ID\">Sample31</Col><Col id=\"MENU_NM\">Sample31-mis-sample</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample31.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400140</Col><Col id=\"PAGE_ID\">Sample40</Col><Col id=\"MENU_NM\">Sample40-barhorizontal</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample40.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400141</Col><Col id=\"PAGE_ID\">Sample41</Col><Col id=\"MENU_NM\">Sample41-bubble</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample41.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400142</Col><Col id=\"PAGE_ID\">Sample42</Col><Col id=\"MENU_NM\">Sample42-donut</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample42.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400143</Col><Col id=\"PAGE_ID\">Sample43</Col><Col id=\"MENU_NM\">Sample43-linepoint</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample43.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400144</Col><Col id=\"PAGE_ID\">Sample44</Col><Col id=\"MENU_NM\">Sample44-multiaxis</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample44.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400145</Col><Col id=\"PAGE_ID\">Sample45</Col><Col id=\"MENU_NM\">Sample45-pie</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample45.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400146</Col><Col id=\"PAGE_ID\">Sample46</Col><Col id=\"MENU_NM\">Sample46-scatter</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample46.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400147</Col><Col id=\"PAGE_ID\">Sample47</Col><Col id=\"MENU_NM\">Sample47-stackbar</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample47.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400148</Col><Col id=\"PAGE_ID\">Sample48</Col><Col id=\"MENU_NM\">Sample48-symbol</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample48.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400149</Col><Col id=\"PAGE_ID\">Sample49</Col><Col id=\"MENU_NM\">Sample49-timeaxis</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample49.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"_chk\">[Undefined]</Col><Col id=\"MENU_ID\">400151</Col><Col id=\"PAGE_ID\">Sample90</Col><Col id=\"MENU_NM\">Sample90-OZ Report</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample90.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"MENU_RM\">[Undefined]</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400052</Col><Col id=\"PAGE_ID\">Sample97</Col><Col id=\"MENU_NM\">Sample97-공통함수</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample97.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400053</Col><Col id=\"PAGE_ID\">Sample98</Col><Col id=\"MENU_NM\">Sample98-RD호출(html5)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample98.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400054</Col><Col id=\"PAGE_ID\">Sample99</Col><Col id=\"MENU_NM\">Sample99-New Form</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample99.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_myMenuInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_myMenuTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"32\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_TOP\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"DEL_AUTH_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"32\"/><Column id=\"JOB_MENU_ID\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"UPD_AUTH_YN\" type=\"STRING\" size=\"32\"/><Column id=\"ORDR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"INS_AUTH_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_RM\" type=\"STRING\" size=\"32\"/><Column id=\"QRY_AUTH_YN\" type=\"STRING\" size=\"32\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"FAVORITES_MVMN_URL\" type=\"STRING\" size=\"100\"/><Column id=\"FAVORITES_ID\" type=\"STRING\" size=\"32\"/><Column id=\"JOB_SYS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ATMC_LOAD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_SEQ\">49</Col><Col id=\"MENU_NM\">즐겨찾기</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ID\">999999</Col><Col id=\"MENU_GRP\">999999</Col><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"gv_ssoUserId\" type=\"string\" size=\"32\"/><Column id=\"gv_userId\" type=\"STRING\" size=\"256\"/><Column id=\"gv_loginId\" type=\"STRING\" size=\"256\"/><Column id=\"gv_userAcnt\" type=\"STRING\" size=\"256\"/><Column id=\"gv_jikwiCd\" type=\"STRING\" size=\"256\"/><Column id=\"gv_jikwiNm\" type=\"STRING\" size=\"256\"/><Column id=\"gv_glpsCd\" type=\"STRING\" size=\"256\"/><Column id=\"gv_glpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"gv_cmpnPhnNo\" type=\"STRING\" size=\"256\"/><Column id=\"gv_mbphNo\" type=\"STRING\" size=\"256\"/><Column id=\"gv_userGubunCd\" type=\"STRING\" size=\"256\"/><Column id=\"gv_userGubunNm\" type=\"STRING\" size=\"256\"/><Column id=\"gv_jngCoursCd\" type=\"STRING\" size=\"256\"/><Column id=\"gv_jngCoursNm\" type=\"STRING\" size=\"256\"/><Column id=\"gv_userNm\" type=\"STRING\" size=\"256\"/><Column id=\"gv_emailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"gv_userJobList\" type=\"STRING\" size=\"256\"/><Column id=\"gv_jobGubunCds\" type=\"STRING\" size=\"256\"/><Column id=\"gv_jobGubunNms\" type=\"STRING\" size=\"256\"/><Column id=\"gv_ipAddr\" type=\"STRING\" size=\"256\"/><Column id=\"gv_loginBeginTm\" type=\"STRING\" size=\"256\"/><Column id=\"gv_authTotInfo\" type=\"STRING\" size=\"256\"/><Column id=\"gv_companyCd\" type=\"STRING\" size=\"256\"/><Column id=\"gv_companyNm\" type=\"STRING\" size=\"256\"/><Column id=\"gv_sessionGuId\" type=\"STRING\" size=\"256\"/><Column id=\"gv_authTokenId\" type=\"STRING\" size=\"256\"/><Column id=\"gv_ssoTokenId\" type=\"STRING\" size=\"256\"/><Column id=\"gv_job\" type=\"STRING\" size=\"256\"/><Column id=\"gv_userBlgCd\" type=\"STRING\" size=\"256\"/><Column id=\"gv_deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_URI\" type=\"STRING\" size=\"256\"/><Column id=\"gv_securityGroup\" type=\"STRING\" size=\"256\"/><Column id=\"gv_deptTelNo\" type=\"STRING\" size=\"256\"/><Column id=\"gv_ctiId\" type=\"STRING\" size=\"256\"/><Column id=\"gv_ctiExtension\" type=\"STRING\" size=\"256\"/><Column id=\"gv_deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"gv_ctiPwd\" type=\"STRING\" size=\"256\"/><Column id=\"gv_deptGroup\" type=\"STRING\" size=\"256\"/><Column id=\"gv_jobAuthIds\" type=\"STRING\" size=\"256\"/><Column id=\"gv_jobAuthNms\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"gv_ssoUserId\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_logout", this);
            obj._setContents("<ColumnInfo><Column id=\"result\" type=\"INT\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_language", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"flag\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"flag\">theme://images/img_TF_kr.png</Col><Col id=\"name\">한국어/KR</Col></Row><Row><Col id=\"flag\">theme://images/img_TF_en.png</Col><Col id=\"name\">영어/EN</Col></Row><Row><Col id=\"flag\">theme://images/img_TF_cn.png</Col><Col id=\"name\">중국어/CN</Col></Row><Row><Col id=\"flag\">theme://images/img_TF_vn.png</Col><Col id=\"name\">베트남어/VN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_factory", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">CCT</Col></Row><Row><Col id=\"name\">IFC</Col></Row><Row><Col id=\"name\">IFV</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","0","32",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","4","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TF_ci");
            this.addChild(obj.name, obj);

            obj = new Static("sta_welcome",null,"4","86","24","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("님 환영합니다");
            obj.set_cssclass("sta_TF_user");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","190","76","120","101",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_Popup");
            obj.set_captioncolumn("Column0");
            obj.set_idcolumn("Column2");
            obj.set_levelcolumn("Column1");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_topMenu","190","87","1060","34",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_top1","44","32","99","44",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("시스템관리");
            obj.set_cssclass("btn_TF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_top2","143","32","84","44",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("기준정보");
            obj.set_cssclass("btn_TF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_top3","227","32","84","44",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("생산관리");
            obj.set_cssclass("btn_TF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_top4","311","32","84","44",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("공정관리");
            obj.set_cssclass("btn_TF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_top5","395","32","84","44",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("품질관리");
            obj.set_cssclass("btn_TF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_top6","479","32","51","44",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("SPC");
            obj.set_cssclass("btn_TF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_top7","530","32","108","44",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Defect Map");
            obj.set_cssclass("btn_TF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_top8","638","32","84","44",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("외주관리");
            obj.set_cssclass("btn_TF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_top9","722","32","84","44",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("설비관리");
            obj.set_cssclass("btn_TF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_top10","806","32","99","44",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("치공구관리");
            obj.set_cssclass("btn_TF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_top11","905","32","84","44",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("자재관리");
            obj.set_cssclass("btn_TF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_top12","989","32","99","44",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("개발가이드");
            obj.set_cssclass("btn_TF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sitemap_open",null,"32","92","44","10",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("전체메뉴");
            obj.set_cssclass("btn_TF_sitemap_open");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","44","4","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("IFC");
            obj.set_cssclass("sta_TF_sysName");
            this.addChild(obj.name, obj);

            obj = new Button("btn_menuShow","0","32","44","44",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_TF_menuShow");
            this.addChild(obj.name, obj);

            obj = new Button("btn_top1_00","40","112","99","44",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("시스템관리");
            obj.set_cssclass("btn_TF_menu_S");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_menuShow00","0","72","44","44",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_TF_menuHide");
            this.addChild(obj.name, obj);

            obj = new Button("btn_next",null,"32","20","44","btn_sitemap_open:10",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_TF_next");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prev",null,"32","20","44","btn_next:5",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_TF_prev");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sitemap_close",null,"92","92","44","10",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("전체메뉴");
            obj.set_cssclass("btn_TF_sitemap_close");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_sitemap","0","568",null,"700","0",null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_TF_menu");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","32",null,"44","0",null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_Bg");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Static("Static02","10","4","24","24",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TF_ci");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Static("sta_welcome",null,"4","167","24","0",null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("2");
            obj.set_text("<b v=\"true\">인터플렉스</b><fc v=\"#999999\">님 환영합니다</fc>");
            obj.set_cssclass("sta_TF_user");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Button("btn_top1","44","32","99","44",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("3");
            obj.set_text("시스템관리");
            obj.set_cssclass("btn_TF_menu");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Button("btn_top2","143","32","84","44",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("4");
            obj.set_text("기준정보");
            obj.set_cssclass("btn_TF_menu");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Button("btn_top3","227","32","84","44",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("5");
            obj.set_text("생산관리");
            obj.set_cssclass("btn_TF_menu");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Button("btn_top4","311","32","84","44",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("6");
            obj.set_text("공정관리");
            obj.set_cssclass("btn_TF_menu");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Button("btn_top5","395","32","84","44",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("7");
            obj.set_text("품질관리");
            obj.set_cssclass("btn_TF_menu");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Button("btn_top6","479","32","51","44",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("8");
            obj.set_text("SPC");
            obj.set_cssclass("btn_TF_menu");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Button("btn_top7","530","32","108","44",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("9");
            obj.set_text("Defect Map");
            obj.set_cssclass("btn_TF_menu");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Button("btn_top8","638","32","84","44",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("10");
            obj.set_text("외주관리");
            obj.set_cssclass("btn_TF_menu");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Button("btn_top9","722","32","84","44",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("11");
            obj.set_text("설비관리");
            obj.set_cssclass("btn_TF_menu");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Button("btn_top10","806","32","99","44",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("12");
            obj.set_text("치공구관리");
            obj.set_cssclass("btn_TF_menu");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Button("btn_top11","905","32","84","44",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("13");
            obj.set_text("자재관리");
            obj.set_cssclass("btn_TF_menu");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Button("btn_top12","989","32","99","44",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("14");
            obj.set_text("개발가이드");
            obj.set_cssclass("btn_TF_menu");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Button("btn_sitemap_close",null,"32","92","44","10",null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("15");
            obj.set_text("전체메뉴");
            obj.set_cssclass("btn_TF_sitemap_close");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Static("sta_00","44","4","140","24",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("16");
            obj.set_text("IFC");
            obj.set_cssclass("sta_TF_sysName");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Button("btn_menuShow","0","32","44","44",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_TF_menuShow");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Button("btn_next",null,"32","20","44","112",null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_TF_next");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Button("btn_prev",null,"32","20","44","137",null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_TF_prev");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Static("sta_01","0","100",null,"35","0",null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("20");
            obj.set_text("전체메뉴");
            obj.set_cssclass("sta_sitemap_Name");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Static("Static16_01","614","76","50","30",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("21");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h30");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","614","127","50","15",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("22");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h15");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Div("div_00","30","142","1248","548",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("23");
            obj.set_url("guide::Guide_09.xfdl");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","0","87","30","80",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("24");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w\r\n30");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_01","40","127","599","15",null,null,null,null,null,null,this.pdiv_sitemap.form);
            obj.set_taborder("25");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.pdiv_sitemap.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00",null,"672","30","116","0",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w\r\n30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_language","112","1","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("한국어/kr");
            obj.set_cssclass("btn_TF_lang");
            obj.set_icon("url(\'theme://images/img_TF_kr.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btn_factory","243","1","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("CCT");
            obj.set_cssclass("btn_TF_factory");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_language","347","160","130","118",null,null,null,null,null,null,this);
            obj.set_text("pdiv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","0",null,null,"0","0",null,null,null,null,this.pdiv_language.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_TF_listbox");
            obj.set_binddataset("ds_language");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"93\"/></Columns><Rows><Row size=\"29\"/></Rows><Band id=\"body\"><Cell text=\"bind:flag\" cssclass=\"cell_img\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:name\" padding=\"0px\"/></Band></Format></Formats>");
            this.pdiv_language.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_factory","487","160","60","89",null,null,null,null,null,null,this);
            obj.set_text("pdiv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","0",null,null,"0","0",null,null,null,null,this.pdiv_factory.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_TF_listbox");
            obj.set_binddataset("ds_factory");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"136\"/></Columns><Rows><Row size=\"29\"/></Rows><Band id=\"body\"><Cell text=\"bind:name\"/></Band></Format></Formats>");
            this.pdiv_factory.addChild(obj.name, obj);

            obj = new Static("Static16_01","352","86","195","73",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("pdiv_language는 btn_language\r\npdiv_factory는 btn_factory\r\n의 top,left값과 동일하게 띄웁니다.");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","115","187","195","73",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("btn_language의 icon 이미지는 언어선택에 따라 버튼명과 아이콘경로를 변경해 줍니다.");
            obj.set_wordWrap("english");
            obj.set_padding("10px");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_subMenu","0","286","1278","260",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_TF_menu");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","30","10",null,null,"0","10",null,null,null,null,this.pdiv_subMenu.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("guide::Guide_10.xfdl");
            this.pdiv_subMenu.addChild(obj.name, obj);

            obj = new Button("btn_user",null,"4","95","24","sta_welcome:0",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("인터플렉스");
            obj.set_cssclass("btn_TF_user");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_user","1312","0","257","320",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Static("sta_icon","20","20","60","60",null,null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_userInfo_icon");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Static("company","96","28",null,"24","20",null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("4");
            obj.set_text(" built1");
            obj.set_cssclass("txt_13,sta_font_gray2");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Static("user","98","45",null,"24","20",null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("5");
            obj.set_text("빌트원");
            obj.set_cssclass("txt_15B");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Button("btn_password","20","95","98","24",null,null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("비밀번호 변경");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Button("btn_setting","121","95","114","24",null,null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("사용자 정보 수정");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Static("sta_00","20","133","146","24",null,null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("6");
            obj.set_text("이메일주소");
            obj.set_cssclass("txt_12,sta_font_gray2");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Static("sta_email","20","153","215","24",null,null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("7");
            obj.set_text("test@https://www.interflex.co.kr/");
            obj.set_cssclass("txt_13,sta");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Static("sta_loginTime","20","204","215","24",null,null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("8");
            obj.set_text("2021-01-05 오전 11:11:07");
            obj.set_cssclass("txt_13,sta");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Static("sta_01","20","184","215","24",null,null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("9");
            obj.set_text("로그인 시간");
            obj.set_cssclass("txt_12,sta_font_gray2");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Button("btn_logout","85","252","84","36",null,null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("로그아웃");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","0","45","20","122",null,null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("10");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w\r\n20");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00",null,"87","20","80","0",null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("11");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w\r\n20");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_01","20","0","70","20",null,null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("12");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_01_00","30","80","70","15",null,null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("13");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h15");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_01_00_00","30","119","70","20",null,null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("14");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_01_00_00_00","30","171","70","20",null,null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_01_00_00_00_00","60","222","70","30",null,null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("16");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h30");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_01_00_00_00_00_00","60",null,"70","30",null,"0",null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("17");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h30");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_01_00_01","40","151","70","10",null,null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("18");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h10");
            this.pdiv_user.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_02","80","30","20","40",null,null,null,null,null,null,this.pdiv_user.form);
            obj.set_taborder("19");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w\r\n20");
            this.pdiv_user.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,76,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","guide::Guide_09.xfdl");
            this._addPreloadList("fdl","guide::Guide_10.xfdl");
        };
        
        // User Script
        this.registerScript("frmTop.xfdl", function() {
        /***********************************************************************************
         * SYSTEM      : nexacro html5
         * BUSINESS    : Top Frame
         * FILE NAME   : topFrame.xfdl
         * PROGRAMMER  : JinSungHa
         * DATE        : 2017.09.30
         * DESCRIPTION : Top Frame
         *------------------------------------------------------------------
         * MODIFY DATE   PROGRAMMER			DESCRIPTION
         *------------------------------------------------------------------
         * 2017.09.30	JinSungHa		Init.
         *------------------------------------------------------------------
         ***********************************************************************************/


        /***********************************************************************************
         * Common Library
         ***********************************************************************************/
        // include "lib::comLib.xjs";


        /***********************************************************************************
         * Global/Local Variable
         ***********************************************************************************/
        this.nLeft = 0;
        this.nPad = 15;
        this.MENU_BTN_PREFIX = "btn_top";
        this.fv_nWindowWidth = this.gv_frameWidth;
        var userIdCookie = this.gf_getUserId() + "";
        this.fv_openMaxFrame = 10; //열리는 화면(프레임) 최대 갯수

        var fv_sId = "";
        var fv_sName = "";

        var xPos;
        var yPos;

        var fv_menuId;
        var fv_menuId2;
        var fv_menuName;
        var fv_menuObj;
        var fv_menuObj2;

        this.application = null;

        /***********************************************************************************
         * Form Event
         ***********************************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.application = nexacro.getApplication();
        	// this.gfn_setFrameChange("main");
        	// trace('topFrame onLoad start....!');
        	var sCommand = nexacro.getApplication().id;
        	if (!this.gfn_isNull(sCommand))
        	{
        		/* 사용자 정보 cookie 처리 - portal 에서 업무 접근시 cookie(gv_loginInfo) 셋팅 정보 사용 */
        		nexacro.getApplication().gds_userInfo.clearData();

        		//var sLoginInfo = this.gfn_getCookie("gv_loginInfo");
        		//this.fn_getLoginInfo(sLoginInfo);
        	}
        	//this.WebBrowser02.set_url(nexacro.getApplication().gv_host + "/html/serverIp.jsp");

        	//this.gfn_dbToday();
        };

        this.fn_init = function ()
        {
        	/* gds_menu기준 MENU_LEVEL이 0인것을 버튼구성 */
        	this.ds_list.clearData();
        	this.fn_setTopMenu();
        };

        /* 메인프레임명 및 시스템명 처리 */
        this.setMenuTitle = function ()
        {
        	var sAppId = nexacro.getApplication().id.toUpperCase();

        	var sAppName = "Interfelx MES시스템";
        	nexacro.getApplication().mainframe.set_titletext(sAppName);

        	if (nexacro.getApplication().gv_runMode != "prod")
        	{
        		sAppName = sAppName + " [" + nexacro.getApplication().gv_runMode.toUpperCase() + "]";
        	}

        	// this.btn_menu.set_text(sAppName);
        };

        // 로그인 정보  서비스 호출
        this.fn_getLoginInfo = function (sLoginInfo, paramEPS)
        {
        	var sAppId = nexacro.getApplication().id.toUpperCase();

        	var sSvcID = "loginInfo";
        	var sController = "/penc00010/selectGlovelValueInfo.do";
        	var sInDatasets = "";
        	var sOutDatasets = "gds_userInfo=gds_userInfo gds_message=gds_message ds_jobIcon=ds_jobIcon ds_myMenuInfo=ds_myMenuInfo ds_topMenu=ds_topMenu gds_cmdDictionary=gds_cmdDictionary";
        	//var sOutDatasets = "gds_userInfo=gds_userInfo gds_message=gds_message ds_jobIcon=ds_jobIcon ds_myMenuInfo=ds_myMenuInfo gds_menu=gds_menu";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("gv_loginInfo", sLoginInfo);

        	var sCallbackFunc = "fn_callBack";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, sCallbackFunc);
        };

        // 메뉴 서비스 호출
        this.fn_getMenu = function (rn)
        {
        	var menuId =  this.ds_topMenu.lookup("RN",rn,"MENU_ID");

        	var sSvcID = "selectCmMenu";
        	var sController = "/penc00010/selectMenuAuthTree.do";
        	var sInDatasets = "";
        	var sOutDatasets = "gdsLeftMenu=gdsLeftMenu";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmMenu");
        	sArgs += this.gfn_setParam("JOB_SYS_CD", nexacro.getApplication().id);
        	sArgs += this.gfn_setParam("USER_ID", this.gf_getUserId());
        	sArgs += this.gfn_setParam("JOB_MENU_ID", menuId);

        	var sCallbackFunc = "afn_Callback";
        	this.application.transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, sCallbackFunc);
        };

        this.fn_GetMessage = function ()
        {
        	var sSvcID = "selectCmMsg";
        	var sController = "/cmmm01100/selectCmMsg.do";
        	var sInDatasets = "";
        	var sOutDatasets = "gds_message=ds_output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmMsg");
        	var sCallbackFunc = "fn_Callback";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, sCallbackFunc);
        };

        /* 즐겨찾기 메뉴서비스 */
        this.fn_getMyMenu = function ()
        {
        	var sSvcID = "selectMyMenu";
        	var sController = "/penc00010/selectFavorites.do";
        	var sOutDatasets = "ds_myMenuInfo=ds_myMenuInfo";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("USER_ID", this.gf_getUserId());
        	var sCallbackFunc = "fn_callBack";

        	this.gfn_transaction(sSvcID, sController, "", sOutDatasets, sArgs, sCallbackFunc);
        };

        /* 메뉴로그쌓기 */
        this.fn_insertJobMenuLogs = function (menuId)
        {
        	var sSvcID = "insertJobMenuLogs";
        	var sController = "/cmlm01100/insertJobMenuLogs.do";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("JOB_SYS_CD", nexacro.getApplication().id.toUpperCase());
        	sArgs += this.gfn_setParam("JOB_MENU_ID", menuId);
        	sArgs += this.gfn_setParam("LGN_LOG_ID", this.gf_getLoginId()); //로그인 이력ID
        	sArgs += this.gfn_setParam("MENU_NM", nexacro.getApplication().gds_menu.lookup("MENU_ID", menuId, "MENU_NM")); //메뉴명
        	sArgs += this.gfn_setParam("MENU_COURS_NAME", this.fn_createMenuPath(menuId)); //메뉴 경로명
        	var sCallbackFunc = "fn_callBack";

        	this.gfn_transaction(sSvcID, sController, "", "", sArgs, sCallbackFunc);
        };

        /* 메뉴로그쌓기 */
        this.fn_insertJobMenuLogsAutoLoading = function (menuId)
        {
        	var sSvcID = "insertJobMenuLogs" + Math.round(Math.random() * 10000);
        	var sController = "/cmlm01100/insertJobMenuLogs.do";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("JOB_SYS_CD", nexacro.getApplication().id.toUpperCase());
        	sArgs += this.gfn_setParam("JOB_MENU_ID", menuId);
        	sArgs += this.gfn_setParam("LGN_LOG_ID", this.gf_getLoginId()); //로그인 이력ID
        	sArgs += this.gfn_setParam("MENU_NM", nexacro.getApplication().gds_menu.lookup("MENU_ID", menuId, "MENU_NM")); //메뉴명
        	sArgs += this.gfn_setParam("MENU_COURS_NAME", this.fn_createMenuPath(menuId)); //메뉴 경로명
        	var sCallbackFunc = "fn_callBack";

        	this.gfn_transaction(sSvcID, sController, "", "", sArgs, sCallbackFunc);
        };
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.fn_callBack = function (strServiceId, strErrorCode, strErrorMsg)
        {
        	if (strErrorCode < 0)
        	{
        		// return this.gfn_alert(strErrorMsg, "error");
        		var sErrMsg = "";
        		sErrMsg = "★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★\n";
        		sErrMsg += "service ID ====> " + strServiceId + "\n";
        		sErrMsg += strErrorMsg + "\n";
        		sErrMsg += "★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★";
        		// trace(sErrMsg, "error");
        	}

        	switch (strServiceId)
        	{
        		case "loginInfo":
        			// 사용자 정보 서비스 호출 후처리
        			if (strErrorCode != 0)
        			{
        				this.gfn_sessionCheck(strErrorCode, strErrorMsg);
        				return;
        			}
        			this.sta_welcome.set_text(this.gf_getUserNm() + "님 환영합니다");
        			this.sta_welcome.set_tooltiptext(this.gf_getLoginBeginTm());
        			//this.Pdiv_menuList.set_url("common::com_jobIcon.xfdl");
        			this.fn_getMenu(1);
        			this.fn_setTopMenu();

        			break;
        		case "selectCmMenu":
        			// 메뉴 서비스 호출 이후 처리
        			this.fn_createMenu();
        			this.fn_createMyMenu(); //즐겨찾기 데이터셋 생성
        		case "logout":
        			// this.gfn_setFrameChange("login");
        			break;
        		case "insertJobMenuLogs":
        			break;
        		case "selectMyMenu":
        			this.fn_createMyMenu(); //즐겨찾기 데이터셋 생성
        			break;
        		case "selectLogoutCd":
        			var logoutCD = this.ds_logout.getColumn(0, "result");
        			this.gfn_sessionCheck(logoutCD); //세션처리 호출
        			break;
        		case "checkSession":
        			break;
        		default:
        			break;
        	}
        };

        this.fn_createMenu = function ()
        {

        	nexacro.getApplication().gds_menu.set_enableevent(false);
        	var sAppId = nexacro.getApplication().id.toUpperCase();
        	var rastRow = nexacro.getApplication().gds_menu.getRowCount();
        	if (nexacro.getApplication().gv_runMode == "local")
        	{
        		nexacro.getApplication().gds_menu.appendData(this.ds_menuTemp, true);
        	}

        	nexacro.getApplication().gds_menu.insertRow(0);
        	nexacro.getApplication().gds_menu.copyRow(0, this.ds_myMenuTemp, 0);

        	nexacro.getApplication().gds_menu.set_enableevent(true);
        	nexacro.getApplication().LeftFrame.set_formurl("frame::frmLeft.xfdl");
        	nexacro.getApplication().MdiFrame.set_formurl("frame::frmMdi.xfdl");
        	nexacro.getApplication().BottomFrame.set_formurl("frame::frmBottom.xfdl");
        	/*
        	gv_appLeftFrame.set_formurl("frame::leftFrame.xfdl");
        	gv_appWorkTopFrame.set_formurl("frame::workTopFrame.xfdl");
        	//gv_appLoginFrame.set_formurl("frame::login.xfdl"); //정리대상...
        	gv_appBottomFrame.set_formurl("frame::bottomFrame.xfdl");
        	*/
        	this.fn_init();
        };


        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // 상위메뉴 필터 및 레벨 메뉴 버튼 삭제 후 메뉴 버튼 생성
        this.fn_setTopMenu = function ()
        {
        	// top 메뉴 영역 초기화 - 이전 버튼 삭제처리
        	if (this.div_topMenu.form.components.length > 0)
        	{
        		var btnObj;
        		while (this.div_topMenu.form.components.length > 0)
        		{
        			btnObj = this.div_topMenu.form.components[0];
        			this.div_topMenu.form.removeChild(btnObj.id);
        			btnObj.destroy();
        			btnObj = null;
        		}
        	}
        	// top 메뉴 영역 메뉴버튼 추가
        	for(var i=0; i<11; i++)
        	{
        		var strID = this.ds_topMenu.getColumn(i, "MENU_ID");
        		var rn = this.ds_topMenu.getColumn(i, "RN");
        		var strName = this.ds_topMenu.getColumn(i, "MENU_NM");
        		if(!this.gfn_isNull(strName)){
        			eval("this.btn_top"+rn+".set_text('"+strName+"')");
        		}else{
        			var j = i + 1;
        			if(nexacro.getApplication().gv_runMode=="local" && j==12){
        				trace("this.btn_top"+ j +".set_visible(false)");
        				eval("this.btn_top"+ j +".set_visible(false)");
        			}
        		}

        		/*
        		var bBar = (i == this.ds_topMenu.rowcount - 1) ? false : true;
        		if (i == 0)
        		{
        			fv_sId = strID;
        			fv_sName = strName;
        		}
        		this.fn_createTopMenu(strID, strName, i, bBar, rn);
        		*/
        	}

        };

        // 상위 메뉴를 생성한다.
        this.fn_createTopMenu = function (strID, strName, index, bBar, rn)
        {

        	// trace("application.mainframe.width -->"+ application.mainframe.width);

        	// 페이지 버튼 생성
        	// bold 11 Dotum
        	var preIndex = 0;
        	var nLeft = 0;
        	var nRight = 0;
        	var preStrId = "";
        	var preObject;
        	var objBtn = new Button();
        	objBtn.init(this.MENU_BTN_PREFIX + rn, "absolute", 20, 0, 0, 45);

        	this.div_topMenu.form.addChild(objBtn.name, objBtn);

        	objBtn.set_text(strName);
        	objBtn.menuid = strID;
        	trace("objBtn.name..."+objBtn.name);
        	trace("objBtn.menuid..."+objBtn.menuid);
        	objBtn.setEventHandler("onclick", this.btn_top_menu_onclick, this);

        	objBtn.show();
        	objBtn.set_visible(true);
        	if (index > 0)
        	{
        		preIndex = index - 1;
        		preStrId = this.ds_topMenu.getColumn(rn, "MENU_ID");
        		//preObject = this.div_topMenu.form.components[this.MENU_BTN_PREFIX + "_sta_" + preStrId];
        		//trace("preObject..."+preObject);
        		//nLeft = preObject.getOffsetRight() + 9; //(2017.04.20 20->9px 변경)
        	}
        	else
        	{
        		nLeft = 10;
        	}

        	//var objFont = this.gfn_getObjFont(objBtn, 11, "Dotum");
        	//var objTextSize = this.gfn_getTextSize(strName, objFont);
        	// alert("objTextSize  -->" + objTextSize);
        	objBtn.setOffsetLeft(nLeft);

        	// objBtn.setOffsetRight(nLeft+objTextSize[0]+7); //(2017.04.20 15->7px 변경)

        	// 2016.03.14 getTextSize 로 변경
        	//objBtn.setOffsetRight(nLeft + nexacro.toNumber(objTextSize) + 7); //(2017.04.20 15->7px 변경)
        	objBtn.setOffsetRight(nLeft + 11 + 7);

        	objBtn.set_visible(true);
        	objBtn.set_cssclass("btn_top_menu");

        	// 화면사이즈에 따른 우측 ...버튼처리
        	// 화면에 보이지 않는 버튼만 목록으로 보이도록 처리한다.
        	var nWidth = nexacro.toNumber(objBtn.left) + nexacro.toNumber(objBtn.width) + nexacro.toNumber(this.div_topMenu.left) + nexacro.toNumber(this.div_topMenu.right);
        	this._n_top_menu_btn_width = nWidth;
        	/*
        	if (nWidth > nexacro.getApplication().mainframe.width)
        	{
        		// trace(objBtn.text+" , "+(nexacro.toNumber(objBtn.left) + nexacro.toNumber(objBtn.width) + nexacro.toNumber(this.div_topMenu.left)+nexacro.toNumber(this.div_topMenu.right)) +" , "+application.mainframe.width)

        		var nRow = this.ds_list.addRow();
        		this.ds_list.setColumn(nRow, "MENU_ID", strID);
        		this.ds_list.setColumn(nRow, "MENU_NM", objBtn.text);
        	}
        	*/
        	// 버튼옆 | 표시처리
        	if (bBar)
        	{
        		// alert("bBar "+bBar);
        		var objStc = new Static();

        		objStc.init(this.MENU_BTN_PREFIX + "_sta_" + strID, "absolute", (objBtn.getOffsetRight()) + 9, 13, 1, 13); //(2017.04.20 20->9px 변경)
        		this.div_topMenu.form.addChild(objStc.name, objStc);

        		//objStc.style.set_background("#cfcfcfff");
        		objStc.show();
        	}
        };

        /* 즐겨찾기 데이터셋 생성 */
        this.fn_createMyMenu = function ()
        {
        	var nRowCount = this.ds_myMenuInfo.getRowCount();
        	var jobSign = "noname";
        	var i;
        	var getColIdx = 0;
        	var setColIdx = 0;

        	this.ds_myMenuTemp.clearData();
        	this.ds_myMenuTemp.addRow();
        	this.ds_myMenuTemp.setColumn(0, "MENU_NM", "즐겨찾기");
        	this.ds_myMenuTemp.setColumn(0, "MENU_SEQ", "49");
        	this.ds_myMenuTemp.setColumn(0, "USE_YN", "Y");
        	this.ds_myMenuTemp.setColumn(0, "MENU_ID", "999999");
        	this.ds_myMenuTemp.setColumn(0, "MENU_GRP", "999999");
        	this.ds_myMenuTemp.setColumn(0, "MENU_LEVEL", "0");
        	this.ds_myMenuTemp.setColumn(0, "MENU_LEVEL", "0");
        	this.ds_myMenuTemp.setColumn(0, "ATMC_LOAD_YN", "");
        	// trace("ds_myMenuInfo-->"+this.ds_myMenuInfo.saveXML());
        	// trace("ds_myMenuTemp-->"+this.ds_myMenuTemp.saveXML());

        	this.ds_myMenuTemp.set_enableevent(false);

        	for (i = 0; i < nRowCount; i++)
        	{
        		var getCol1 = this.ds_myMenuInfo.getColumn(getColIdx, "ORDR");
        		var getCol2 = this.ds_myMenuInfo.getColumn(getColIdx, "FAVORITES_MVMN_URL");
        		var getCol3 = this.ds_myMenuInfo.getColumn(getColIdx, "FAVORITES_PAGE_URL");
        		var getCol4 = this.ds_myMenuInfo.getColumn(getColIdx, "FAVORITES_ID");
        		var getCol5 = this.ds_myMenuInfo.getColumn(getColIdx, "FAVORITES_MENU_ID");
        		var getCol6 = this.ds_myMenuInfo.getColumn(getColIdx, "JOB_SYS_NM");
        		var getCol7 = this.ds_myMenuInfo.getColumn(getColIdx, "JOB_SYS_CD");
        		var getCol8 = this.ds_myMenuInfo.getColumn(getColIdx, "FAVORITES_MENU_NM");
        		var getCol9 = this.ds_myMenuInfo.getColumn(getColIdx, "ATMC_LOAD_YN");
        		var getCo20 = this.ds_myMenuInfo.getColumn(getColIdx, "MENU_LEVEL");
        		if (setColIdx == 0)
        		{
        			getCol9 = "";
        		}
        		if (jobSign != getCol6)
        		{
        			this.ds_myMenuTemp.addRow();
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "MENU_NM", getCol6);
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "MENU_SEQ", "49");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "PAGE_URL", "");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "USE_YN", "Y");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "MENU_TOP", "");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "MENU_AUTH", "0000");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "MENU_ID", "999999");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "DEL_AUTH_YN", "");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "MENU_GRP", "999999");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "MENU_LEVEL", "1");
        			// this.ds_myMenuTemp.setColumn(setColIdx+1, "MENU_LEVEL", getCo20);
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "JOB_MENU_ID", "999999");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "UPD_AUTH_YN", "");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "ORDR", "49");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "INS_AUTH_YN", "");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "MENU_RM", "");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "QRY_AUTH_YN", "");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "JOB_SYS_CD", getCol7);
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "FAVORITES_MVMN_URL", "");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "FAVORITES_ID", "");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "JOB_SYS_NM", getCol6);
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "ATMC_LOAD_YN", getCol9);
        			jobSign = getCol6;
        			i = i - 1;
        			setColIdx = setColIdx + 1;
        		}
        		else
        		{
        			this.ds_myMenuTemp.addRow();
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "MENU_NM", getCol8);
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "MENU_SEQ", getCol1);
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "PAGE_URL", getCol3);
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "USE_YN", "Y");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "MENU_TOP", "");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "MENU_AUTH", "0000");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "MENU_ID", getCol5);
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "DEL_AUTH_YN", "");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "MENU_GRP", "999999");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "MENU_LEVEL", "2");
        			// this.ds_myMenuTemp.setColumn(setColIdx+1, "MENU_LEVEL", getCo20);
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "JOB_MENU_ID", getCol5);
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "UPD_AUTH_YN", "");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "ORDR", getCol1);
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "INS_AUTH_YN", "");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "MENU_RM", "");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "QRY_AUTH_YN", "");
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "JOB_SYS_CD", getCol7);
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "FAVORITES_MVMN_URL", getCol2);
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "FAVORITES_ID", getCol4);
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "JOB_SYS_NM", getCol6);
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "ATMC_LOAD_YN", getCol9);
        			getColIdx = getColIdx + 1;
        			setColIdx = setColIdx + 1;
        		}
        		// trace("ds_myMenuTemp"+setColIdx+"-->"+this.ds_myMenuTemp.saveCSV());
        	}
        	// trace(this.ds_myMenuTemp.saveXML());
        	this.ds_myMenuTemp.set_enableevent(false);

        	var myMenuTemp = this.ds_myMenuTemp.saveXML();

        	nexacro.getApplication().gds_myMenu.clear();
        	nexacro.getApplication().gds_myMenu.loadXML(myMenuTemp);
        	// LeftFrame load완료 체크
        	if (nexacro.getApplication().bLeftLoad)
        	{
        		gv_appLeftFrame.form.fn_myMenuInit();
        	}
        	else
        	{
        		// trace("bonsaYn-->"+this.gf_getBonsaYn());
        		this.setTimer(111, 100);
        		if (this.gf_getUserBlgCd() != "CALL")
        		{
        			this.setTimer(200, 30000);
        		}

        		var jobAuthNms = this.gf_getJobAuthNms();
        		if (jobAuthNms.indexOf("콜센터관리") < 0 && jobAuthNms.indexOf("상담사") < 0 && jobAuthNms.indexOf("고객센터상담사") < 0)
        		{
        			// 11콜센터관리,12상담사,36고객센터상담사 가 아닐경우 체크
        			trace("nexacro timeout 실행::" + this.gf_getJobAuthNms());
        			this.setTimer(300, 1000 * 60 * 120); //120분 후 세션만료 체크
        		}
        	}
        };

        this.topFrame_ontimer = function (obj, e)
        {
        	if (e.timerid == 111)
        	{
        		// LeftFrame load완료 체크
        		if (nexacro.getApplication().bLeftLoad)
        		{
        			this.killTimer(111);
        			// trace("LeftFrame이 완료되어 마이메뉴를 초기화합니다.");
        			gv_appLeftFrame.form.fn_myMenuInit();
        		}
        	}
        	if (e.timerid == 200)
        	{
        		this.killTimer(200);
        		this.setTimer(200, 1000 * 60 * 30);

        		var sSvcID = "selectCounselNotiYn";
        		var sController = "/drcc01000/selectCounselNotiYn.do";
        		var sInDatasets = "";
        		var sOutDatasets = "ds_cNotiYn=output";
        		var sArgs = "";
        		sArgs += this.gfn_setParam("DEPT_CD", this.gf_getDeptCd());
        		var sCallbackFunc = "fn_callBack";

        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, sCallbackFunc, false, false, "");
        	}
        	if (e.timerid == 300)
        	{
        		var currDateTime = new Date();

        		// trace("ct_lastTransTime-->"+ct_lastTransTime);
        		// trace("current Time-->"+ currDateTime);
        		// trace("Elapsed Time-->"+ (currDateTime - ct_lastTransTime) );

        		if (currDateTime - ct_lastTransTime > 1000 * 60 * 120)
        		{
        			// 120분 경과시 빌링화면 close
        			if (this.gf_getBonsaYn() == "Y")
        			{
        				alert("장시간 사용을 하지 않으셨습니다. \n화면을 닫습니다!!");
        				nexacro.getApplication().afn_logout();
        			}
        			else
        			{
        				alert("장시간 사용을 하지 않으셨습니다. \n화면을 닫습니다!!");
        				// alert("장시간 사용을 하지 않으셨습니다. \n다시 로그인 하여 주시기 바랍니다!!");
        				// this.fn_callLogout();
        				nexacro.getApplication().afn_logout();
        			}
        		}
        		else if (currDateTime - ct_lastTransTime > 1000 * 60 * 110)
        		{
        			// 50분 경과시 timer 5분간격으로 조정
        			this.killTimer(300);
        			this.setTimer(300, 1000 * 60 * 5);
        		}
        		else
        		{
        			// 그외 timer 10분간격으로 조정
        			this.killTimer(300);
        			this.setTimer(300, 1000 * 60 * 10);
        		}

        		/*
        		 var sSvcID        	= "checkSession";
        		 var sController   	= "/cmsa01320/checkSession.do";
        		 var sInDatasets   	= "";
        		 var sOutDatasets  	= "";
        		 var sArgs = "";
        		 var sCallbackFunc = "fn_callBack";

        		 this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, sCallbackFunc, false, false, "");
        		 */
        	}
        };

        /* 메뉴 경로명 생성 */
        this.fn_createMenuPath = function (menuId)
        {
        	var menuName = new Array();
        	var arrIdx = 0;
        	var currentRow = nexacro.getApplication().gds_menu.findRow("MENU_ID", menuId);
        	var currentLvl = nexacro.getApplication().gds_menu.lookup("MENU_ID", menuId, "MENU_LEVEL");
        	var fullPath = "";

        	for (var i = currentRow; i > -1; i--)
        	{
        		var menuLvl = nexacro.getApplication().gds_menu.getColumn(i, "MENU_LEVEL");

        		if (menuLvl == currentLvl)
        		{
        			menuName[arrIdx] = nexacro.getApplication().gds_menu.getColumn(i, "MENU_NM");
        			arrIdx = arrIdx + 1;
        			currentLvl = currentLvl - 1;
        		}
        		if (menuLvl == 0)
        		{
        			break;
        		}
        	}

        	for (var j = (menuName.length - 1); j > -1; j--)
        	{
        		fullPath = fullPath + menuName[j];
        		if (j != 0)
        		{
        			fullPath = fullPath + " > ";
        		}
        	}

        	return fullPath;
        };



        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        this.btn_menu_onclick = function (obj, e)
        {
        	/*
        	 var nX = system.screenToClientX(this, system.clientToScreenX(obj, 0)) ;
        	 var nY = system.screenToClientY(this, system.clientToScreenY(obj, 0))+ parseInt(obj.getOffsetHeight());
        	 this.Pdiv_menuList.trackPopup(nX, nY);
        	 */
        };

        this.btn_list_onclick = function (obj, e)
        {
        	var nHeight = 34 * (this.ds_menu.rowcount);

        	this.Pdiv_list.form.grd_list.set_height(nHeight);
        	this.Pdiv_list.set_height(nHeight + 19);

        	var nX = system.screenToClientX(this, system.clientToScreenX(obj, 0) + 40);
        	var nY = system.screenToClientY(this, system.clientToScreenY(obj, 0)) + parseInt(obj.getOffsetHeight());

        	// var nWidth = $(window).width();
        	// trace("this.width="+this.width);
        	var nWidth = this.width;

        	nX = nWidth - this.Pdiv_list.width;

        	this.Pdiv_list.trackPopup(nX, nY);
        };

        this.Pdiv_list_grd_list_oncellclick = function (obj, e)
        {
        	var sMenuId = this.ds_list.getColumn(e.row, "MENU_ID");
        	var sMenuName = this.ds_list.getColumn(e.row, "MENU_NM");

        	this.gfn_setFrameChange("work");

        	gv_appLeftFrame.form.fn_changeMenu(sMenuId);
        	gv_appLeftFrame.form.div_left.sta_title.set_text(sMenuName);

        	this.Pdiv_list.closePopup();
        };

        // 상위 메뉴버튼 클릭 이벤트
        this.btn_top_menu_onclick = function (obj, e)
        {
        	nexacro.getApplication().mainframe.VFrameSet.HFrameSet0.LeftFrame.form.fn_leftShowHide2("show");

        	this.gfn_setFrameChange("work");
        	// alert(obj.menuid);
        	var sMenuId = "";
        	try
        	{
        		var sMenuId = obj.menuid;
        	}
        	catch (e)
        	{
        		sMenuId = "1000";
        	}
        	/* 즐겨찿기 메뉴 클릭시 */
        	if (sMenuId == "999999")
        	{
        		gv_appLeftFrame.form.div_left.grd_Menu.set_visible(false);
        		gv_appLeftFrame.form.div_left.grd_myMenu.set_visible(true);
        	}
        	else
        	{
        		gv_appLeftFrame.form.div_left.grd_Menu.set_visible(true);
        		gv_appLeftFrame.form.div_left.grd_myMenu.set_visible(false);
        		gv_appLeftFrame.form.fn_changeMenu(sMenuId);
        		gv_appLeftFrame.form.div_left.btn_fav.set_visible(true);

        		gv_appLeftFrame.form.div_left.grd_Menu.set_treeinitstatus("collapse,all");
        		gv_appLeftFrame.form.div_left.btn_treeUnfold.set_visible(true);
        		gv_appLeftFrame.form.div_left.btn_treeFold.set_visible(false);
        	}

        	// gv_appLeftFrame.form.fn_changeMenu(sMenuId);
        	gv_appLeftFrame.form.div_left.sta_title.set_text(obj.text);

        	for (var i = 0; i < this.div_topMenu.form.components.length; i++)
        	{
        		this.div_topMenu.form.components[i].set_cssclass("btn_TF_Menu");
        		// if((i%2) == 0)	this.div_topMenu.components[i].set_cssclass("btn_TF_Menu");
        	}
        	obj.set_cssclass("btn_TF_Menu_Active");

        	// 회사변경 버튼 visivle/invisible
        	/*
        	 application.mainframe.VFrameSet.TopFrame.form.btn_chgCompany.set_visible(false);
        	 application.gv_lrgeMenuId = sMenuId;
        	 if(application.gds_companyAltAuth.getCaseCount("LRGE_MENU_ID=="+sMenuId) > 0){
        	 trace("true...");
        	 application.mainframe.VFrameSet.TopFrame.form.btn_chgCompany.set_visible(true);
        	 }
        	 */
        };

        // 로그아웃 버튼에서 킬포커스가 될때 이벤트
        this.lastBtn_onkillfocus = function (obj, e)
        {
        	if (gv_viewType == "main")
        	{
        		gv_appMainFrame.form.frame_focus.setFocus();
        	}
        	else
        	{
        		gv_appTabFrame.form.frame_focus.setFocus();
        	}
        };

        // 로고버튼 클릭 이벤트
        this.sta_logo_onclick = function (obj, e)
        {
        	this.gfn_setFrameChange("main");
        };


        // Home
        this.div_topFrame_btn_home_onclick = function (obj, e)
        {
        	this.gfn_setFrameChange("main");
        };

        // LogOut
        this.btn_logout_onclick = function (obj, e)
        {
        	// this.gfn_setFrameChange("login");
        	if (this.gfn_confirm("로그아웃 하시겠습니까?"))
        	{
        		this.fn_callLogout(); //로그아웃 서비스 호출
        	}
        };
        /* 로그아웃 트랜젝션 */
        this.fn_callLogout = function ()
        {
        	var sSvcID = "selectLogoutCd";
        	var sController = "/smh/logout.scr";
        	var sOutDatasets = "ds_logout=ds_output";
        	var sCallbackFunc = "fn_callBack";
        	this.gfn_transaction(sSvcID, sController, "", sOutDatasets, "", sCallbackFunc);
        };

        this.stc_log_onclick = function (obj, e)
        {
        	this.ds_list.clearData();
        	this.fn_setTopMenu();
        };



        this.topFrame_onsize = function (obj, e)
        {
        /* jsh 20201231
        	this.fv_nWindowWidth = nexacro.getApplication().mainframe.width;

        	if (nexacro.Browser != "Runtime")
        	{
        		// browser 일 때 실행
        		// this.fv_nWindowWidth = $(window).width();
        		this.fv_nWindowWidth = e.cx;
        	}

        	this.btn_list.move((this.fv_nWindowWidth - 40), 1, 45, 45, null, null);

        	// 화면이 리사이즈 될 때 화면사이즈별 상단 버튼처리 this._n_top_menu_btn_width
        	if (this.fv_nWindowWidth < this._n_top_menu_btn_width)
        	{
        		this.btn_list.set_visible(true);
        		this.btn_list.bringToFront();
        	}
        	else
        	{
        		this.btn_list.set_visible(false);
        	}

        	// window 사이즈 변경시 popupDiv close
        	this.Pdiv_list.closePopup();
        */
        };


        // drag 가 발생될 때 처리할 루틴을 정의한 함수
        this.onDragStart = function (comp)
        {
        	// trace(comp.name + " Drag Start !!");
        	// comp.set_text("Drag Start !!");
        };

        // dragging 시 처리할 루틴을 정의한 함수
        this.onDragging = function (offsetX, offsetY, obj)
        {
        	var x = obj.getOffsetLeft() + offsetX,y = obj.getOffsetTop() + offsetY;

        	obj.move(x, y);
        };

        // drag 가 종료될 때 처리할 루틴을 정의한 함수
        this.onDragEnd = function (comp)
        {
        	// trace("Drag End !! :"+ comp.left+","+comp.top);
        	// trace("div!! :"+ this.div_topMenu.width+","+this.div_topMenu.height);
        };

        this.fn_checkDiv = function (comp)
        {
        	var nCnt = this.div_topMenu.form.components.length;

        	for (var i = 0; i < nCnt; i++)
        	{
        		var sObj = this.div_topMenu.form.components[i];

        		if (sObj.getPixelLeft() < comp.left && ((sObj.getPixelLeft() + sObj.getPixelWidth()) > comp.left)
        			 && sObj.getPixelTop() < comp.top && ((sObj.getPixelTop() + sObj.getPixelHeight()) > comp.top))
        		{

        		}
        	}
        };

        // more menu - 팝업디비젼 호출시 메뉴 처리
        this.Pdiv_list_onpopup = function (obj, e)
        {
        	this.ds_list.clearData();
        	var nWidth = 0,comp;

        	for (var i = 0; i < this.ds_menu.rowcount; i++)
        	{
        		// top menu 아이디 따기
        		var strID = this.ds_menu.getColumn(i, "MENU_ID");
        		var strName = this.ds_menu.getColumn(i, "MENU_NM");

        		// top menu 버튼
        		comp = this.div_topMenu.form.components[this.MENU_BTN_PREFIX + strID];

        		// top menu 버튼 생성 순서로 사이즈 체크
        		nWidth = nexacro.toNumber(comp.left) + nexacro.toNumber(comp.width) + nexacro.toNumber(this.div_topMenu.left) + nexacro.toNumber(this.div_topMenu.right);
        		this._n_top_menu_btn_width = nWidth;
        		if (nWidth > this.fv_nWindowWidth)
        		{
        			var nRow = this.ds_list.addRow();
        			this.ds_list.setColumn(nRow, "MENU_ID", strID);
        			this.ds_list.setColumn(nRow, "MENU_NM", comp.text);
        		}
        	}

        	// 생성된 리스트 만큼 그리드 높이 조절
        	var nHeight = obj.grd_list.rowcount * 34;
        	obj.grd_list.set_height(nHeight);
        };

        this.setCookie = function (name, value, expiredays)
        {
        	var todayDate = new Date();
        	todayDate.setDate(todayDate.getDate() + expiredays);
        	document.cookie = name + "=" + escape(value) + "; path=/;expires=" + todayDate.toGMTString() + ";"
        		// trace("쿠키설정됨");
        ;
        };

        this.checkCookie = function ()
        {
        	if (this.getCookie(userIdCookie) == "done")
        	{
        		// trace("여기들어옴11");
        		// this.gfn_popupClose("CLOSE");
        		// document.getElementById("topFrameEgl").style.display="none";
        	}
        	else
        	{
        		this.accountClosing_search()
        			// trace("여기들어옴22");
        			// document.getElementById("topFrameEgl").style.display="";
        ;
        	}
        };

        this.getCookie = function (name)
        {
        	var nameOfCookie = name + "=";
        	var x = 0;
        	while (x <= document.cookie.length)
        	{
        		var y = (x + nameOfCookie.length);
        		if (document.cookie.substring(x, y) == nameOfCookie)
        		{
        			if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
        			{
        				endOfCookie = document.cookie.length;
        			}
        			return unescape(document.cookie.substring(y, endOfCookie));
        		}
        		x = document.cookie.indexOf(" ", x) + 1;
        		if (x == 0)
        		{
        			break;
        		}
        	}
        	return "";
        };




        this.btn_top_onclick = function(obj,e)
        {
        	//this.PopupMenu00.trackPopupByComponent(this.Button00,0,41);

        	this.fn_getMenu(nexacro.toNumber(obj.name.substring(7)));

        	//this.fn_createMyMenu()

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.topFrame_onsize,this);
            this.addEventHandler("oninit",this.form_onload,this);
            this.btn_top1.addEventHandler("onclick",this.btn_top_onclick,this);
            this.btn_top2.addEventHandler("onclick",this.btn_top_onclick,this);
            this.btn_top3.addEventHandler("onclick",this.btn_top_onclick,this);
            this.btn_top4.addEventHandler("onclick",this.btn_top_onclick,this);
            this.btn_top5.addEventHandler("onclick",this.btn_top_onclick,this);
            this.btn_top6.addEventHandler("onclick",this.btn_top_onclick,this);
            this.btn_top7.addEventHandler("onclick",this.btn_top_onclick,this);
            this.btn_top8.addEventHandler("onclick",this.btn_top_onclick,this);
            this.btn_top9.addEventHandler("onclick",this.btn_top_onclick,this);
            this.btn_top10.addEventHandler("onclick",this.btn_top_onclick,this);
            this.btn_top11.addEventHandler("onclick",this.btn_top_onclick,this);
            this.btn_top12.addEventHandler("onclick",this.btn_top_onclick,this);
            this.btn_top1_00.addEventHandler("onclick",this.btn_top_onclick,this);
            this.btn_next.addEventHandler("onclick",this.btn_top_onclick,this);
            this.btn_prev.addEventHandler("onclick",this.btn_top_onclick,this);
            this.btn_sitemap_close.addEventHandler("onclick",this.btn_logout_onclick,this);
            this.pdiv_sitemap.form.btn_top1.addEventHandler("onclick",this.btn_top_onclick,this);
            this.pdiv_sitemap.form.btn_top2.addEventHandler("onclick",this.btn_top_onclick,this);
            this.pdiv_sitemap.form.btn_top3.addEventHandler("onclick",this.btn_top_onclick,this);
            this.pdiv_sitemap.form.btn_top4.addEventHandler("onclick",this.btn_top_onclick,this);
            this.pdiv_sitemap.form.btn_top5.addEventHandler("onclick",this.btn_top_onclick,this);
            this.pdiv_sitemap.form.btn_top6.addEventHandler("onclick",this.btn_top_onclick,this);
            this.pdiv_sitemap.form.btn_top7.addEventHandler("onclick",this.btn_top_onclick,this);
            this.pdiv_sitemap.form.btn_top8.addEventHandler("onclick",this.btn_top_onclick,this);
            this.pdiv_sitemap.form.btn_top9.addEventHandler("onclick",this.btn_top_onclick,this);
            this.pdiv_sitemap.form.btn_top10.addEventHandler("onclick",this.btn_top_onclick,this);
            this.pdiv_sitemap.form.btn_top11.addEventHandler("onclick",this.btn_top_onclick,this);
            this.pdiv_sitemap.form.btn_top12.addEventHandler("onclick",this.btn_top_onclick,this);
            this.pdiv_sitemap.form.btn_sitemap_close.addEventHandler("onclick",this.btn_logout_onclick,this);
            this.pdiv_sitemap.form.btn_next.addEventHandler("onclick",this.btn_top_onclick,this);
            this.pdiv_sitemap.form.btn_prev.addEventHandler("onclick",this.btn_top_onclick,this);
            this.ds_menuTemp.addEventHandler("onload",this.ds_Menu_onload,this);
        };
        this.loadIncludeScript("frmTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
