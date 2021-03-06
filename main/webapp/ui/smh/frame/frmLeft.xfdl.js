(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fm_left");
            this.set_titletext("left");
            if (Form == this.constructor)
            {
                this._setFormPosition(251,710);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_myMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"32\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_TOP\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"DEL_AUTH_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"32\"/><Column id=\"JOB_MENU_ID\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"UPD_AUTH_YN\" type=\"STRING\" size=\"32\"/><Column id=\"ORDR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"INS_AUTH_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_RM\" type=\"STRING\" size=\"32\"/><Column id=\"QRY_AUTH_YN\" type=\"STRING\" size=\"32\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"FAVORITES_MVMN_URL\" type=\"STRING\" size=\"100\"/><Column id=\"FAVORITES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATMC_LOAD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FAVORITES_PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"FAVORITES_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FAVORITES_MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_SEQ\">49</Col><Col id=\"MENU_NM\">즐겨찾기</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ID\">999999</Col><Col id=\"MENU_GRP\">999999</Col><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TOP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_OPTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ARGS\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_EXTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_RM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">1000</Col><Col id=\"PAGE_ID\"/><Col id=\"MENU_NM\">운영관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\"/><Col id=\"MENU_SEQ\">49</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\"/><Col id=\"UPDATE_USER\"/><Col id=\"UPDATE_DT\"/><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\"/><Col id=\"PAGE_EXTP\"/><Col id=\"MENU_AUTH\"/></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">100010</Col><Col id=\"PAGE_ID\"/><Col id=\"MENU_NM\">공통코드관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">100011</Col><Col id=\"PAGE_ID\">CMCM01100M</Col><Col id=\"MENU_NM\">공통코드관리</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">100010</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PAGE_URL\">cmcm::CMCM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">100020</Col><Col id=\"PAGE_ID\"/><Col id=\"MENU_NM\">메시지 관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">100021</Col><Col id=\"PAGE_ID\">CMMM01100M</Col><Col id=\"MENU_NM\">메시지 목록</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">100020</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PAGE_URL\">cmmm::CMMM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">100022</Col><Col id=\"PAGE_ID\">CMMM01300M</Col><Col id=\"MENU_NM\">메시지 등록</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">100020</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PAGE_URL\">cmmm::CMMM01300M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">3000</Col><Col id=\"PAGE_ID\"/><Col id=\"MENU_NM\">작업/모니터링</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">3000</Col><Col id=\"MENU_TOP\">3000</Col><Col id=\"MENU_SEQ\">51</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ID\">300010</Col><Col id=\"PAGE_ID\"/><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"MENU_NM\">시스템로그</Col><Col id=\"MENU_GRP\">3000</Col><Col id=\"MENU_TOP\">3000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col></Row><Row><Col id=\"MENU_ID\">300012</Col><Col id=\"MENU_NM\">시스템로그 목록</Col><Col id=\"PAGE_ID\">CMLM01100M</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">3000</Col><Col id=\"MENU_TOP\">300011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">CMLM::CMLM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">4000</Col><Col id=\"PAGE_ID\"/><Col id=\"MENU_NM\">개발가이드 참조</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">4000</Col><Col id=\"MENU_SEQ\">51</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400010</Col><Col id=\"PAGE_ID\"/><Col id=\"MENU_NM\">GUIDE</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">4000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400012</Col><Col id=\"PAGE_ID\">Guide_01</Col><Col id=\"MENU_NM\">Guide_01.Static,Edit,TextArea</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">guide::Guide_01.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400013</Col><Col id=\"PAGE_ID\">Guide_02</Col><Col id=\"MENU_NM\">Guide_02.Button</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">guide::Guide_02.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400014</Col><Col id=\"PAGE_ID\">Guide_03</Col><Col id=\"MENU_NM\">Guide_03.Box,Calendar</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">guide::Guide_03.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_AUTH\">1111</Col><Col id=\"MENU_ID\">400015</Col><Col id=\"PAGE_ID\">Guide_04</Col><Col id=\"MENU_NM\">Guide_04.Grid</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">guide::Guide_04.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400016</Col><Col id=\"PAGE_ID\">Guide_05</Col><Col id=\"MENU_NM\">Guide_05.GroupBox,Bar,Radio,Tab</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">guide::Guide_05.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400017</Col><Col id=\"PAGE_ID\">Guide_06</Col><Col id=\"MENU_NM\">Guide_06.Search,Input</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">guide::Guide_06.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400018</Col><Col id=\"PAGE_ID\">Guide_07</Col><Col id=\"MENU_NM\">Guide_07.MDI,GNB</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">guide::Guide_07.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400020</Col><Col id=\"PAGE_ID\"/><Col id=\"MENU_NM\">TEMPLATE</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">4000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400026</Col><Col id=\"PAGE_ID\">TemplateGuide_001</Col><Col id=\"MENU_NM\">화면_조회_그리드형</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">template::TemplateGuide_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400027</Col><Col id=\"PAGE_ID\">TemplateGuide_002</Col><Col id=\"MENU_NM\">화면_조회_게시판형</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">template::TemplateGuide_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400028</Col><Col id=\"PAGE_ID\">TemplateGuide_003</Col><Col id=\"MENU_NM\">화면_입력_일반형</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">template::TemplateGuide_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400029</Col><Col id=\"PAGE_ID\">TemplateGuide_004</Col><Col id=\"MENU_NM\">화면_입력_탭형</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">template::TemplateGuide_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400030</Col><Col id=\"PAGE_ID\">TemplateGuide_005</Col><Col id=\"MENU_NM\">화면_그래프</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">template::TemplateGuide_005.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400031</Col><Col id=\"PAGE_ID\">TemplateGuide_006</Col><Col id=\"MENU_NM\">화면_메시지</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">template::TemplateGuide_006.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400032</Col><Col id=\"PAGE_ID\">TemplateGuide_007</Col><Col id=\"MENU_NM\">화면_통계_그래프</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">template::TemplateGuide_007.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400033</Col><Col id=\"PAGE_ID\">TemplateGuide_008</Col><Col id=\"MENU_NM\">화면_통계_표</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">template::TemplateGuide_008.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400035</Col><Col id=\"PAGE_ID\">PopUp_001</Col><Col id=\"MENU_NM\">팝업_분할지급/다수령인지급</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">template::PopUp_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400036</Col><Col id=\"PAGE_ID\">PopUp_002</Col><Col id=\"MENU_NM\">팝업_조회</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">template::PopUp_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400037</Col><Col id=\"PAGE_ID\">PopUp_003</Col><Col id=\"MENU_NM\">팝업_입력</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">template::PopUp_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400038</Col><Col id=\"PAGE_ID\">PopUp_004</Col><Col id=\"MENU_NM\">팝업_도움말</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">template::PopUp_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400039</Col><Col id=\"PAGE_ID\">PopUp_005</Col><Col id=\"MENU_NM\">팝업_메세지</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PAGE_URL\">template::PopUp_005.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_LF_bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tab","0","0",null,null,"10","36",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("1");
            obj.set_tabbuttonheight("30");
            obj.set_cssclass("tab_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab);
            obj.set_text("메뉴");
            obj.set_border("0px none");
            obj.set_tooltiptext("2C7E43320602457E82533EF0AB3ECCDF");
            this.tab.addChild(obj.name, obj);

            obj = new Static("sta_lfTitle","10","13",null,"30","0",null,null,null,null,null,this.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LF_title");
            obj.set_text("시스템 관리");
            this.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdLeft","10","46",null,null,"0","0",null,null,null,null,this.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_menu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,all");
            obj.set_scrollbartype("auto");
            obj.set_cssclass("grd_LF_menu");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("false");
            obj.set_treeasynctoggle("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"23\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" tooltiptext=\"bind:MENU_NM\" cssclass=\"expr:MENU_LEVEL==&quot;2&quot;?&apos;lev0&apos;:&apos;&apos;\" treestartlevel=\"2\"/><Cell col=\"1\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\" cssclass=\"expr:MENU_LEVEL==&quot;2&quot;?&apos;lev0&apos;:&apos;&apos;\" padding=\"0px\" treestartlevel=\"2\"/></Band></Format></Formats>");
            this.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab);
            obj.set_text("나의 메뉴");
            obj.set_border("0px none");
            obj.set_tooltiptext("FAVORITE");
            this.tab.addChild(obj.name, obj);

            obj = new Static("Static00","10","13",null,"30","0",null,null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("나의 메뉴");
            obj.set_cssclass("txt_16B");
            obj.set_tooltiptext("FAVORITE");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_deleteAllFavorite",null,null,"72","27","0","5",null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("전체삭제");
            obj.set_cssclass("btn_pop_no");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DELETE");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_saveFavorite",null,null,"72","27","btn_deleteAllFavorite:5","5",null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("설정저장");
            obj.set_cssclass("btn_pop_yes");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            obj.set_tooltiptext("SAVE");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grdMyMenu","10","46",null,null,"0","40",null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_myMenu");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,null");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_LF_mymenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"164\"/><Column size=\"30\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:ATMC_LOAD_YN\" tooltiptext=\"Automatic Loading\"/><Cell col=\"1\" text=\"bind:FAVORITES_MENU_NM\" tooltiptext=\"bind:FAVORITES_MENU_NM\" treestartlevel=\"1\" treelevel=\"bind:MENU_LEVEL\"/><Cell col=\"2\" cssclass=\"cell_delete\" tooltiptext=\"Delete Row\"/></Band></Format></Formats>");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_LF_menu","334","0","251","490",null,null,null,null,null,null,this);
            obj.set_text("pdiv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Tab("tab","0","0",null,null,"10","31",null,null,null,null,this.pdv_LF_menu.form);
            obj.set_taborder("1");
            obj.set_tabindex("1");
            obj.set_tabbuttonheight("30");
            obj.set_cssclass("tab_LF_menu");
            this.pdv_LF_menu.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.pdv_LF_menu.form.tab);
            obj.set_text("메뉴");
            obj.set_tooltiptext("2C7E43320602457E82533EF0AB3ECCDF");
            this.pdv_LF_menu.form.tab.addChild(obj.name, obj);

            obj = new Static("sta_lfTitle","10","13",null,"30","0",null,null,null,null,null,this.pdv_LF_menu.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("시스템 관리");
            obj.set_cssclass("sta_LF_title");
            this.pdv_LF_menu.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdLeft","10","46",null,null,"0","0",null,null,null,null,this.pdv_LF_menu.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_menu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,all");
            obj.set_scrollbartype("auto");
            obj.set_cssclass("grd_LF_menu");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("false");
            obj.set_treeasynctoggle("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"217\"/><Column size=\"23\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" tooltiptext=\"bind:MENU_NM\" cssclass=\"expr:MENU_LEVEL==&quot;2&quot;?&apos;lev0&apos;:&apos;&apos;\" treestartlevel=\"1\" treelevel=\"bind:MENU_LEVEL\"/><Cell col=\"1\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\" cssclass=\"expr:MENU_LEVEL==&quot;2&quot;?&apos;lev0&apos;:&apos;&apos;\" padding=\"0px\" treestartlevel=\"2\"/></Band></Format></Formats>");
            this.pdv_LF_menu.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.pdv_LF_menu.form.tab);
            obj.set_text("나의 메뉴");
            obj.set_border("0px none");
            obj.set_tooltiptext("FAVORITE");
            this.pdv_LF_menu.form.tab.addChild(obj.name, obj);

            obj = new Static("Static00","10","13",null,"30","0",null,null,null,null,null,this.pdv_LF_menu.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("나의 메뉴");
            obj.set_font("normal 700 16px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            obj.set_tooltiptext("FAVORITE");
            this.pdv_LF_menu.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_deleteAllFavorite",null,null,"72","27","0","5",null,null,null,null,this.pdv_LF_menu.form.tab.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("전체삭제");
            obj.set_cssclass("btn_pop_no");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DELETE");
            this.pdv_LF_menu.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_saveFavorite",null,null,"72","27","btn_deleteAllFavorite:5","5",null,null,null,null,this.pdv_LF_menu.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("설정저장");
            obj.set_cssclass("btn_pop_yes");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            obj.set_tooltiptext("SAVE");
            this.pdv_LF_menu.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grdMyMenu","10","46",null,null,"0","42",null,null,null,null,this.pdv_LF_menu.form.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_myMenu");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,null");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_LF_mymenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"172\"/><Column size=\"27\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:ATMC_LOAD_YN\" tooltiptext=\"Automatic Loading\"/><Cell col=\"1\" text=\"bind:FAVORITES_MENU_NM\" tooltiptext=\"bind:MENU_NM\" treestartlevel=\"1\" treelevel=\"bind:MENU_LEVEL\"/><Cell col=\"2\" cssclass=\"cell_delete\" tooltiptext=\"Delete Row\"/></Band></Format></Formats>");
            this.pdv_LF_menu.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new CheckBox("ckb_new","7",null,"150","26",null,"0",null,null,null,null,this.pdv_LF_menu.form);
            obj.set_taborder("1");
            obj.set_text("화면 새창 열림");
            obj.set_tooltiptext("OpenNewWindow");
            this.pdv_LF_menu.addChild(obj.name, obj);

            obj = new CheckBox("ckb_new","7",null,"150","26",null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("화면 새창 열림");
            obj.set_tooltiptext("OpenNewWindow");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",251,710,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLeft.xfdl", function() {
        /*
         * 01. 업무구분 : frame
         * 02. 화면명   : leftFrame.xfdl
         * 03. 화면설명 : 프레임 메뉴화면
         * 04. 작성일   : 2017.01.21
         * 05. 작성자   : sian
         * 06. 수정이력 :
         *********************************************************************
         *     수정일          이  름    사유
         *********************************************************************
         *
         *********************************************************************
         */

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        // var gfnXjs = new GfnXjs();

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        this.application = null;
        this.fv_viewMode = false;
        var setMyMenuIdx = 0; //즐겨찾기 메뉴 호출 시점 확인을 위한 인덱스
        var myMenuExpandIdx = 1; //즐겨찾기 확장버튼 인덱스
        var oldRow;
        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fm_left_onload = function(obj,e)
        {
        	this.nfn_formInit(obj);

        	this.pdv_LF_menu.form.tab.Tabpage1.form.grdLeft.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	this.pdv_LF_menu.form.tab.Tabpage1.form.grdLeft.removeEventHandler("onrbuttondown", this.nfn_grd_onrbuttondown , this);
        	this.pdv_LF_menu.form.tab.Tabpage1.form.grdLeft.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        	this.pdv_LF_menu.form.tab.Tabpage1.form.grdLeft.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리
        	this.pdv_LF_menu.form.tab.Tabpage2.form.grdMyMenu.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	this.pdv_LF_menu.form.tab.Tabpage2.form.grdMyMenu.removeEventHandler("onrbuttondown", this.nfn_grd_onrbuttondown , this);
        	this.pdv_LF_menu.form.tab.Tabpage2.form.grdMyMenu.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        	this.pdv_LF_menu.form.tab.Tabpage2.form.grdMyMenu.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리

        	this.tab.Tabpage1.form.grdLeft.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	this.tab.Tabpage1.form.grdLeft.removeEventHandler("onrbuttondown", this.nfn_grd_onrbuttondown , this);
        	this.tab.Tabpage1.form.grdLeft.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        	this.tab.Tabpage1.form.grdLeft.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리
        	this.tab.Tabpage2.form.grdMyMenu.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	this.tab.Tabpage2.form.grdMyMenu.removeEventHandler("onrbuttondown", this.nfn_grd_onrbuttondown , this);
        	this.tab.Tabpage2.form.grdMyMenu.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        	this.tab.Tabpage2.form.grdMyMenu.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리

        	this.application = nexacro.getApplication();
        	/* 즐겨찾기 메뉴 가져오기 */
        	this.fn_myMenuInit();
        	this.ds_menu.clearData();
        	this.tab.Tabpage1.form.sta_lfTitle.set_text("");
        	//전체메뉴(gds_menu) 에서 첫번째 메뉴 open
        	//var sMenuId = this.application.gds_menu.lookup("MENU_LEVEL", "0", "MENU_ID");

        	//this.fn_changeMenu(sMenuId);

        	var sAppName = this.application.id;
        	// LeftFrame load완료 체크
        	this.application.bLeftLoad = true;

        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
         this.fn_callBack = function(strSvcId, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode < 0)
        	{
        		//alert(strErrorMsg);
        		return;
        	}

        	switch ( strSvcId )
        	{
        		case "selectFavoritesAuto":
        			//trace(this.ds_myMenu.saveXML());
        			this.fn_autoLoading();
        			this.nfn_formInit(this);
        			this.pdv_LF_menu.form.tab.Tabpage1.form.grdLeft.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        			this.pdv_LF_menu.form.tab.Tabpage1.form.grdLeft.removeEventHandler("onrbuttondown", this.nfn_grd_onrbuttondown , this);
        			this.pdv_LF_menu.form.tab.Tabpage1.form.grdLeft.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        			this.pdv_LF_menu.form.tab.Tabpage1.form.grdLeft.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리
        			this.pdv_LF_menu.form.tab.Tabpage2.form.grdMyMenu.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        			this.pdv_LF_menu.form.tab.Tabpage2.form.grdMyMenu.removeEventHandler("onrbuttondown", this.nfn_grd_onrbuttondown , this);
        			this.pdv_LF_menu.form.tab.Tabpage2.form.grdMyMenu.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        			this.pdv_LF_menu.form.tab.Tabpage2.form.grdMyMenu.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리

        			this.tab.Tabpage1.form.grdLeft.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        			this.tab.Tabpage1.form.grdLeft.removeEventHandler("onrbuttondown", this.nfn_grd_onrbuttondown , this);
        			this.tab.Tabpage1.form.grdLeft.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        			this.tab.Tabpage1.form.grdLeft.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리
        			this.tab.Tabpage2.form.grdMyMenu.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        			this.tab.Tabpage2.form.grdMyMenu.removeEventHandler("onrbuttondown", this.nfn_grd_onrbuttondown , this);
        			this.tab.Tabpage2.form.grdMyMenu.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        			this.tab.Tabpage2.form.grdMyMenu.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리
        			break;
        		case "selectFavorites":
        			//trace(this.ds_myMenu.saveXML());
        			break;
        		case "deleteMyMenu" :
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_selectFavorites();
        			break;

        		case "updateMyMenu" :
        			var updateResult = this.ds_myMenuCallback.getColumn(0, "result");
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_selectFavorites();

        			break;

        		case "deleteMyMenuAll":
        			this.gfn_Message("ProcessingSuccess", null, "info", "ok");
        			this.fn_selectFavorites();
        			break;

        		case "updateFavorites" :
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_selectFavorites();

        			break;
        		case "insertMyMenu" :
        			this.gfn_Message("SuccessAddFavorite", null, "info", "ok");//this.alert("즐겨찾기에 추가되었습니다.");
        			gv_appTopFrame.form.fn_getMyMenu(); //즐겨찾기 재조회
        /*
        			var insResult = this.ds_myMenuCallback.getColumn(0, "result");
        			if(insResult == 1)
        			{
        				this.gfn_Message("SuccessAddFavorite", null, "info", "ok");//this.alert("즐겨찾기에 추가되었습니다.");
        				gv_appTopFrame.form.fn_getMyMenu(); //즐겨찾기 재조회
        			}
        			else if(insResult == 3)
        			{
        				this.gfn_Message("HaveFavoriteMenu", null, "info", "ok");//this.alert("이미 등록된 메뉴입니다.");
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
        }
        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/



        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        this.fn_openMenu = function(sMenuId)
        {
        	var objMdiFrame = gv_appWorkTopFrame;//this.application.MdiFrame;
        	var objWorkFrame = gv_appWorkFrameSet;//this.application.WorkFrame;

        	var nFRow;
        	var sPGMPATH;
        	var sPGMID;

        	var nFRowOpen;
        	var sWinId;
        	var sMenuNm;
        	var sMenuNavi;

        	//var objMenuDs = this.application.gdsLeftMenu;
        	var objMenuDs = this.application.gds_menu;
        	var objOpenMenuDs = this.application.gdsOpenMenu;
        	nFRow 		= objMenuDs.findRow("MENU_ID", sMenuId);
        	sPGMPATH 	= objMenuDs.getColumn(nFRow, "PAGE_URL");
        	sPGMID 		= objMenuDs.getColumn(nFRow, "MENU_ID")
        	sMenuNm 	= objMenuDs.getColumn(nFRow, "MENU_NM");
        	nFRowOpen = objOpenMenuDs.findRow("MENU_ID", sMenuId);
        	sWinId = objOpenMenuDs.getColumn(nFRowOpen, "WINID");

        	if (nFRow==-1)
        	{
        		this.gfn_Message("MenuNotFound", null, "warning", "ok");//alert("Menu가 존재하지 않습니다.");
        		return;

        	}else if(this.gfnIsNull(sPGMPATH)==true)
        	{
        		return;
        	}

        	if(nFRowOpen>-1)
        	{
        		objMdiFrame.form.fn_ActiveTabPage(sWinId);
        		return;
        	}
        	var nMax = gv_appTopFrame.form.fv_openMaxFrame;
        	if(objOpenMenuDs.rowcount >= nMax)
        	{
        		this.gfn_Message("CannotOpenMenuCnt", nMax, "warning", "ok");//alert("메뉴는  50개를 초과하여 오픈할 수 없습니다.");
        		return;
        	}

        	sWinId = sMenuId + "_" + objOpenMenuDs.rowcount+ "_" + parseInt(Math.random() * 100);

        	var oParam = { FORM_ID : sWinId,
        				   MENU_NM : sMenuNm,
        				   FORM_URL : sPGMPATH	//sPGMPATH+"::"+sPGMID
        				   };

        	var objChildFrame = new ChildFrame();
        	objChildFrame.init(sWinId, 0, 0, null, null, 0, 0);

        	objWorkFrame.addChild(objChildFrame.name, objChildFrame);
        	objChildFrame.param = oParam;
        	objChildFrame._namespace = sMenuId;
        	objChildFrame._menuid   =  sMenuId;
        	objChildFrame._menuname =  sMenuNm;
        	objChildFrame._pageurl  =  sPGMPATH;
        	//objChildFrame._menuauth =  smenuAuth;
        	//objChildFrame._titlepath=  sTitlePath;

        	objChildFrame.set_resizable(true);
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_openstatus("maximize");
        	objChildFrame.set_formurl("frame::frmWork.xfdl");
        	objChildFrame.show();


        	objMdiFrame.form.fn_AddTabPage(sWinId, sMenuNm);
        	gv_appTopFrame.form.fn_insertJobMenuLogs(sMenuId);
        	this.fn_AddOpenMenu(sWinId, sMenuId, sMenuNm);

        	objMdiFrame.form.fn_ActiveTabPage(sWinId);
        }

        /*****************************************************************************
        함 수 명 칭 : gfnAddOpenMenu
        함 수 설 명 : 열린화면리스트 저장
        파 라 미 터 : pvWinId – 업무화면 ID
        			   pvMenuCd – 메뉴코드
        			   pvMenuNm – 메뉴명
        리 턴 내 용 : 없음
        *****************************************************************************/
        this.fn_AddOpenMenu = function(pvWinId, pvMenuCd, pvMenuNm)
        {
        	var objOpenMenuDs = this.application.gdsOpenMenu;

        	var nAddRow = objOpenMenuDs.addRow();
        	objOpenMenuDs.setColumn(nAddRow, "WINID", pvWinId);
        	objOpenMenuDs.setColumn(nAddRow, "MENU_ID", pvMenuCd);
        	objOpenMenuDs.setColumn(nAddRow, "MENU_NM", pvMenuNm);

        }

        /*****************************************************************************
        함 수 명 칭 : gfnDelOpenMenu
        함 수 설 명 : 열린화면리스트 삭제
        파 라 미 터 : pvWinId – 업무화면 ID
        리 턴 내 용 : 없음
        *****************************************************************************/
        this.fn_DelOpenMenu = function(pvWinId)
        {
        	var objOpenMenuDs = this.application.gdsOpenMenu;

        	var nRow = objOpenMenuDs.findRow("WINID", pvWinId);

        	objOpenMenuDs.deleteRow(nRow);
        }

        this.fn_selectFavorites = function(a)
        {
        	var sSvcID        	= "selectFavorites"+a;
            var sController   	= "/penc00010/selectFavorites.do";
        	var sOutDatasets  	= "ds_myMenu=ds_myMenuInfo";
        	var sArgs = "";
        	var sCallbackFunc = "fn_callBack";

        	this.gfn_transaction(sSvcID, sController, "", sOutDatasets, sArgs, sCallbackFunc);
        }

        this.fn_delMyMenu = function(favolId)
        {
        	var sSvcID        	= "deleteMyMenu";
            var sController   	= "/penc00010/deleteFavorites.do";
        	var sOutDatasets  	= "ds_myMenuCallback=ds_output";
        	var sArgs = "";
        		sArgs += this.gfn_setParam("FAVORITES_ID", favolId);
        	var sCallbackFunc = "fn_callBack";

        	this.gfn_transaction(sSvcID, sController, "", sOutDatasets, sArgs, sCallbackFunc);
        }
        this.fn_delMyMenuAll = function()
        {
        	var sSvcID        	= "deleteMyMenuAll";
            var sController   	= "/penc00010/deleteFavoritesAll.do";
        	var sOutDatasets  	= "ds_myMenuCallback=ds_output";
        	var sArgs = "";
        	var sCallbackFunc = "fn_callBack";

        	this.gfn_transaction(sSvcID, sController, "", sOutDatasets, sArgs, sCallbackFunc);
        }
        this.fn_autoLoading = function()
        {
        	for(var i=0; i<this.ds_myMenu.rowcount; i++){
        		var sMenuId = this.ds_myMenu.getColumn(i, "FAVORITES_MENU_ID");
        		if(this.ds_myMenu.getColumn(i, "ATMC_LOAD_YN")=="1"){
        			this.gfn_showWork(sMenuId, "", false);
        		}
        	}
        }

        /*****************************************************************************
        함 수 명 칭 : gfnIsNull
        함 수 설 명 : 입력값 Null 체크 함수
        파 라 미 터 : pvVal – 입력값
        리 턴 내 용 : true/false 값이 Null일 경우 true
        *****************************************************************************/
        this.gfnIsNull = function (pvVal)
        {
        	if (new String(pvVal).valueOf() == "undefined")
        	{
        		return true;
        	}
        	if (pvVal == null)
        	{
        		return true;
        	}
        	if (("x" + pvVal == "xNaN") && (new String(pvVal.length).valueOf() == "undefined"))
        	{
        		return true;
        	}
        	if (pvVal.length == 0)
        	{
        		return true;
        	}

        	return false;
        }


        this.fn_leftShowHide = function(viewMode)
        {
        	trace(viewMode);
        	var mframeWidth = this.application.mainframe.width;
        	var mframeHeight = this.application.mainframe.height;
        	var top = gv_appLeftFrame.getOffsetTop() + 76;
        	var left = gv_appLeftFrame.getOffsetLeft();
        	trace("mframeWidth-->"+mframeWidth);
        	if(mframeWidth<1530){
        		if(viewMode){
        			this.pdv_LF_menu.set_height(mframeHeight - 76);
        			this.pdv_LF_menu.trackPopup(left, top, 251, this.pdv_LF_menu.height, "fn_CallbackPdvMenu");
        			this.fv_strSeparatesize = "0,*";
        			gv_appBodySubFrameSet.set_separatesize(this.fv_strSeparatesize);
        		}else{
        			this.pdv_LF_menu.closePopup();
        		}
        	}else{
        		if(viewMode){
        			this.fv_strSeparatesize = "251,*";
        			gv_appBodySubFrameSet.set_separatesize(this.fv_strSeparatesize);
        			this.pdv_LF_menu.closePopup();
        		}else{
        			this.fv_strSeparatesize = "0,*";
        			gv_appBodySubFrameSet.set_separatesize(this.fv_strSeparatesize);
        		}
        	}

        	if(viewMode){
        		gv_appTopFrame.form.btn_menuShow.set_cssclass("btn_TF_menuShow");
        		gv_appTopFrame.form.btn_menuShow.tooltiptext = "OpenLeftMenu";
        		var dictionaryname =  this.nfn_getDictionaryname(gv_appTopFrame.form.btn_menuShow.tooltiptext,true);
        		gv_appTopFrame.form.btn_menuShow.set_tooltiptext(dictionaryname);

        		this.tab.set_tabindex(0);
        		this.pdv_LF_menu.form.tab.set_tabindex(0);
        	}else{
        		gv_appTopFrame.form.btn_menuShow.set_cssclass("btn_TF_menuHide");
        		gv_appTopFrame.form.btn_menuShow.tooltiptext = "CloseLeftMenu";
        		var dictionaryname =  this.nfn_getDictionaryname(gv_appTopFrame.form.btn_menuShow.tooltiptext,true);
        		gv_appTopFrame.form.btn_menuShow.set_tooltiptext(dictionaryname);
        	}

        	this.fv_viewMode = viewMode;
        }
        this.fn_CallbackPdvMenu = function ()
        {
        	trace("fn_CallbackPdvMenu");
        	gv_appTopFrame.form.btn_menuShow.set_cssclass("btn_TF_menuShow");
        	this.fv_viewMode = false;

        	gv_appTopFrame.form.btn_menuShow.tooltiptext = "CloseLeftMenu";
        	var dictionaryname =  this.nfn_getDictionaryname(gv_appTopFrame.form.btn_menuShow.tooltiptext,true);
        	gv_appTopFrame.form.btn_menuShow.set_tooltiptext(dictionaryname);

        }

        /*
        this.fn_showHideCallback = function()
        {
        	if(this.fv_viewMode == "hide")
        	{
        		gv_appBodySubFrameSet.set_separatesize(this.fv_strSeparatesize);
        	}
        }
        */
        /* 즐겨찾기 초기화 */
        this.fn_myMenuInit = function()
        {
        	this.application.gds_myMenu.filter("MENU_LEVEL!='0'");
        	this.ds_myMenu.copyData(this.application.gds_myMenu, true);

        }

        this.fn_changeMenu = function (topMenuId)
        {
        	this.ds_menu.clearData();
        	var nRow = this.application.gds_menu.findRow("MENU_ID", topMenuId);
        	var sTopMenuNm = this.application.gds_menu.getColumn(nRow, "MENU_NM");
        	//var filterExpr = ct_menuGidCol + "==" + nexacro.wrapQuote(topMenuId) + "&&" + ct_menuLvlCol + "!='0'" + "&&" + ct_menuUseYnCol + "=='Y' && QRY_AUTH_YN == 'Y'";
        	//var filterExpr = ct_menuGidCol + "==" + nexacro.wrapQuote(topMenuId) + "&&" + ct_menuLvlCol + "!='1'" + "&&" + ct_menuUseYnCol + "=='Y' && "+ct_menuPopupYnCol+"=='N'";
        	var filterExpr = ct_menuGidCol + "==" + nexacro.wrapQuote(topMenuId) + "&&" + ct_menuLvlCol + "!='1'" + "&&" + ct_menuUseYnCol + "=='Y'";

        	//alert(filterExpr);
        	this.application.gds_menu.filter(filterExpr);
        	this.ds_menu.copyData(this.application.gds_menu, true);

        	//alert(this.ds_menu.rowcount);

        	this.application.gds_menu.filter("");
        	this.ds_menu.applyChange();

        	this.tab.Tabpage1.form.sta_lfTitle.set_text(sTopMenuNm);
        	this.pdv_LF_menu.form.tab.Tabpage1.form.sta_lfTitle.set_text(sTopMenuNm);
        }

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

        this.tab_Tabpage2_grdMyMenu_oncellclick = function(obj,e)
        {
        	if(e.col == 1){
        		var sMenuId = this.ds_myMenu.getColumn(e.row, "FAVORITES_MENU_ID");
        		if(!this.gfn_isNull(this.ds_myMenu.getColumn(e.row, "FAVORITES_PAGE_URL"))){
        			this.pdv_LF_menu.closePopup();
        			//this.fn_openMenu(sMenuId);
        			this.application.mainframe.VFrameSet.HFrameSet0.VFrameSet0.set_separatesize("30,0,*");

        			if(myMenuExpandIdx == 1)
        			{
        				//menu 클릭 이벤트 호출
        				//this.grd_Menu_oncellclick(obj, e);

        				var mLevel = this.ds_myMenu.getColumn(e.row, "MENU_LEVEL"); //즐겨찾기 메뉴레벨

        					var fUrl = this.ds_myMenu.getColumn(e.row, "FAVORITES_PAGE_URL"); //즐겨찾기 페이지URL
        					var fName = this.ds_myMenu.getColumn(e.row, "FAVORITES_MENU_NM"); //즐겨찾기 이름
        					var jobId = this.ds_myMenu.getColumn(e.row, "FAVORITES_MENU_ID"); //즐겨찾기 업무메뉴아이디 (새창 아이디값 생성용)
        					var mvmnUrl = this.ds_myMenu.getColumn(e.row, "FAVORITES_MVMN_URL"); //즐겨찾기 풀유알엘

        					var mMenuId;

        					//var myRowCount = this.ds_myMenu.getRowCount();
        					var myRowCount = 0;
        					var menuRowCount = this.application.gds_menu.getRowCount(); //가지고 있는 메뉴 총 row카운트

        					for(var i=myRowCount+1; i<menuRowCount ; i++)
        					{
        						var tempUrl = this.application.gds_menu.getColumn(i , "PAGE_URL");
        						var tempName = this.application.gds_menu.getColumn(i , "MENU_NM");
        						var tempYn = this.application.gds_menu.getColumn(i , "USE_YN");
        						if((fUrl == tempUrl) && (fName == tempName) && (tempYn == "Y"))
        						{
        							mMenuId = this.application.gds_menu.getColumn(i , "MENU_ID");
        						}
        					}

        					if( this.gfn_isNull(mMenuId) ) //받아온 메뉴아이디 값이 없을 경우(해당 URL이 gds_menu에 존재하지 않음)
        					{
        						var objNewWin= window.open("", jobId);	//새창으로 열기
        						if(objNewWin.location.href == "about:blank")
        						{
        							objNewWin.location.href = mvmnUrl;
        						}
        						objNewWin.focus();
        					}
        					else //받아온 메뉴아이디 값이 있을 경우(해당 URL이 gds_menu에 존재)
        					{
        						if (this.pdv_LF_menu.form.ckb_new.value == true) //화면 새창 열림 체크되어 있는 경우
        						{
        							this.gfn_newPopup(mMenuId);
        						}
        						else
        						{
        							this.gfn_showWork(mMenuId, "", false); //mdi탭으로 해당페이지 오픈
        						}
        					}
        			}

        			myMenuExpandIdx = 1;
        		}
        	}else if(e.col == 2){
        		//var bRet = this.gfn_confirm("IMCMJC0049");
        		var bRet = this.gfn_Message("DeleteFavorite", null, "conf", "yesno");//this.confirm("삭제하시겠습니까?");//
        		if(bRet)
        		{
        			var favolId = this.ds_myMenu.getColumn(e.row, "FAVORITES_ID");
        			this.fn_delMyMenu(favolId);

        			//그리드 주어진 행에 바인드 데이타셋 행을 찾아서 삭제
        			var nDsRow = obj.getDatasetRow(e.row);
        			var nParentRow = obj.getTreeParentRow(e.row, true);
        			this.ds_myMenu.deleteRow(nDsRow);

        			//주어진 트리 행이 자식이 없는 행 이면 삭제
        			bRet = obj.isTreeLeafRow(nParentRow, true);
        			if(bRet) this.ds_myMenu.deleteRow(nParentRow);
        		}
        		else
        		{
        			myMenuExpandIdx = 0;
        		}
        	}
        };


        this.tab_Tabpage1_grdLeft_oncellclick = function(obj,e)
        {
        	var sMenuId = this.ds_menu.getColumn(e.row, "MENU_ID");
        	//this.fn_openMenu(sMenuId);
        	//this.gfn_showWork(sMenuId);
        	var smenuId;
            var nTreeRow = obj.getTreeRow(e.row);
        	var sUrl = obj.getBindDataset().getColumn(e.row, "PAGE_URL");
        	if(e.col==1){
        			if(obj.getTreeStatus(nTreeRow))
        			{
        				obj.setTreeStatus(nTreeRow,true);
        			}
        			else
        			{
        				obj.setTreeStatus(nTreeRow,false);
        			}
        	}else{
        		if(this.gfn_isNull(this.ds_menu.getColumn(e.row, "PAGE_URL")) && this.ds_menu.getColumn(e.row, "MENU_LEVEL")=="2"){
        			if(obj.getTreeStatus(nTreeRow))
        			{
        				obj.setTreeStatus(nTreeRow,false);
        			}
        			else
        			{
        				obj.setTreeStatus(nTreeRow,true);
        			}
        		}
        	}

            if(this.gfn_isNull(sUrl))
            {
                var nLevel = this.ds_menu.getColumn(e.row, "MENU_LEVEL");
                var nLimit;

                switch (nLevel)
        		{
        			case "1":
        				nLimit = 35;
        				break;
        			case "2":
        				nLimit = 50;
        				break;
        			case "3":
        				nLimit = 65;
        				break;
        			default :
        				nLimit = 65;
        				break;
        		}

                /*
                if (e.clientX < nLimit) return;  //이미지 클릭한경우 return
                if(obj.getTreeStatus(nTreeRow))
                {
                    obj.setTreeStatus(nTreeRow,false);
                }
                else
                {
                    obj.setTreeStatus(nTreeRow,true);
                }
        		*/
            }
            else
            {
        	    //smenuId = obj.getBindDataset().getColumn(e.row, "MENU_ID");

        	    if ( this.gfn_isNull(sMenuId) ) return;
        		//this.application.gdsOpenMenu.filter("TITLE!='pop'")
        	    var nFindRow = this.application.gdsOpenMenu.findRow("MENU_ID", sMenuId);
        	    //이미 오픈이 되어있는경우
        	    if (nFindRow > -1){
        	        if (this.ckb_new.value == true){   //화면 새창 열림 체크되어 있는 경우
        				this.gfn_newPopup(sMenuId);
        				return;
        	        }
        			var sTitle = this.application.gdsOpenMenu.getColumn(nFindRow, "TITLE");
        	        if (sTitle == "pop"){        //팝업으로 오픈 되어있는경우
        	            //alert("이미 콘텐츠가 열려져 있습니다.");
        	            //return;
        	            this.gfn_newPopup(sMenuId);
        	        }else{
        	            this.gfn_showWork(sMenuId);	//work로 오픈 되어있는경우
        	            //if (this.div_left.ck_New.value == true){
        	            //this.alert("이미 콘텐츠가 열려져 있습니다.");//work에 떠있는 경우도 메세지 출력 (2015-04-06 반영)
        				//return;
        	            //}
        	        }
        	    }else{
        	        if (this.ckb_new.value == true){   //화면 새창 열림 체크되어 있는 경우
        				this.gfn_newPopup(sMenuId);
        			}else{
        				this.gfn_showWork(sMenuId);		           //일반 메뉴열기기능
        			}
        	    }
        	}

        /*
        	if(e.col == 0 && this.ds_menu.getColumn(e.row,"MENU_LEVEL")==2){
        		var treeStatus = this.tab.Tabpage1.form.grdLeft.getTreeStatus(e.row);
        		if(!treeStatus) this.tab.Tabpage1.form.grdLeft.setTreeStatus(e.row,true);
        	}
        	if(e.col == 1 && this.ds_menu.getColumn(e.row,"MENU_LEVEL")=="2"){
        		obj.set_treeinitstatus("collapse,all");
        		var treeRow = this.tab.Tabpage1.form.grdLeft.getTreeRow(e.row);
        		trace("treeRow-->"+treeRow);
        		if(this.tab.Tabpage1.form.grdLeft.getTreeStatus(treeRow)){
        			this.tab.Tabpage1.form.grdLeft.setTreeStatus(treeRow,false);
        		}else{
        			this.tab.Tabpage1.form.grdLeft.setTreeStatus(treeRow,true);
        		}
        	}
        */

        };

        this.pdv_LF_menu_tab_Tabpage1_grdLeft_oncellclick = function(obj,e)
        {
        	if(e.col == 0){
        		var sMenuId = this.ds_menu.getColumn(e.row, "MENU_ID");
        		var nTreeRow = obj.getTreeRow(e.row);
        		if(this.gfn_isNull(this.ds_menu.getColumn(e.row, "PAGE_URL")) && this.ds_menu.getColumn(e.row, "MENU_LEVEL")=="2"){
        			if(obj.getTreeStatus(nTreeRow))
        			{
        				obj.setTreeStatus(nTreeRow,false);
        			}
        			else
        			{
        				obj.setTreeStatus(nTreeRow,true);
        			}

        		}else{
        			this.pdv_LF_menu.closePopup();
        			//this.fn_openMenu(sMenuId);
        			this.application.mainframe.VFrameSet.HFrameSet0.VFrameSet0.set_separatesize("30,0,*");

        			var smenuId;
        			var sUrl = obj.getBindDataset().getColumn(e.row, "PAGE_URL");

        			if(this.gfn_isNull(sUrl))
        			{
        				var nLevel = this.ds_menu.getColumn(e.row, "MENU_LEVEL");
        				var nLimit;

        				switch (nLevel)
        				{
        					case "1":
        						nLimit = 35;
        						break;
        					case "2":
        						nLimit = 50;
        						break;
        					case "3":
        						nLimit = 65;
        						break;
        					default :
        						nLimit = 65;
        						break;
        				}
        				/*
        				if (e.clientX < nLimit) return;  //이미지 클릭한경우 return

        				if(obj.getTreeStatus(nTreeRow))
        				{
        					obj.setTreeStatus(nTreeRow,false);
        				}
        				else
        				{
        					obj.setTreeStatus(nTreeRow,true);
        				}
        				*/
        			}
        			else
        			{
        				//smenuId = obj.getBindDataset().getColumn(e.row, "MENU_ID");

        				if ( this.gfn_isNull(sMenuId) ) return;
        				this.application.gdsOpenMenu.filter("TITLE!='pop'")
        				var nFindRow = this.application.gdsOpenMenu.findRow("MENU_ID", sMenuId);
        				//이미 오픈이 되어있는경우
        				if (nFindRow > -1){
        					if (this.pdv_LF_menu.form.ckb_new.value == true){   //화면 새창 열림 체크되어 있는 경우
        						this.gfn_newPopup(sMenuId);
        						return;
        					}

        					var sTitle = this.application.gdsOpenMenu.getColumn(nFindRow, "TITLE");
        					if (sTitle == "pop"){        //팝업으로 오픈 되어있는경우
        						//alert("이미 콘텐츠가 열려져 있습니다.");
        						//return;
        						this.gfn_newPopup(smenuId);
        					}else{
        						this.gfn_showWork(sMenuId);	//work로 오픈 되어있는경우
        						//if (this.div_left.ck_New.value == true){
        						//this.alert("이미 콘텐츠가 열려져 있습니다.");//work에 떠있는 경우도 메세지 출력 (2015-04-06 반영)
        						//return;
        						//}
        					}
        				}else{
        					if (this.pdv_LF_menu.form.ckb_new.value == true){   //화면 새창 열림 체크되어 있는 경우
        						this.gfn_newPopup(sMenuId);
        					}else{
        						this.gfn_showWork(sMenuId);		           //일반 메뉴열기기능
        					}
        				}
        			}
        		}
        	}
        };

        this.tab_Tabpage2_btn_saveFavorite_onclick = function(obj,e)
        {
        	var bOK = this.gfn_Message("FAVORITESETTINGCONFIRM", null, "conf", "yesno");
        	if (bOK == false) return;
        	for(var i=0; i<this.ds_myMenu.rowcount;i++){
        		this.ds_myMenu.setColumn(i,"ORDR",i);
        	}
        	//trace(this.ds_myMenu.saveXML());
        	var sSvcID        	= "updateFavorites";
            var sController   	= "/penc00010/updateFavorites.do";
        	var sInDatasets 	= "ds_input=ds_myMenu:U";
        	var sOutDatasets  	= "";
        	var sArgs = "";
        	var sCallbackFunc = "fn_callBack";
        	this.gfn_transaction(sSvcID, sController,sInDatasets, sOutDatasets, sArgs, sCallbackFunc);
        };

        this.tab_Tabpage2_btn_deleteAllFavorite_onclick = function(obj,e)
        {
        	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        	if (bOK == false) return;

        	this.fn_delMyMenuAll();
        };


        this.tab_Tabpage2_grdMyMenu_onmousemove = function(obj,e)
        {
        };

        this.tab_Tabpage2_grdMyMenu_ondragmove = function(obj,e)
        {
        	//alert( e.row);

        };

        this.tab_Tabpage2_grdMyMenu_ondrag = function(obj,e)
        {
        	oldRow = e.row;
        	return true;
        };

        this.tab_Tabpage2_grdMyMenu_ondrop = function(obj,e)
        {
        	this.ds_myMenu.moveRow(oldRow,e.row);
        };

        this.pdv_LF_menu_ckb_new_onchanged = function(obj,e)
        {
        	this.ckb_new.set_value(e.postvalue);
        };

        this.ckb_new_onchanged = function(obj,e)
        {
        	this.pdv_LF_menu.form.ckb_new.set_value(e.postvalue);
        };

        this.pdv_LF_menu_oncloseup = function(obj,e)
        {
        	gv_appTopFrame.form.btn_menuShow.set_cssclass("btn_TF_menuHide");
        	gv_appTopFrame.form.btn_menuShow.tooltiptext = "CloseLeftMenu";
        	var dictionaryname =  this.nfn_getDictionaryname(gv_appTopFrame.form.btn_menuShow.tooltiptext,true);
        	gv_appTopFrame.form.btn_menuShow.set_tooltiptext(dictionaryname);

        	this.fv_viewMode = false;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fm_left_onload,this);
            this.tab.addEventHandler("onchanged",this.tab_onchanged,this);
            this.tab.Tabpage1.form.grdLeft.addEventHandler("oncellclick",this.tab_Tabpage1_grdLeft_oncellclick,this);
            this.tab.Tabpage2.form.btn_deleteAllFavorite.addEventHandler("onclick",this.tab_Tabpage2_btn_deleteAllFavorite_onclick,this);
            this.tab.Tabpage2.form.btn_saveFavorite.addEventHandler("onclick",this.tab_Tabpage2_btn_saveFavorite_onclick,this);
            this.tab.Tabpage2.form.grdMyMenu.addEventHandler("oncellclick",this.tab_Tabpage2_grdMyMenu_oncellclick,this);
            this.tab.Tabpage2.form.grdMyMenu.addEventHandler("onmousemove",this.tab_Tabpage2_grdMyMenu_onmousemove,this);
            this.tab.Tabpage2.form.grdMyMenu.addEventHandler("ondrop",this.tab_Tabpage2_grdMyMenu_ondrop,this);
            this.tab.Tabpage2.form.grdMyMenu.addEventHandler("ondrag",this.tab_Tabpage2_grdMyMenu_ondrag,this);
            this.pdv_LF_menu.addEventHandler("oncloseup",this.pdv_LF_menu_oncloseup,this);
            this.pdv_LF_menu.form.tab.Tabpage1.form.grdLeft.addEventHandler("oncellclick",this.pdv_LF_menu_tab_Tabpage1_grdLeft_oncellclick,this);
            this.pdv_LF_menu.form.tab.Tabpage2.form.btn_deleteAllFavorite.addEventHandler("onclick",this.tab_Tabpage2_btn_deleteAllFavorite_onclick,this);
            this.pdv_LF_menu.form.tab.Tabpage2.form.btn_saveFavorite.addEventHandler("onclick",this.tab_Tabpage2_btn_saveFavorite_onclick,this);
            this.pdv_LF_menu.form.tab.Tabpage2.form.grdMyMenu.addEventHandler("oncellclick",this.tab_Tabpage2_grdMyMenu_oncellclick,this);
            this.pdv_LF_menu.form.ckb_new.addEventHandler("onchanged",this.pdv_LF_menu_ckb_new_onchanged,this);
            this.ckb_new.addEventHandler("onchanged",this.ckb_new_onchanged,this);
            this.ds_myMenu.addEventHandler("onvaluechanged",this.ds_myMenu_onvaluechanged,this);
        };
        this.loadIncludeScript("frmLeft.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
