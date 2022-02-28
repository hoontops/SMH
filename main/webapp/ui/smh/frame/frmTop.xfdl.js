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
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,76);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
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
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TOP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_OPTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ARGS\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_EXTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_RM\" type=\"STRING\" size=\"256\"/><Column id=\"ATMC_LOAD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"QRY_AUTH_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">9000</Col><Col id=\"PAGE_ID\"/><Col id=\"MENU_NM\">개발가이드</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">9000</Col><Col id=\"MENU_SEQ\">51</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400010</Col><Col id=\"PAGE_ID\"/><Col id=\"MENU_NM\">GUIDE</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">9000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400012</Col><Col id=\"PAGE_ID\">Guide_01</Col><Col id=\"MENU_NM\">Guide_01</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_01.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400013</Col><Col id=\"PAGE_ID\">Guide_02</Col><Col id=\"MENU_NM\">Guide_02</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_02.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400014</Col><Col id=\"PAGE_ID\">Guide_03</Col><Col id=\"MENU_NM\">Guide_03</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_03.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400015</Col><Col id=\"PAGE_ID\">Guide_04</Col><Col id=\"MENU_NM\">Guide_04</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_04.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400016</Col><Col id=\"PAGE_ID\">Guide_05</Col><Col id=\"MENU_NM\">Guide_05</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_05.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400017</Col><Col id=\"PAGE_ID\">Guide_06</Col><Col id=\"MENU_NM\">Guide_06</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_06.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400020</Col><Col id=\"PAGE_ID\"/><Col id=\"MENU_NM\">TEMPLATE</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">4000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400021</Col><Col id=\"PAGE_ID\">template01</Col><Col id=\"MENU_NM\">조회_그리드(조회기간-금일,전일,금주..)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::template01.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400022</Col><Col id=\"PAGE_ID\">template02</Col><Col id=\"MENU_NM\">조회조건+(그리드T+디테일B)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::template02.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400023</Col><Col id=\"PAGE_ID\">template03</Col><Col id=\"MENU_NM\">조회조건+그리드T+그리드B</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::template03.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400024</Col><Col id=\"PAGE_ID\">template03_1</Col><Col id=\"MENU_NM\">조회조건+그리드L+그리드R</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::template03_1.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400025</Col><Col id=\"PAGE_ID\">template04</Col><Col id=\"MENU_NM\">조회조건(Multi)+Master Tab</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::template04.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400026</Col><Col id=\"PAGE_ID\">template05</Col><Col id=\"MENU_NM\">조회조건(Multi)+Master Tab</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::template05.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400027</Col><Col id=\"PAGE_ID\">template06</Col><Col id=\"MENU_NM\">조회조건+(DetailT+그리드B)L+그리드R</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::template06.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400028</Col><Col id=\"PAGE_ID\">template07</Col><Col id=\"MENU_NM\">조회조건+그리드L+(그리드T+그리드B)R</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::template07.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"PAGE_ID\">template08</Col><Col id=\"MENU_ID\">400029</Col><Col id=\"_chk\"/><Col id=\"MENU_NM\">조회조건+그리드L+그리드C+그리드R</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::template08.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"PAGE_ID\">PopUp_001</Col><Col id=\"MENU_ID\">400031</Col><Col id=\"_chk\"/><Col id=\"MENU_NM\">조회(PopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUp_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"PAGE_ID\">PopUp_002</Col><Col id=\"MENU_ID\">400032</Col><Col id=\"_chk\"/><Col id=\"MENU_NM\">입력(PopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUp_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"PAGE_ID\">PopUp_003</Col><Col id=\"MENU_ID\">400033</Col><Col id=\"_chk\"/><Col id=\"MENU_NM\">도움말(PopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUp_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400034</Col><Col id=\"PAGE_ID\">PopUp_004</Col><Col id=\"MENU_NM\">메세지(PopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUp_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400035</Col><Col id=\"PAGE_ID\">PopUpMD_001</Col><Col id=\"MENU_NM\">조회(MDPopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUpMD_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400036</Col><Col id=\"PAGE_ID\">PopUpMD_002</Col><Col id=\"MENU_NM\">입력(MDPopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUpMD_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400037</Col><Col id=\"PAGE_ID\">PopUpMD_003</Col><Col id=\"MENU_NM\">도움말(MDPopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUpMD_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400038</Col><Col id=\"PAGE_ID\">PopUpMD_004</Col><Col id=\"MENU_NM\">메세지(MDPopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUpMD_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">400040</Col><Col id=\"PAGE_ID\"/><Col id=\"MENU_NM\">SAMPLE</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">4000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">400041</Col><Col id=\"PAGE_ID\">Sample01</Col><Col id=\"MENU_NM\">Sample01-팝업오픈</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample01.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"MENU_RM\">AA=1&amp;BB=12</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400042</Col><Col id=\"PAGE_ID\">Sample02</Col><Col id=\"MENU_NM\">Sample02-GraphicExample</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::chart_BarHorizontalExample.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400043</Col><Col id=\"PAGE_ID\">Sample03</Col><Col id=\"MENU_NM\">Sample03-엑셀 import/export</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample03.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400044</Col><Col id=\"PAGE_ID\">Sample04</Col><Col id=\"MENU_NM\">Sample04-Grid 필수값체크</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample04.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400045</Col><Col id=\"PAGE_ID\">Sample05</Col><Col id=\"MENU_NM\">Sample05-Transaction(paging)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample05.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"_chk\">[Undefined]</Col><Col id=\"MENU_ID\">400049</Col><Col id=\"PAGE_ID\">Sample06</Col><Col id=\"MENU_NM\">Sample06-Div접기/펴기</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample06.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400050</Col><Col id=\"_chk\">[Undefined]</Col><Col id=\"PAGE_ID\">Sample07</Col><Col id=\"MENU_NM\">Sample07-Search 펼침/숨김</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample07.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400055</Col><Col id=\"PAGE_ID\">Sample08</Col><Col id=\"MENU_NM\">Sample08-Validation체크(css가이드)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample08.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"MENU_RM\">[Undefined]</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400056</Col><Col id=\"PAGE_ID\">Sample09</Col><Col id=\"MENU_NM\">Sample09-마스킹처리</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample09.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"MENU_RM\">[Undefined]</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400046</Col><Col id=\"PAGE_ID\">Sample10</Col><Col id=\"MENU_NM\">Sample10-GridSort/전체선택</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample10.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400047</Col><Col id=\"PAGE_ID\">Sample11</Col><Col id=\"MENU_NM\">Sample11-파일업/다운로드</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample11.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400048</Col><Col id=\"PAGE_ID\">Sample13</Col><Col id=\"MENU_NM\">Sample13-RichTextEditor</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample13.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400119</Col><Col id=\"PAGE_ID\">Sample19</Col><Col id=\"MENU_NM\">Sample19-스캔 이미지마스킹</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample19.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"MENU_RM\">[Undefined]</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">400120</Col><Col id=\"PAGE_ID\">Sample20</Col><Col id=\"MENU_NM\">Sample20-월선택</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample20.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">400121</Col><Col id=\"PAGE_ID\">Sample21</Col><Col id=\"MENU_NM\">Sample21-화면호출,이메일공통 호출</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample21.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">400122</Col><Col id=\"PAGE_ID\">Sample22</Col><Col id=\"MENU_NM\">Sample22-화면호출(상세화면)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample22.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400051</Col><Col id=\"PAGE_ID\">Sample30</Col><Col id=\"MENU_NM\">Sample33-파일업로드/다운로드</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample30.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400140</Col><Col id=\"PAGE_ID\">Sample40</Col><Col id=\"MENU_NM\">Sample40-barhorizontal</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample40.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400141</Col><Col id=\"PAGE_ID\">Sample41</Col><Col id=\"MENU_NM\">Sample41-bubble</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample41.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400142</Col><Col id=\"PAGE_ID\">Sample42</Col><Col id=\"MENU_NM\">Sample42-donut</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample42.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400143</Col><Col id=\"PAGE_ID\">Sample43</Col><Col id=\"MENU_NM\">Sample43-linepoint</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample43.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400144</Col><Col id=\"PAGE_ID\">Sample44</Col><Col id=\"MENU_NM\">Sample44-multiaxis</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample44.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400145</Col><Col id=\"PAGE_ID\">Sample45</Col><Col id=\"MENU_NM\">Sample45-pie</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample45.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400146</Col><Col id=\"PAGE_ID\">Sample46</Col><Col id=\"MENU_NM\">Sample46-scatter</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample46.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400147</Col><Col id=\"PAGE_ID\">Sample47</Col><Col id=\"MENU_NM\">Sample47-stackbar</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample47.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400148</Col><Col id=\"PAGE_ID\">Sample48</Col><Col id=\"MENU_NM\">Sample48-symbol</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample48.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400149</Col><Col id=\"PAGE_ID\">Sample49</Col><Col id=\"MENU_NM\">Sample49-timeaxis</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"PAGE_URL\">sample::Sample49.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"_chk\">[Undefined]</Col><Col id=\"MENU_ID\">400151</Col><Col id=\"PAGE_ID\">Sample90</Col><Col id=\"MENU_NM\">Sample90-Report</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample90.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"MENU_RM\">[Undefined]</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400052</Col><Col id=\"PAGE_ID\">Sample97</Col><Col id=\"MENU_NM\">Sample97-공통함수</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample97.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400053</Col><Col id=\"PAGE_ID\">Sample98</Col><Col id=\"MENU_NM\">Sample98-사용안함</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample98.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">400054</Col><Col id=\"PAGE_ID\">Sample99</Col><Col id=\"MENU_NM\">Sample99-New Form</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">9000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample99.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"USE_YN\">Y</Col><Col id=\"QRY_AUTH_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_myMenuInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_myMenuTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"32\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_TOP\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"DEL_AUTH_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"32\"/><Column id=\"JOB_MENU_ID\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"UPD_AUTH_YN\" type=\"STRING\" size=\"32\"/><Column id=\"ORDR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"INS_AUTH_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_RM\" type=\"STRING\" size=\"32\"/><Column id=\"QRY_AUTH_YN\" type=\"STRING\" size=\"32\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"FAVORITES_MVMN_URL\" type=\"STRING\" size=\"100\"/><Column id=\"FAVORITES_ID\" type=\"STRING\" size=\"32\"/><Column id=\"JOB_SYS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ATMC_LOAD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_SEQ\">49</Col><Col id=\"MENU_NM\">즐겨찾기</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ID\">999999</Col><Col id=\"MENU_GRP\">999999</Col><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_logout", this);
            obj._setContents("<ColumnInfo><Column id=\"result\" type=\"INT\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TOP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_OPTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ARGS\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_EXTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_language", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"flag\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"flag\">theme://images/img_TF_kr.png</Col><Col id=\"name\">한국어/KR</Col><Col id=\"code\">ko-KR</Col></Row><Row><Col id=\"flag\">theme://images/img_TF_en.png</Col><Col id=\"name\">영어/EN</Col><Col id=\"code\">en-US</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_site", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">CCT</Col><Col id=\"CODE\">CCT</Col></Row><Row><Col id=\"NAME\">IFC</Col><Col id=\"CODE\">IFC</Col></Row><Row><Col id=\"NAME\">IFV</Col><Col id=\"CODE\">IFV</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_changed", this);
            obj._setContents("<ColumnInfo><Column id=\"SITETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_myMenuCallback", this);
            obj._setContents("<ColumnInfo><Column id=\"result\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("gds_menu00", this);
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TOP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_OPTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ARGS\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_EXTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_RM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">1000</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">운영관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\"/><Col id=\"MENU_SEQ\">49</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\"/><Col id=\"UPDATE_USER\"/><Col id=\"UPDATE_DT\"/><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\"/><Col id=\"PAGE_EXTP\"/><Col id=\"MENU_AUTH\"/></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">100010</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">공통코드관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">100011</Col><Col id=\"PGM_ID\">CMCM01100M</Col><Col id=\"MENU_NM\">공통코드관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">100010</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\">cmcm::CMCM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">100020</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">메시지 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">100021</Col><Col id=\"PGM_ID\">CMMM01100M</Col><Col id=\"MENU_NM\">메시지 목록</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">100020</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\">cmmm::CMMM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">100022</Col><Col id=\"PGM_ID\">CMMM01300M</Col><Col id=\"MENU_NM\">메시지 등록</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">100020</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\">cmmm::CMMM01300M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">100030</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">도움말관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">100031</Col><Col id=\"PGM_ID\">CMHM01100M</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\">cmhm::CMHM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"MENU_NM\">도움말 목록</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">100030</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col></Row><Row><Col id=\"MENU_ID\">100032</Col><Col id=\"MENU_NM\">도움말 등록</Col><Col id=\"PGM_ID\">CMHM01300M</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">100030</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\">cmhm::CMHM01300M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">100040</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">다양한SQL관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">100041</Col><Col id=\"PGM_ID\">CMSL01100M</Col><Col id=\"MENU_NM\">다양한SQL 목록</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">100040</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\">cmsl::CMSL01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">100042</Col><Col id=\"PGM_ID\">CMSL01300M</Col><Col id=\"MENU_NM\">다양한SQL 등록</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">100040</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\">cmsl::CMSL01300M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">3000</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">작업/모니터링</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">3000</Col><Col id=\"MENU_TOP\">3000</Col><Col id=\"MENU_SEQ\">51</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">300010</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">시스템로그</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">3000</Col><Col id=\"MENU_TOP\">3000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_AUTH\">1111</Col><Col id=\"MENU_ID\">300012</Col><Col id=\"PGM_ID\">CMLM01100M</Col><Col id=\"MENU_NM\">시스템로그 목록</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">3000</Col><Col id=\"MENU_TOP\">300011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmlm::CMLM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_AUTH\">1111</Col><Col id=\"MENU_ID\">300013</Col><Col id=\"PGM_ID\">CMLM01110M</Col><Col id=\"MENU_NM\">WAS로그 목록</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">3000</Col><Col id=\"MENU_TOP\">300011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmlm::CMLM01110M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">300014</Col><Col id=\"PGM_ID\">CMLM01120M</Col><Col id=\"MENU_NM\">SMS로그 목록</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">3000</Col><Col id=\"MENU_TOP\">300011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmlm::CMLM01120M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">300015</Col><Col id=\"PGM_ID\">CMLM01130M</Col><Col id=\"MENU_NM\">EMAIL로그 목록</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">3000</Col><Col id=\"MENU_TOP\">300011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmlm::CMLM01130M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">5000</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">조직관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">5000</Col><Col id=\"MENU_SEQ\">51</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">500010</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">조직 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">5000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">500011</Col><Col id=\"PGM_ID\">CMOG01100M</Col><Col id=\"MENU_NM\">조직목록</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">500012</Col><Col id=\"PGM_ID\">CMOG01200M</Col><Col id=\"MENU_NM\">조직 등록</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG01200M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">500013</Col><Col id=\"PGM_ID\">CMOG01300M</Col><Col id=\"MENU_NM\">조직 수정</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG01300M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">500014</Col><Col id=\"PGM_ID\">CMOG01400M</Col><Col id=\"MENU_NM\">조직 상세</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG01400M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직 기본화면</Col><Col id=\"PGM_ID\">CMOG01500P</Col><Col id=\"MENU_ID\">500015</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG01500P.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직 상세화면</Col><Col id=\"PGM_ID\">CMOG01510P</Col><Col id=\"MENU_ID\">500016</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG01510P.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직매핑 목록</Col><Col id=\"PGM_ID\">CMOG02100M</Col><Col id=\"MENU_ID\">500017</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG02100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직매핑 연계결과 목록</Col><Col id=\"PGM_ID\">CMOG02110M</Col><Col id=\"MENU_ID\">500018</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG02110M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직매핑 등록</Col><Col id=\"PGM_ID\">CMOG02200M</Col><Col id=\"MENU_ID\">500019</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG02200M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직매핑 수정</Col><Col id=\"PGM_ID\">CMOG02300M</Col><Col id=\"MENU_ID\">500020</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG02300M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직매핑 상세</Col><Col id=\"PGM_ID\">CMOG02400M</Col><Col id=\"MENU_ID\">500021</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG02400M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직부가정보 목록</Col><Col id=\"PGM_ID\">CMOG03100M</Col><Col id=\"MENU_ID\">500022</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG03100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직부가정보 등록</Col><Col id=\"PGM_ID\">CMOG03200P</Col><Col id=\"MENU_ID\">500023</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG03200P.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직부가정보 수정</Col><Col id=\"PGM_ID\">CMOG03300P</Col><Col id=\"MENU_ID\">500024</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG03300P.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직부가정보 상세</Col><Col id=\"PGM_ID\">CMOG03400P</Col><Col id=\"MENU_ID\">500025</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG03400P.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직부가정보 속성관리</Col><Col id=\"PGM_ID\">CMOG03500M</Col><Col id=\"MENU_ID\">500026</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG03500M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직기본 변경 목록</Col><Col id=\"PGM_ID\">CMOG04100M</Col><Col id=\"MENU_ID\">500027</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG04100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직등급 변경 목록</Col><Col id=\"PGM_ID\">CMOG04110M</Col><Col id=\"MENU_ID\">500028</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG04110M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직부가정보 변경 목록</Col><Col id=\"PGM_ID\">CMOG04120M</Col><Col id=\"MENU_ID\">500029</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG04120M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직변경 예약목록</Col><Col id=\"PGM_ID\">CMOG04130M</Col><Col id=\"MENU_ID\">500030</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG04130M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">4000</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">개발가이드 참조</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">4000</Col><Col id=\"MENU_SEQ\">51</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400010</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">GUIDE</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">4000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400012</Col><Col id=\"PGM_ID\">Guide_01</Col><Col id=\"MENU_NM\">Guide_01</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_01.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400013</Col><Col id=\"PGM_ID\">Guide_02</Col><Col id=\"MENU_NM\">Guide_02</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_02.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400014</Col><Col id=\"PGM_ID\">Guide_03</Col><Col id=\"MENU_NM\">Guide_03</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_03.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400015</Col><Col id=\"PGM_ID\">Guide_04</Col><Col id=\"MENU_NM\">Guide_04</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_04.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400016</Col><Col id=\"PGM_ID\">Guide_05</Col><Col id=\"MENU_NM\">Guide_05</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_05.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400017</Col><Col id=\"PGM_ID\">Guide_06</Col><Col id=\"MENU_NM\">Guide_06</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_06.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400018</Col><Col id=\"PGM_ID\">Guide_07</Col><Col id=\"MENU_NM\">Guide_07</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_07.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400019</Col><Col id=\"PGM_ID\">Guide_08</Col><Col id=\"MENU_NM\">Guide_08</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_08.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400020</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">TEMPLATE</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">4000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400021</Col><Col id=\"PGM_ID\">TemplateGuide_001</Col><Col id=\"MENU_NM\">조회_그리드</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400022</Col><Col id=\"PGM_ID\">TemplateGuide_002</Col><Col id=\"MENU_NM\">조회_게시판형</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400023</Col><Col id=\"PGM_ID\">TemplateGuide_003</Col><Col id=\"MENU_NM\">조회_분리형</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400024</Col><Col id=\"PGM_ID\">TemplateGuide_004</Col><Col id=\"MENU_NM\">입력_일반형</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400025</Col><Col id=\"PGM_ID\">TemplateGuide_005</Col><Col id=\"MENU_NM\">입력_탭형</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_005.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400026</Col><Col id=\"PGM_ID\">TemplateGuide_006</Col><Col id=\"MENU_NM\">그래프</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_006.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400027</Col><Col id=\"PGM_ID\">TemplateGuide_007</Col><Col id=\"MENU_NM\">메세지</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_007.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400028</Col><Col id=\"PGM_ID\">TemplateGuide_008</Col><Col id=\"MENU_NM\">통계_그래프</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_008.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"PGM_ID\">TemplateGuide_009</Col><Col id=\"MENU_ID\">400029</Col><Col id=\"_chk\"/><Col id=\"MENU_NM\">통계_표</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_009.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"PGM_ID\">PopUp_001</Col><Col id=\"MENU_ID\">400031</Col><Col id=\"_chk\"/><Col id=\"MENU_NM\">조회(PopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUp_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"PGM_ID\">PopUp_002</Col><Col id=\"MENU_ID\">400032</Col><Col id=\"_chk\"/><Col id=\"MENU_NM\">입력(PopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUp_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"PGM_ID\">PopUp_003</Col><Col id=\"MENU_ID\">400033</Col><Col id=\"_chk\"/><Col id=\"MENU_NM\">도움말(PopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUp_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400034</Col><Col id=\"PGM_ID\">PopUp_004</Col><Col id=\"MENU_NM\">메세지(PopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUp_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400035</Col><Col id=\"PGM_ID\">PopUpMD_001</Col><Col id=\"MENU_NM\">조회(MDPopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUpMD_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400036</Col><Col id=\"PGM_ID\">PopUpMD_002</Col><Col id=\"MENU_NM\">입력(MDPopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUpMD_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400037</Col><Col id=\"PGM_ID\">PopUpMD_003</Col><Col id=\"MENU_NM\">도움말(MDPopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUpMD_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400038</Col><Col id=\"PGM_ID\">PopUpMD_004</Col><Col id=\"MENU_NM\">메세지(MDPopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUpMD_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">400040</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">SAMPLE</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">4000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">400041</Col><Col id=\"PGM_ID\">Sample01</Col><Col id=\"MENU_NM\">Sample01-팝업오픈</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample01.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400042</Col><Col id=\"PGM_ID\">Sample02</Col><Col id=\"MENU_NM\">Sample02-RD호출</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample02.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400043</Col><Col id=\"PGM_ID\">Sample03</Col><Col id=\"MENU_NM\">Sample03-엑셀 import/export</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample03.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400044</Col><Col id=\"PGM_ID\">Sample04</Col><Col id=\"MENU_NM\">Sample04-Grid 필수값체크</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample04.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400045</Col><Col id=\"PGM_ID\">Sample05</Col><Col id=\"MENU_NM\">Sample05-Transaction(paging)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample05.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400046</Col><Col id=\"PGM_ID\">Sample10</Col><Col id=\"MENU_NM\">Sample10-GridSort/전체선택</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample10.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400047</Col><Col id=\"PGM_ID\">Sample11</Col><Col id=\"MENU_NM\">Sample11-파일업/다운로드</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample11.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400048</Col><Col id=\"PGM_ID\">Sample13</Col><Col id=\"MENU_NM\">Sample13-RichTextEditor</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample13.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"_chk\">[Undefined]</Col><Col id=\"MENU_ID\">400120</Col><Col id=\"PGM_ID\">Sample20</Col><Col id=\"MENU_NM\">Sample20-월선택</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample20.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400051</Col><Col id=\"PGM_ID\">Sample31</Col><Col id=\"MENU_NM\">Sample31-mis-sample</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample31.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400052</Col><Col id=\"PGM_ID\">Sample97</Col><Col id=\"MENU_NM\">Sample97-공통함수</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample97.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400053</Col><Col id=\"PGM_ID\">Sample98</Col><Col id=\"MENU_NM\">Sample98-RD호출(html5)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample98.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400054</Col><Col id=\"PGM_ID\">Sample99</Col><Col id=\"MENU_NM\">Sample99-New Form</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample99.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00","0","32",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_top_bg01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","100","24",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_top_bg02");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","0","181","120","101",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_Popup");
            obj.set_captioncolumn("Column0");
            obj.set_idcolumn("Column2");
            obj.set_levelcolumn("Column1");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_userinfo",null,"74","257","320","8",null,null,null,null,null,this);
            obj.set_visible("true");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Button("btn_changePassword","20","96","99","20",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("0");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_tooltiptext("CHANGEPASSWORD");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Button("btn_changeUserInfo","124","96","110","20",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("1");
            obj.set_text("사용자정보 수정");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_tooltiptext("CHANGEUSERINFO");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Static("sta_00","21","134","82","20",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("2");
            obj.set_text("이메일 주소");
            obj.set_cssclass("txt_12,sta_font_gray2");
            obj.set_tooltiptext("EMAILADDRESS");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Static("sta_email","21","152","209","20",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("3");
            obj.set_text("testaaaa@interflex.co.kr");
            obj.set_cssclass("txt_13,sta");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Static("sta_00_01","21","188","82","20",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("4");
            obj.set_text("로그인 시간");
            obj.set_cssclass("txt_12,sta_font_gray2");
            obj.set_tooltiptext("LOGINTIME");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Static("sta_loginTime","21","206","209","20",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("5");
            obj.set_text("2021-01-15 오전 11:11:11");
            obj.set_cssclass("txt_13,sta");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Button("btn_logout","83","252","81","36",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("6");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_tooltiptext("LOGOUT");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Static("sta_userAcnt","104","26","82","20",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("7");
            obj.set_text("admin");
            obj.set_cssclass("txt_13,sta_font_gray2");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Static("sta_userNm","104","48","140","20",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("8");
            obj.set_text("관리자");
            obj.set_cssclass("txt_15B");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Static("sta_icon","20","20","60","60",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_userInfo_icon");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_01","20","0","70","20",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","0","45","20","122",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w\r\n20");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_02","80","30","20","40",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w\r\n20");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_01_00","30","80","70","15",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h15");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00",null,"87","20","80","0",null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w\r\n20");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_01_00_00","30","116","70","20",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_01_00_01","40","151","70","5",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h5");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_01_00_00_00","30","170","70","20",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_01_00_00_00_00","60","222","70","30",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h30");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_01_00_00_00_00_00","60",null,"70","30",null,"0",null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("19");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h30");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_01_00_01_00","50","205","70","5",null,null,null,null,null,null,this.pdv_userinfo.form);
            obj.set_taborder("20");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h5");
            this.pdv_userinfo.addChild(obj.name, obj);

            obj = new PopupDiv("Pdiv_list","680","80","190","280",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_formscrolltype("none");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","0",null,null,null,null,this.Pdiv_list.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_TF_menuList");
            obj.set_binddataset("ds_list");
            obj.set_scrolltype("none");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell style=\"selectbackground: ;\" text=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.Pdiv_list.addChild(obj.name, obj);

            obj = new Div("div_topMenu","44","32",null,"44","98",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list",null,"32","95","44","3",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_cssclass("btn_TF_menuMore");
            obj.set_text("메뉴 더보기");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRIDMENULIST");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","4","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_TF_ci");
            this.addChild(obj.name, obj);

            obj = new Button("btn_menuShow","0","32","44","44",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_TF_menuShow");
            obj.set_tooltiptext("OpenLeftMenu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_language","112","1","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("한국어/kr");
            obj.set_cssclass("btn_TF_lang");
            obj.set_icon("url(\'theme://images/img_TF_kr.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btn_site","253","1","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("IFC");
            obj.set_cssclass("btn_TF_factory");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_language","169","180","130","60",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_language",null,"0","128",null,"0","0",null,null,null,null,this.pdv_language.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_TF_listbox");
            obj.set_binddataset("ds_language");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"93\"/></Columns><Rows><Row size=\"29\"/></Rows><Band id=\"body\"><Cell text=\"bind:flag\" cssclass=\"cell_img\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:name\" padding=\"0px\"/></Band></Format></Formats>");
            this.pdv_language.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_site","348","193","60","89",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_site","0","0",null,null,"0","0",null,null,null,null,this.pdv_site.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_TF_listbox");
            obj.set_binddataset("ds_site");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"136\"/></Columns><Rows><Row size=\"29\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.pdv_site.addChild(obj.name, obj);

            obj = new Static("sta_welcome",null,"4","86","24","-209",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("님 환영합니다");
            obj.set_cssclass("sta_TF_user");
            obj.set_tooltiptext("Welcome");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_user",null,"4","195","24","77",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("SM Line");
            obj.set_cssclass("btn_TF_user");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Button("btn_menuHide","0","122","44","44",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_TF_menuHide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sitemap",null,"6","68","20","4",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("사이트맵");
            obj.set_cssclass("btn_TF_sitemap");
            obj.set_tooltiptext("SITEMAP");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser_00","925","-1","171","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,76,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

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
        //include "lib::comLib.xjs";


        /***********************************************************************************
         * Global/Local Variable
         ***********************************************************************************/
        this.fv_menuAccessTime;

        this.nLeft = 0;
        this.nPad = 15;
        this.MENU_BTN_PREFIX = "btn_top";
        this.fv_nWindowWidth = this.gv_frameWidth;
        var userIdCookie = this.gf_getUserId() + "";
        this.fv_openMaxFrame = 30; //열리는 화면(프레임) 최대 갯수

        var fv_sId = "";
        var fv_sName = "";

        this.application = null;
        this._n_top_menu_btn_width = 0;

        /***********************************************************************************
         * Form Event
         ***********************************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.application = nexacro.getApplication();
        	var sCommand = this.application.id;
        	if (!this.gfn_isNull(sCommand))
        	{
        		/* 사용자 정보 cookie 처리 - portal 에서 업무 접근시 cookie(gv_loginInfo) 셋팅 정보 사용 */
        		/*
        		this.application.gds_userInfo.clearData();

        		var sLoginInfo = this.gfn_getCookie("gv_loginInfo");
        		this.fn_getLoginInfo(sLoginInfo);
        		*/
        	}

        /*
        	if(nexacro.getApplication().gv_runMode=="prod"){
        		this.WebBrowser_00.set_visible(true);
        		this.WebBrowser_00.set_url(nexacro.getApplication().gv_host + "/html/serverIp.jsp");
        	}
        */

        //개발기간동안 강제화
        //this.fn_init();
        //this.fn_getLoginInfo();
        //this.fn_createMenu();
        };

        this.fn_init = function ()
        {
        	this.ds_list.clearData();
        	this.fn_setTopMenu();
        };

        /* 메인프레임명 및 시스템명 처리 */
        this.setMenuTitle = function ()
        {
        	var sAppId = this.application.id.toUpperCase();

        	var sAppName = "Interfelx MES시스템";
        	this.application.mainframe.set_titletext(sAppName);

        	if (this.application.gv_runMode != "prod")
        	{
        		sAppName = sAppName + " [" + this.application.gv_runMode.toUpperCase() + "]";
        	}

        	// this.btn_menu.set_text(sAppName);
        };

        // 로그인 정보  서비스 호출
        this.fn_getLoginInfo = function (sLoginInfo)
        {

        	var sAppId = this.application.id.toUpperCase();

        	var sSvcID = "loginInfo";
        	var sController = "/penc00010/selectGlovelValueInfo.do";
        	var sInDatasets = "";
        	var sOutDatasets = "gds_userInfo=gds_userInfo gds_message=gds_message gds_cmdDictionary=gds_cmdDictionary ds_myMenuInfo=ds_myMenuInfo gds_menu=gds_menu ds_site=ds_site";
        	var sArgs = "";

        	sArgs += this.gfn_setParam("gv_loginInfo", sLoginInfo);
        	if(!this.gfn_isNull(this.ds_changed.getColumn(0,"lang"))){
        		sArgs += this.gfn_setParam("gv_languageType", this.ds_changed.getColumn(0,"lang"));
        	}
        	if(!this.gfn_isNull(this.ds_changed.getColumn(0,"site"))){
        		sArgs += this.gfn_setParam("gv_siteType", this.ds_changed.getColumn(0,"site"));
        	}

        	this.ds_changed.clearData();

        	var sCallbackFunc = "fn_callBack";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, sCallbackFunc);


        };

        // 메뉴 서비스 호출
        this.fn_getMenu = function (menuId)
        {

        	//var menuId =  this.ds_topMenu.lookup("RN",rn,"MENU_ID");

        	var sSvcID = "selectLeftMenu";
        	var sController = "/penc00010/selectMenuAuthTree.do";
        	var sInDatasets = "";
        	var sOutDatasets = "gdsLeftMenu=gdsLeftMenu";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectLeftMenu");
        	sArgs += this.gfn_setParam("JOB_SYS_CD", this.application.id);
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
        //alert(0);
        	gv_appLeftFrame.form.fn_selectFavorites();
        /*
        	var sSvcID = "selectMyMenu";
        	var sController = "/penc00010/selectFavorites.do";
        	var sOutDatasets = "ds_myMenuInfo=ds_myMenuInfo";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("USER_ID", this.gf_getUserId());
        	var sCallbackFunc = "fn_callBack";

        	this.gfn_transaction(sSvcID, sController, "", sOutDatasets, sArgs, sCallbackFunc);
        */
        };

        /* 메뉴로그쌓기 */
        this.fn_insertJobMenuLogs = function (menuId)
        {
        	var menuPath = this.fn_createMenuPath(menuId,true);
        	gv_appBottomFrame.form.sta_menuPath.set_text(menuPath);

        	menuPath = this.fn_createMenuPath(menuId,false);
        	var sSvcID = "insertJobMenuLogs";
        	var sController = "/cmlm01100/insertJobMenuLogs.do";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("JOB_MENU_ID", menuId);
        	sArgs += this.gfn_setParam("LGN_LOG_ID", this.gf_getLoginId()); //로그인 이력ID
        	sArgs += this.gfn_setParam("MENU_NM", this.application.gds_menu.lookup("MENU_ID", menuId, "MENU_NM")); //메뉴명
        	sArgs += this.gfn_setParam("MENU_COURS_NM", menuPath); //메뉴 경로명
        	var sCallbackFunc = "fn_callBack";

        	this.gfn_transaction(sSvcID, sController, "", "", sArgs, sCallbackFunc);
        };

        /* 메뉴로그쌓기 */
        this.fn_insertJobMenuLogsAutoLoading = function (menuId)
        {
        	var sSvcID = "insertJobMenuLogs" + Math.round(Math.random() * 10000);
        	var sController = "/cmlm01100/insertJobMenuLogs.do";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("JOB_MENU_ID", menuId);
        	sArgs += this.gfn_setParam("LGN_LOG_ID", this.gf_getLoginId()); //로그인 이력ID
        	sArgs += this.gfn_setParam("MENU_NM", this.application.gds_menu.lookup("MENU_ID", menuId, "MENU_NM")); //메뉴명
        	sArgs += this.gfn_setParam("MENU_COURS_NM", this.fn_createMenuPath(menuId,false)); //메뉴 경로명
        	var sCallbackFunc = "fn_callBack";

        	this.gfn_transaction(sSvcID, sController, "", "", sArgs, sCallbackFunc);
        };
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.fn_callBack = function (strServiceId, strErrorCode, strErrorMsg)
        {

        if (strErrorCode < 0){
        //alert('form callback : ' + strServiceId+' > '+strErrorCode);
        }
        	if (strErrorCode < 0)
        	{
        		// return this.gfn_alert(strErrorMsg, "error");
        		var sErrMsg = "";
        		sErrMsg = "★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★\n";
        		sErrMsg += "service ID ====> " + strServiceId + "\n";
        		sErrMsg += strErrorMsg + "\n";
        		sErrMsg += "★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★";
        	    trace(sErrMsg, "error");
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
        			this.nfn_formInit(this);


        			//this.sta_welcome.set_text(this.gf_getUserNm() + "님 환영합니다");
        			//this.sta_welcome.set_tooltiptext(this.gf_getLoginBeginTm());
        			//this.Pdiv_menuList.set_url("common::com_jobIcon.xfdl");
        			this.btn_user.set_text(this.gf_getUserNm());
        			this.pdv_userinfo.form.sta_userAcnt.set_text(this.gf_getUserAcnt());
        			this.pdv_userinfo.form.sta_userNm.set_text(this.gf_getUserNm());
        			this.pdv_userinfo.form.sta_loginTime.set_text(this.gf_getLoginBeginTm());
        			this.pdv_userinfo.form.sta_email.set_text(this.gf_getEmailAddr());

        			nexacro.getApplication().gv_languageType = this.gf_getLanguageType();
        			nexacro.getApplication().gv_siteType = this.gf_getSiteType();
        /*
        			var dictionaryname =  this.nfn_getDictionaryname(this.btn_list.tooltiptext,true);
        			this.btn_list.set_tooltiptext(dictionaryname);
        			var dictionaryname =  this.nfn_getDictionaryname(this.btn_menuShow.tooltiptext,true);
        			this.btn_menuShow.set_tooltiptext(dictionaryname);

        			var dictionaryname =  this.nfn_getDictionaryname(this.btn_sitemap.tooltiptext,true);
        			this.btn_sitemap.set_text(dictionaryname);
        			this.btn_sitemap.set_tooltiptext(dictionaryname);
        */
        			var dictionaryname =  this.nfn_getDictionaryname(gv_appWorkTopFrame.form.btn_closeAll.tooltiptext,true);
        			gv_appWorkTopFrame.form.btn_closeAll.set_tooltiptext(dictionaryname);
        			var dictionaryname =  this.nfn_getDictionaryname(gv_appWorkTopFrame.form.btn_openList.tooltiptext,true);
        			gv_appWorkTopFrame.form.btn_openList.set_tooltiptext(dictionaryname);

        			this.fn_createMenu();
        			//this.fn_createMyMenu(); //즐겨찾기 데이터셋 생성
        			gv_appLeftFrame.form.fn_selectFavorites("Auto");
        			//this.nfn_formInit(this);
        			//if(this.gf_getLanguageType() != "ko-KR") this.sta_welcome.set_text("Welcome");

        			this.btn_language.set_text(this.ds_language.lookup("code",this.gf_getLanguageType(),"name"));
        			this.btn_language.set_icon(this.ds_language.lookup("code",this.gf_getLanguageType(),"flag"));
        			this.btn_site.set_text(this.ds_site.lookup("CODE",this.gf_getSiteType(),"NAME"));

        			nexacro.getApplication().gds_period.filter("lang_cd=='"+this.gf_getLanguageType()+"'");
        			//copy 최초실행
        			var oArg = {arg_content:""};
        			this.gfn_openPopup("com_copy","common::com_copy.xfdl",oArg,"width=0,height=0");

        		this.application.mainframe.VFrameSet.HFrameSet0.VFrameSet0.set_separatesize("30,*,0");
        		// 이때 홈 조회
        		this.application.mainframe.VFrameSet.HFrameSet0.VFrameSet0.WorkFrame.form.fn_login_comp();



        			break;
        		case "selectLeftMenu":
        			// 메뉴 서비스 호출 이후 처리
        			this.fn_createMenu();
        			//this.fn_createMyMenu(); //즐겨찾기 데이터셋 생성
        		case "insertJobMenuLogs":
        			break;
        		case "selectMyMenu":
        			//this.fn_createMyMenu(); //즐겨찾기 데이터셋 생성
        			break;
        		case "selectLogoutCd":
        			var logoutCD = this.ds_logout.getColumn(0, "result");
        			this.gfn_sessionCheck(logoutCD); //세션처리 호출
        			break;
        		case "loginPostTop":
        			//var sLoginInfo = this.gfn_getCookie("gv_loginInfo");
        			//this.fn_getLoginInfo(sLoginInfo);
        			nexacro.getApplication().reload();
        			break;
        		case "insertMyMenu" :
        			this.alert("즐겨찾기에 추가되었습니다.");
        			gv_appTopFrame.form.fn_getMyMenu(); //즐겨찾기 재조회
        /*
        			var insResult = this.ds_myMenuCallback.getColumn(0, "result");
        			if(insResult == 1)
        			{
        				this.alert("즐겨찾기에 추가되었습니다.");
        				gv_appTopFrame.form.fn_getMyMenu(); //즐겨찾기 재조회
        			}
        			else if(insResult == 3)
        			{
        				this.alert("이미 등록된 메뉴입니다.");
        			}
        			else
        			{
        				trace("insResult : " + insResult + " / 즐겨찾기 추가실패!!");
        			}
        */
        			break;
        		default:
        			break;
        	}
        };

        this.fn_createMenu = function ()
        {
        	this.application.gds_menu.set_enableevent(false);
        	var sAppId = this.application.id.toUpperCase();
        	var rastRow = this.application.gds_menu.getRowCount();
        	//alert(this.application.gv_runMode);
        	if (this.application.gv_runMode == "local")
        	{
        	  //alert('check menu');
        		this.application.gds_menu.appendData(this.ds_menuTemp, true);
        		//this.application.gds_menu.appendData(this.ds_menuTemp);
        	}

        	//this.application.gds_menu.insertRow(0);
        	//this.application.gds_menu.copyRow(0, this.ds_myMenuTemp, 0);

        	this.application.gds_menu.set_enableevent(true);
        	//trace(this.application.gds_menu.saveCSV());
        	/*
        	gv_appLeftFrame.set_formurl("frame::frmLeft.xfdl");
        	gv_appWorkFrameSet.set_formurl("frame::frmMdi.xfdl");
        	gv_appBottomFrame.set_formurl("frame::frmBottom.xfdl");
        	*/
        	this.fn_init();
        };


        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // 상위메뉴 필터 및 레벨 메뉴 버튼 삭제 후 메뉴 버튼 생성
        this.fn_setTopMenu = function ()
        {
        	this.application.gds_menu.filter("MENU_LEVEL == 1" + "&&" + ct_menuUseYnCol + "=='Y'");
        	this.ds_menu.copyData(this.application.gds_menu, true);
        	this.application.gds_menu.filter("");

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
        	//top 메뉴 영역 메뉴버튼 추가
        	this.application.gds_menu.filter("MENU_LEVEL == 1");


        	for (var i = 0; i < this.application.gds_menu.rowcount; i++)
        	{
        		var strID = this.application.gds_menu.getColumn(i, "MENU_ID");
        		var strName = this.application.gds_menu.getColumn(i, "MENU_NM");
        		//var bBar = (i == this.application.gds_menu.rowcount-1) ? false : true;
        		var bBar = false;
        		if ( i==0 ){
        			fv_sId = strID;
        			fv_sName = strName;
        			//this.fn_getMenu(fv_sId);
        		}
        		trace(strID+' : '+strName);
        		this.fn_createTopMenu(strID, strName, i, bBar);

        		trace(strName);
        	}



        	//this.gds_menu00.copyData(this.application.gds_menu, true);
        	/*
        	for (var i = 0; i < this.gds_menu00.rowcount; i++)
        	{
        		var strID = this.gds_menu00.getColumn(i, "MENU_ID");
        		var strName = this.gds_menu00.getColumn(i, "MENU_NM");
        		//var bBar = (i == this.application.gds_menu.rowcount-1) ? false : true;
        		var bBar = false;
        		if ( i==0 ){
        			fv_sId = strID;
        			fv_sName = strName;
        			//this.fn_getMenu(fv_sId);
        		}
        		trace(strName);
        		this.fn_createTopMenu(strID, strName, i, bBar);

        	}
        	*/
        	this.application.gds_menu.filter("");

        };

        // 상위 메뉴를 생성한다.
        this.fn_createTopMenu = function (strID, strName, index, bBar)
        {
        	//trace("application.mainframe.width -->"+ application.mainframe.width);

        	// 페이지 버튼 생성
        	var preIndex = 0;
        	var nLeft = 0;
        	var nRight = 0;
        	var preStrId = "";
        	var preObject;
        	var objBtn = new Button();
        	objBtn.init(this.MENU_BTN_PREFIX + strID, 80, 0, 80, 45);
        	this.div_topMenu.form.addChild(objBtn.name, objBtn);
        	objBtn.set_tooltiptext(strName);
        	//alert(this.gf_getLanguageType());
        	//trace("strName-->"+strName);
        	var objTextSize = this.nfn_getByteB(strName)*8+55;
        	objBtn.set_cssclass("btn_TF_menu");
        	if(this.gf_getLanguageType() != "ko-KR"){
        		//if(!this.gfn_isNull(strName) && strName.length>10){
        		//	strName =  strName.substring(0,10)+"\n"+ strName.substring(10);
        		//}
        		objBtn.set_font("bold 10pt/22px arial, sans-serif");
        		objBtn.set_padding("0px");
        		objBtn.set_wordWrap("char");
        		objTextSize = 85;
        	}
        	//trace("strName2-->"+strName);
        	objBtn.set_text(strName);
        	//this.Button00.set_font("bold 12pt/30px arial, sans-serif");
        	//objBtn.set_font("normal 300/5px Malgun Gothic, 맑은 고딕,Arial");
        	//objBtn.set_font("normal 900 15px/normal Malgun Gothic, 맑은 고딕,Arial");
        	objBtn.menuid = strID;
        	objBtn.set_textAlign("center middle");
        	objBtn.setEventHandler("onclick", this.btn_top_menu_onclick, this);

        	objBtn.show();
        	if(index > 0)
        	{
        		preIndex = index-1;
        		preStrId = this.application.gds_menu.getColumn(preIndex, "MENU_ID");
        		//preObject = this.div_topMenu.form.components[this.MENU_BTN_PREFIX+"_sta_"+preStrId];
        		preObject = this.div_topMenu.form.components[this.MENU_BTN_PREFIX+preStrId];

        		nLeft = preObject.getOffsetRight() + 5; //(2017.04.20 20->9px 변경)
        	}else{
        		nLeft = 10;
        	}

        	//var objFont 	= this.gfn_getObjFont(objBtn, 11,"Dotum");
        	//var objTextSize = this.nfn_getByteB(strName)*8+15;
        	//var objTextSize = Eco.string.getLength(strName,'utf8')*9;
        						//this.nfn_getByteB(strName)*8+9;//objBtn.textwidth;	//this.gfn_getTextSize(strName, objFont);
        	objBtn.setOffsetLeft(nLeft);

        	//2016.03.14 getTextSize 로 변경
        	objBtn.setOffsetRight(nLeft + nexacro.toNumber(objTextSize) + 5); //(2017.04.20 15->7px 변경)

        	objBtn.set_visible(true);
        	//objBtn.set_cssclass("btn_top_menu");

        	// 화면사이즈에 따른 우측 ...버튼처리
        	// 화면에 보이지 않는 버튼만 목록으로 보이도록 처리한다.
        	var nWidth = nexacro.toNumber(objBtn.left) + nexacro.toNumber(objBtn.width) + nexacro.toNumber(this.div_topMenu.left)+nexacro.toNumber(this.div_topMenu.right);
        	//trace("objBtn.width-->"+nexacro.toNumber(objBtn.width));
        	//var nWidth = nexacro.toNumber(objBtn.left) + nexacro.toNumber(objBtn.width);
        	this._n_top_menu_btn_width = nWidth;
        	if (nWidth > this.application.mainframe.width){
        		var nRow = this.ds_list.addRow();
        		this.ds_list.setColumn(nRow, "MENU_ID",strID);
        		this.ds_list.setColumn(nRow, "MENU_NM", objBtn.text);

        	}
        //	trace(this.ds_list.saveXML());
        	//버튼옆 | 표시처리
        	if(bBar)
        	{
        		var objStc = new Static();

        		objStc.init(this.MENU_BTN_PREFIX+"_sta_"+strID,(objBtn.getOffsetRight())+9, 13, 1, 13); //(2017.04.20 20->9px 변경)
        		this.div_topMenu.form.addChild(objStc.name, objStc);
        		this._n_top_menu_btn_width = nexacro.toNumber(this._n_top_menu_btn_width) + 1;
        		objStc.set_background("#cfcfcfff");
        		objStc.show();
        	}
        	if(nexacro.toNumber(this.div_topMenu.getOffsetRight()) < nexacro.toNumber(this._n_top_menu_btn_width)){
        		this.btn_list.set_visible(true);
        	}
        }

        /* 즐겨찾기 데이터셋 생성 */
        this.fn_createMyMenu = function ()
        {
        	var nRowCount = this.ds_myMenuInfo.getRowCount();
        	var jobSign = "noname";
        	var i;
        	var getColIdx = 0;
        	var setColIdx = 0;
        /*
        	this.ds_myMenuTemp.clearData();
        	this.ds_myMenuTemp.addRow();
        	this.ds_myMenuTemp.setColumn(0, "MENU_NM", "즐겨찾기");
        	this.ds_myMenuTemp.setColumn(0, "MENU_SEQ", "49");
        	this.ds_myMenuTemp.setColumn(0, "USE_YN", "Y");
        	this.ds_myMenuTemp.setColumn(0, "MENU_ID", "999999");
        	this.ds_myMenuTemp.setColumn(0, "MENU_GRP", "999999");
        	this.ds_myMenuTemp.setColumn(0, "MENU_LEVEL", "1");
        	this.ds_myMenuTemp.setColumn(0, "ATMC_LOAD_YN", "");
        */
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

        		var nRow = this.ds_myMenuTemp.addRow();
        		this.ds_myMenuTemp.setColumn(nRow, "MENU_NM", getCol8);
        		this.ds_myMenuTemp.setColumn(nRow, "MENU_SEQ", getCol1);
        		this.ds_myMenuTemp.setColumn(nRow, "PAGE_URL", getCol3);
        		this.ds_myMenuTemp.setColumn(nRow, "USE_YN", "Y");
        		this.ds_myMenuTemp.setColumn(nRow, "MENU_TOP", "");
        		this.ds_myMenuTemp.setColumn(nRow, "MENU_AUTH", "0000");
        		this.ds_myMenuTemp.setColumn(nRow, "MENU_ID", getCol5);
        		this.ds_myMenuTemp.setColumn(nRow, "DEL_AUTH_YN", "");
        		this.ds_myMenuTemp.setColumn(nRow, "MENU_GRP", "999999");
        		this.ds_myMenuTemp.setColumn(nRow, "MENU_LEVEL", "2");
        		this.ds_myMenuTemp.setColumn(nRow, "JOB_MENU_ID", getCol5);
        		this.ds_myMenuTemp.setColumn(nRow, "UPD_AUTH_YN", "");
        		this.ds_myMenuTemp.setColumn(nRow, "ORDR", getCol1);
        		this.ds_myMenuTemp.setColumn(nRow, "INS_AUTH_YN", "");
        		this.ds_myMenuTemp.setColumn(nRow, "MENU_RM", "");
        		this.ds_myMenuTemp.setColumn(nRow, "QRY_AUTH_YN", "");
        		this.ds_myMenuTemp.setColumn(nRow, "JOB_SYS_CD", getCol7);
        		this.ds_myMenuTemp.setColumn(nRow, "FAVORITES_MVMN_URL", getCol2);
        		this.ds_myMenuTemp.setColumn(nRow, "FAVORITES_ID", getCol4);
        		this.ds_myMenuTemp.setColumn(nRow, "JOB_SYS_NM", getCol6);
        		this.ds_myMenuTemp.setColumn(nRow, "ATMC_LOAD_YN", getCol9);

        		/*
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
        			this.ds_myMenuTemp.setColumn(setColIdx + 1, "MENU_LEVEL", "2");
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
        		*/
        		// trace("ds_myMenuTemp"+setColIdx+"-->"+this.ds_myMenuTemp.saveCSV());
        	}
        	this.ds_myMenuTemp.set_enableevent(false);
        	var myMenuTemp = this.ds_myMenuTemp.saveXML();

        	this.application.gds_myMenu.clear();
        	this.application.gds_myMenu.loadXML(myMenuTemp);
        	// LeftFrame load완료 체크
        	if (this.application.bLeftLoad)
        	{
        		gv_appLeftFrame.form.fn_myMenuInit();
        	}

        };

        /* 즐겨찾기 신규추가 */
        this.fn_addMyMenu = function(menuId, mvmnUrl)
        {
        	var sSvcID        	= "insertMyMenu";
            var sController   	= "/penc00010/insertFavorites.do";
        	var sOutDatasets  	= "ds_myMenuCallback=ds_output";
        	var sArgs = "";
        		sArgs += this.gfn_setParam("USER_ID", this.gf_getUserId());
        		sArgs += this.gfn_setParam("FAVORITES_MVMN_URL", mvmnUrl);
        		sArgs += this.gfn_setParam("FAVORITES_MENU_ID", menuId);
        		sArgs += this.gfn_setParam("JOB_SYS_CD", nexacro.getApplication().id);
        	var sCallbackFunc = "fn_callBack";

        	this.gfn_transaction(sSvcID, sController, "", sOutDatasets, sArgs, sCallbackFunc);
        }

        this.topFrame_ontimer = function (obj, e)
        {
        	if (e.timerid == 111)
        	{
        		// LeftFrame load완료 체크
        		if (this.application.bLeftLoad)
        		{
        			this.killTimer(111);
        			// trace("LeftFrame이 완료되어 마이메뉴를 초기화합니다.");
        			gv_appLeftFrame.form.fn_myMenuInit();
        		}
        	}
        	if (e.timerid == 300)
        	{
        		var currDateTime = new Date();
        		if (currDateTime - ct_lastTransTime > 1000 * 60 * 120)
        		{
        			// 120분 경과시 빌링화면 close
        			alert("장시간 사용을 하지 않으셨습니다. \n화면을 닫습니다!!");
        			// alert("장시간 사용을 하지 않으셨습니다. \n다시 로그인 하여 주시기 바랍니다!!");
        			// this.fn_callLogout();
        			this.application.afn_logout();
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
        	}
        };

        /* 메뉴 경로명 생성 */
        this.fn_createMenuPath = function (menuId, bBold)
        {
        	var menuName = new Array();
        	var arrIdx = 0;
        	var currentRow = this.application.gds_menu.findRow("MENU_ID", menuId);
        	var currentLvl = this.application.gds_menu.lookup("MENU_ID", menuId, "MENU_LEVEL");
        	var formId = this.application.gds_menu.getColumn(currentRow, "PGM_ID");
        	var fullPath = "";

        	for (var i = currentRow; i > -1; i--)
        	{
        		var menuLvl = this.application.gds_menu.getColumn(i, "MENU_LEVEL");

        		if (menuLvl == currentLvl)
        		{
        			menuName[arrIdx] = this.application.gds_menu.getColumn(i, "MENU_NM");
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
        		if (j == 0){
        			if(bBold)
        				fullPath = fullPath + '<fc v="#000000">'+menuName[j]+'</fc>';
        			else
        				fullPath = fullPath + menuName[j];
        		}else
        			fullPath = fullPath + menuName[j];

        		if (j != 0)
        		{
        			fullPath = fullPath + " > ";
        		}
        	}
        	return fullPath+" ("+formId+")";
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
        	//trace("this.ds_menu.rowcount-->"+this.ds_menu.rowcount);
        	var nHeight = 34 * (this.ds_menu.rowcount);

        	this.Pdiv_list.form.grd_list.set_height(nHeight);
        	this.Pdiv_list.set_height(nHeight + 19);

        	var nX = system.screenToClientX(this, system.clientToScreenX(obj, 0) + 40);
        	var nY = system.screenToClientY(this, system.clientToScreenY(obj, 0)) + parseInt(obj.getOffsetHeight());

        	var nWidth = this.width;
        	nX = nWidth - this.Pdiv_list.width;
        	this.Pdiv_list.trackPopup(nX, nY);
        };

        this.Pdiv_list_grd_list_oncellclick = function (obj, e)
        {
        	var sMenuId = this.ds_list.getColumn(e.row, "MENU_ID");
        	var sMenuName = this.ds_list.getColumn(e.row, "MENU_NM");
        	gv_appBodyFrameSet.set_separatesize("76,*,0,0,27");
        	//this.gfn_setFrameChange("work");
        	this.Pdiv_list.closePopup();

        	gv_appLeftFrame.form.fn_changeMenu(sMenuId);
        	//gv_appLeftFrame.form.div_left.sta_title.set_text(sMenuName);

        };

        // 상위 메뉴버튼 클릭 이벤트
        this.btn_top_menu_onclick = function (obj, e)
        {
        	gv_appBodyFrameSet.set_separatesize("76,*,0,0,27");
        	//this.gfn_setFrameChange("work");
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
        	}
        	else
        	{
        		gv_appLeftFrame.form.fn_changeMenu(sMenuId);
        	}

        	for (var i = 0; i < this.div_topMenu.form.components.length; i++)
        	{
        		this.div_topMenu.form.components[i].set_cssclass("btn_TF_menu");	//btn_top_menu
        	}
        	obj.set_cssclass("btn_TF_menu_S");
        	this.btn_menuShow.set_cssclass("btn_TF_menuShow");
        	gv_appLeftFrame.fv_viewMode = true;
        	gv_appLeftFrame.form.fn_leftShowHide(gv_appLeftFrame.fv_viewMode);

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
        	this.fv_nWindowWidth = this.application.mainframe.width;
        	//trace("this.fv_nWindowWidth-->"+this.fv_nWindowWidth);
        	if (nexacro.Browser != "Runtime")
        	{
        		// browser 일 때 실행
        		// this.fv_nWindowWidth = $(window).width();
        		this.fv_nWindowWidth = e.cx;
        	}

        	this.btn_list.move((this.fv_nWindowWidth - 40), 33, 40, 40, null, null);
        	//trace("this._n_top_menu_btn_width-->"+this._n_top_menu_btn_width);

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
        	var nHeight = this.ds_list.rowcount * 34;
        	obj.form.grd_list.set_height(nHeight);
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

        this.pdv_userinfo_btn_logout_onclick = function(obj,e)
        {
        	//if (this.gfn_confirm("로그아웃 하시겠습니까?"))
        	var bOK = this.gfn_Message("LOGOUTCONFIRM", null, "conf", "yesno");
        	if (bOK == false) return;

        	this.fn_callLogout(); //로그아웃 서비스 호출

        };


        this.pdv_userinfo_btn_changeUserInfo_onclick = function(obj,e)
        {
        	var popupId = "changeUserInfo";
        	var oArg = {};
        	this.gfn_openPopup(popupId,"cmd::CMCM00100P.xfdl",oArg,"");
        };

        this.pdv_userinfo_btn_changePassword_onclick = function(obj,e)
        {
        	var popupId = "changePassword";
        	var oArg = {};
        	this.gfn_openPopup(popupId,"cmd::CMCM00200P.xfdl",oArg,"");
        };

        this.btn_language_onclick = function(obj,e)
        {
        	var top = nexacro.toNumber(obj.top);
        	var left = obj.left;//.toNumber(this.width) - nexacro.toNumber(this.pdv_userinfo.width);
        	this.ds_language.set_rowposition(this.ds_language.findRow("code",this.gf_getLanguageType()));
        	this.pdv_language.trackPopup(left, top);
        };

        this.btn_site_onclick = function(obj,e)
        {
        	var top = nexacro.toNumber(obj.top);
        	var left = obj.left;//.toNumber(this.width) - nexacro.toNumber(this.pdv_userinfo.width);
        	this.ds_site.set_rowposition(this.ds_site.findRow("CODE",this.gf_getSiteType()));
        	this.pdv_site.trackPopup(left, top);

        };

        this.btn_user_onclick = function(obj,e)
        {
        	var top = nexacro.toNumber(obj.top) + 23;
        	var left = nexacro.toNumber(this.width) - nexacro.toNumber(this.pdv_userinfo.width);
        	this.pdv_userinfo.trackPopup(left, top);

        };

        this.pdv_language_grd_language_oncellclick = function(obj,e)
        {
        	if(e.row != e.oldrow){
        	    this.btn_language.set_icon(this.ds_language.getColumn(e.row,"flag"));
        	    this.btn_language.set_text(this.ds_language.getColumn(e.row,"name"));
        		this.ds_changed.clearData();
        		this.ds_changed.addRow();
        		this.ds_changed.setColumn(0,"LANGUAGETYPE",this.ds_language.getColumn(e.row,"code"));
        		this.ds_changed.setColumn(0,"SITETYPE",this.gf_getSiteType());

        		var sSvcID = "loginPostTop";
        		var sController = "/cmsy00100/loginPostTop.do";
        		var sInDatasets = "INPUT=ds_changed";
        		var sOutDatasets = "";
        		var sArgs = "";
        		sArgs += this.gfn_setParam("method", "loginPostTop");
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        		this.pdv_language.closePopup();
        	}
        };

        this.pdv_site_grd_site_oncellclick = function(obj,e)
        {
        	if(e.row != e.oldrow){
        	    this.btn_site.set_text(this.ds_site.getColumn(e.row,"CODE"));

        		this.ds_changed.clearData();
        		this.ds_changed.addRow();
        		this.ds_changed.setColumn(0,"SITETYPE",this.ds_site.getColumn(e.row,"CODE"));
        		this.ds_changed.setColumn(0,"LANGUAGETYPE",this.gf_getLanguageType());
        		var sSvcID = "loginPostTop";
        		var sController = "/cmsy00100/loginPostTop.do";
        		var sInDatasets = "INPUT=ds_changed";
        		var sOutDatasets = "";
        		var sArgs = "";
        		sArgs += this.gfn_setParam("method", "loginPostTop");
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        		this.pdv_site.closePopup();
        	}
        };
        this.btn_menuShow_onclick = function(obj,e)
        {
        	var viewMode = gv_appLeftFrame.form.fv_viewMode;
        	gv_appLeftFrame.form.fn_leftShowHide(!viewMode);
        };
        /*
        this.btn_menuShow_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	obj.set_visible(false);
        	this.btn_menuHide.set_visible(true);
        	gv_appLeftFrame.form.fn_leftShowHide(true);
        };

        this.btn_menuHide_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	obj.set_visible(false);
        	this.btn_menuShow.set_visible(true);
        	gv_appLeftFrame.form.fn_leftShowHide(false);
        };
        */
        /*site map*/
        this.btn_sitemap_onclick = function(obj,e)
        {
        	var popupId = "EMAIL";
        	var oArg = {};
        	this.gfn_openPopup(popupId,"cmd::SITEMAP.xfdl",oArg,"width=1278,height=800");
        };

        this.pdv_userinfo_oncloseup = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.topFrame_onsize,this);
            this.addEventHandler("oninit",this.form_onload,this);
            this.pdv_userinfo.addEventHandler("oncloseup",this.pdv_userinfo_oncloseup,this);
            this.pdv_userinfo.form.btn_changePassword.addEventHandler("onclick",this.pdv_userinfo_btn_changePassword_onclick,this);
            this.pdv_userinfo.form.btn_changeUserInfo.addEventHandler("onclick",this.pdv_userinfo_btn_changeUserInfo_onclick,this);
            this.pdv_userinfo.form.btn_logout.addEventHandler("onclick",this.pdv_userinfo_btn_logout_onclick,this);
            this.Pdiv_list.addEventHandler("onpopup",this.Pdiv_list_onpopup,this);
            this.Pdiv_list.form.grd_list.addEventHandler("oncellclick",this.Pdiv_list_grd_list_oncellclick,this);
            this.btn_list.addEventHandler("onclick",this.btn_list_onclick,this);
            this.btn_menuShow.addEventHandler("onclick",this.btn_menuShow_onclick,this);
            this.btn_language.addEventHandler("onclick",this.btn_language_onclick,this);
            this.btn_site.addEventHandler("onclick",this.btn_site_onclick,this);
            this.pdv_language.form.grd_language.addEventHandler("oncellclick",this.pdv_language_grd_language_oncellclick,this);
            this.pdv_site.form.grd_site.addEventHandler("oncellclick",this.pdv_site_grd_site_oncellclick,this);
            this.btn_user.addEventHandler("onclick",this.btn_user_onclick,this);
            this.btn_menuHide.addEventHandler("onclick",this.btn_menuHide_onclick,this);
            this.btn_sitemap.addEventHandler("onclick",this.btn_sitemap_onclick,this);
            this.ds_menuTemp.addEventHandler("onload",this.ds_Menu_onload,this);
        };
        this.loadIncludeScript("frmTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
