(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSY01200M");
            this.set_titletext("메뉴관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVS\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_MENU\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_OPTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ARGS\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_EXTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_RM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/><Column id=\"ISUSEPLANTAUTHORITY\" type=\"STRING\" size=\"256\"/><Column id=\"ISUSEPLANTSINGLE\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"_chk\"/><Col id=\"JOB_MENU_ID\">1000</Col><Col id=\"MENU_NM\">운영관리</Col><Col id=\"MENU_LVS\">0</Col><Col id=\"UPPER_MENU\"/><Col id=\"MENU_SEQ\">49</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\"/><Col id=\"UPDATE_USER\"/><Col id=\"UPDATE_DT\"/><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\"/><Col id=\"PAGE_EXTP\"/><Col id=\"MENU_AUTH\"/></Row><Row><Col id=\"_chk\"/><Col id=\"JOB_MENU_ID\">100010</Col><Col id=\"MENU_NM\">공통코드관리</Col><Col id=\"MENU_LVS\">1</Col><Col id=\"UPPER_MENU\">1000</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"JOB_MENU_ID\">100011</Col><Col id=\"MENU_NM\">공통코드관리</Col><Col id=\"MENU_LVS\">2</Col><Col id=\"UPPER_MENU\">100010</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PGE_URL\">cmcm::CMCM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"_chk\"/><Col id=\"JOB_MENU_ID\">100020</Col><Col id=\"MENU_NM\">메시지 관리</Col><Col id=\"MENU_LVS\">1</Col><Col id=\"UPPER_MENU\">1000</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"JOB_MENU_ID\">100021</Col><Col id=\"MENU_NM\">메시지 목록</Col><Col id=\"MENU_LVS\">2</Col><Col id=\"UPPER_MENU\">100020</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PGE_URL\">cmmm::CMMM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">100022</Col><Col id=\"MENU_NM\">메시지 등록</Col><Col id=\"MENU_LVS\">2</Col><Col id=\"UPPER_MENU\">100020</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PGE_URL\">cmmm::CMMM01300M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"_chk\"/><Col id=\"JOB_MENU_ID\">3000</Col><Col id=\"MENU_NM\">작업/모니터링</Col><Col id=\"MENU_LVS\">0</Col><Col id=\"UPPER_MENU\">3000</Col><Col id=\"MENU_SEQ\">51</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_LVS\">1</Col><Col id=\"JOB_MENU_ID\">300010</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"MENU_NM\">시스템로그</Col><Col id=\"UPPER_MENU\">3000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col></Row><Row><Col id=\"JOB_MENU_ID\">300012</Col><Col id=\"MENU_NM\">시스템로그 목록</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">300011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">CMLM::CMLM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">4000</Col><Col id=\"MENU_NM\">개발가이드 참조</Col><Col id=\"MENU_LVS\">0</Col><Col id=\"UPPER_MENU\">4000</Col><Col id=\"MENU_SEQ\">51</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400010</Col><Col id=\"MENU_NM\">GUIDE</Col><Col id=\"MENU_LVS\">1</Col><Col id=\"UPPER_MENU\">4000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400012</Col><Col id=\"MENU_NM\">Guide_01.Static,Edit,TextArea</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_01.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400013</Col><Col id=\"MENU_NM\">Guide_02.Button</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_02.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400014</Col><Col id=\"MENU_NM\">Guide_03.Box,Calendar</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_03.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_AUTH\">1111</Col><Col id=\"JOB_MENU_ID\">400015</Col><Col id=\"MENU_NM\">Guide_04.Grid</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_04.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400016</Col><Col id=\"MENU_NM\">Guide_05.GroupBox,Bar,Radio,Tab</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_05.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400017</Col><Col id=\"MENU_NM\">Guide_06.Search,Input</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_06.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400018</Col><Col id=\"MENU_NM\">Guide_07.MDI,GNB</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_07.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400020</Col><Col id=\"MENU_NM\">TEMPLATE</Col><Col id=\"MENU_LVS\">1</Col><Col id=\"UPPER_MENU\">4000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400026</Col><Col id=\"MENU_NM\">화면_조회_그리드형</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400027</Col><Col id=\"MENU_NM\">화면_조회_게시판형</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400028</Col><Col id=\"MENU_NM\">화면_입력_일반형</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400029</Col><Col id=\"MENU_NM\">화면_입력_탭형</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400030</Col><Col id=\"MENU_NM\">화면_그래프</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_005.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400031</Col><Col id=\"MENU_NM\">화면_메시지</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_006.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400032</Col><Col id=\"MENU_NM\">화면_통계_그래프</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_007.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400033</Col><Col id=\"MENU_NM\">화면_통계_표</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_008.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400035</Col><Col id=\"MENU_NM\">팝업_분할지급/다수령인지급</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::PopUp_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400036</Col><Col id=\"MENU_NM\">팝업_조회</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::PopUp_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400037</Col><Col id=\"MENU_NM\">팝업_입력</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::PopUp_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400038</Col><Col id=\"MENU_NM\">팝업_도움말</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::PopUp_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400039</Col><Col id=\"MENU_NM\">팝업_메세지</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::PopUp_005.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLATFORM_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_save",null,"0","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Toolbar_Save");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0%","21",null,"15","1.09%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","6","35","140","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("메뉴Tree");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("TREEMENULIST");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0%","59",null,"10","87.17%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","69","341",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid rgba(204,204,204,1)");
            obj.set_borderRadius("0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","15.35%","570",null,"15","78.07%",null,null,null,null,null,this.div_left.form);
            obj.set_taborder("0");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightskyblue");
            obj.set_font("9pt \"Arial\"");
            obj.set_opacity("0.5");
            this.div_left.addChild(obj.name, obj);

            obj = new Static("Static02","15.35%","546",null,"10","78.07%",null,null,null,null,null,this.div_left.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightskyblue");
            obj.set_font("9pt \"Arial\"");
            obj.set_opacity("0.5");
            this.div_left.addChild(obj.name, obj);

            obj = new Grid("grd_Menu","4","-1","335",null,null,"9",null,null,null,null,this.div_left.form);
            obj.set_cssclass("grd_LF_treeMenu");
            obj.set_taborder("2");
            obj.set_binddataset("ds_menu");
            obj.set_autosizingtype("none");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_visible("true");
            obj.set_cursor("auto");
            obj.set_border("0px solid #c7c7c7,1px solid #c7c7c7");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"305\"/></Columns><Rows><Row size=\"23\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:MENU_NM\" treestartlevel=\"-1\" treelevel=\"bind:MENU_LVS\" autosizecol=\"none\"/></Band></Format></Formats>");
            this.div_left.addChild(obj.name, obj);

            obj = new Div("div_menu","348","69",null,"284","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","15","88",null,"20","78.93%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("9");
            obj.set_text("메뉴비고");
            obj.set_font("8pt \"Dotum\"");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("DESCRIPTION");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static07","15","62",null,"20","78.93%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("10");
            obj.set_text("페이지URL");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_tooltiptext("HOMEPAGE");
            this.div_menu.addChild(obj.name, obj);

            obj = new Edit("edt_pgeUrl","24.29%","62",null,"20","48.93%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("4");
            this.div_menu.addChild(obj.name, obj);

            obj = new Edit("edt_upperMenu","71.61%","36",null,"20","0.71%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static03","54.29%","36",null,"20","30.71%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("11");
            obj.set_text("상위메뉴");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_tooltiptext("PARENTMENUID");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static00","15","36",null,"20","78.93%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("13");
            obj.set_text("메뉴레벨");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static05","15","10",null,"20","78.93%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("15");
            obj.set_text("메뉴ID");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_tooltiptext("MENUID");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static08","54.29%","10",null,"20","30.71%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("16");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_tooltiptext("MENUNAME");
            this.div_menu.addChild(obj.name, obj);

            obj = new TextArea("txt_menuRm","24.29%","88",null,"83","0.36%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("6");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static16","0%","0",null,"10","-3.24%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static17","0%","31",null,"5","-3.24%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static10","0%","57",null,"5","-3.24%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static11","0%","83",null,"5","-3.24%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static12","0%",null,null,"5","-3.24%","-15",null,null,null,null,this.div_menu.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static25","50.17%","0",null,"60","45.3%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("22");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static28","69.69%","0",null,"63","28.22%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static13","21.96%","0",null,null,"75.71%","-15",null,null,null,null,this.div_menu.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_menu.addChild(obj.name, obj);

            obj = new Edit("edt_jobMenuId","24.29%","10",null,"20","48.93%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            this.div_menu.addChild(obj.name, obj);

            obj = new Edit("edt_menuNm","71.78%","10",null,"20","0.87%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static14","0%","171",null,"5","0%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_menu.addChild(obj.name, obj);

            obj = new Combo("cbo_useYn","24.29%","176",null,"20","48.93%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            var div_menu_form_cbo_useYn_innerdataset = new nexacro.NormalDataset("div_menu_form_cbo_useYn_innerdataset", obj);
            div_menu_form_cbo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div_menu_form_cbo_useYn_innerdataset);
            obj.set_text("선택");
            obj.set_index("0");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static15","15","176",null,"20","78.93%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("26");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_tooltiptext("CCB0EDB0773C42F8BCA1B298CBC75672");
            this.div_menu.addChild(obj.name, obj);

            obj = new Edit("edt_menuLvs","24.29%","36",null,"20","48.93%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static19","54.29%","176",null,"20","30.71%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("27");
            obj.set_text("메뉴순번");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_tooltiptext("SEQ");
            this.div_menu.addChild(obj.name, obj);

            obj = new Edit("edt_menuSeq","71.78%","176",null,"20","0.87%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static20","69.69%","175",null,"63","28.22%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static21","50.17%","176",null,"60","45.3%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("29");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static04","54.29%","62",null,"20","30.71%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("30");
            obj.set_text("메뉴그룹");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_tooltiptext("GROUPCODE");
            this.div_menu.addChild(obj.name, obj);

            obj = new Edit("edt_menuGrp","71.61%","62",null,"20","0.71%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("5");
            obj.set_cssclass("essential");
            obj.set_enable("false");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static07_00","14","226",null,"20","78.93%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("12");
            obj.set_text("언어");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_tooltiptext("DICTIONARYID");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static10_00","0.00%","197",null,"5","-3.04%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","5","202",null,"20","75.71%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("31");
            obj.set_text("사이트유저권한사용여부");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_tooltiptext("ISUSEPLANTAUTHORITY");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","53.93%","202",null,"20","30.54%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("32");
            obj.set_text("단일사이트사용여부");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_tooltiptext("ISUSEPLANTSINGLE");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","0.00%","222",null,"5","-2.86%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_menu.addChild(obj.name, obj);

            obj = new Combo("cbo_ISUSEPLANTAUTHORITY","24.29%","202",null,"20","48.93%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            var div_menu_form_cbo_ISUSEPLANTAUTHORITY_innerdataset = new nexacro.NormalDataset("div_menu_form_cbo_ISUSEPLANTAUTHORITY_innerdataset", obj);
            div_menu_form_cbo_ISUSEPLANTAUTHORITY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div_menu_form_cbo_ISUSEPLANTAUTHORITY_innerdataset);
            obj.set_text("선택");
            obj.set_index("0");
            this.div_menu.addChild(obj.name, obj);

            obj = new Combo("cbo_ISUSEPLANTSINGLE","71.61%","202",null,"20","0.71%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            var div_menu_form_cbo_ISUSEPLANTSINGLE_innerdataset = new nexacro.NormalDataset("div_menu_form_cbo_ISUSEPLANTSINGLE_innerdataset", obj);
            div_menu_form_cbo_ISUSEPLANTSINGLE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div_menu_form_cbo_ISUSEPLANTSINGLE_innerdataset);
            obj.set_text("선택");
            obj.set_index("0");
            this.div_menu.addChild(obj.name, obj);

            obj = new Edit("edt_dictionaryid","24.29%","227",null,"20","48.93%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("36");
            obj.set_inputmode("upper");
            obj.set_enable("false");
            this.div_menu.addChild(obj.name, obj);

            obj = new Button("btn_dic","51.43%","227",null,"20","41.07%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("37");
            obj.set_text("찾기");
            obj.set_tooltiptext("Toolbar_Search");
            this.div_menu.addChild(obj.name, obj);

            obj = new Edit("edt_dictionaryname","59.82%","227",null,"20","0.71%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("38");
            obj.set_inputmode("upper");
            obj.set_enable("false");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static15_00","14","253",null,"20","78.93%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("39");
            obj.set_text("팝업여부");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            this.div_menu.addChild(obj.name, obj);

            obj = new Combo("cbo_popupYn","24.29%","253",null,"20","48.57%",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            var div_menu_form_cbo_popupYn_innerdataset = new nexacro.NormalDataset("div_menu_form_cbo_popupYn_innerdataset", obj);
            div_menu_form_cbo_popupYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div_menu_form_cbo_popupYn_innerdataset);
            obj.set_text("선택");
            obj.set_index("0");
            this.div_menu.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"46","60","20","75",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_DR_GridPlus");
            obj.set_tooltiptext("GridDelete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"46","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_DR_GridMinus");
            obj.set_tooltiptext("행삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","20","74",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_cssclass("btn_DR_GridSearch");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,530,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div.edt_popupNm","value","ds_popup","POPUP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div.edt_mth","value","ds_popup","MTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div.txt_qryUrl","value","ds_popup","QRY_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div.edt_popupCd00","value","ds_popup","POPUP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div.edt_mth00","value","ds_popup","MTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div.cbo_qryTy","value","ds_popup","QRY_TY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_menu.form.edt_jobMenuId","value","ds_menu","JOB_MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_menu.form.edt_menuNm","value","ds_menu","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_menu.form.edt_menuLvs","value","ds_menu","MENU_LVS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_menu.form.edt_upperMenu","value","ds_menu","UPPER_MENU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_menu.form.edt_pgeUrl","value","ds_menu","PGE_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_menu.form.txt_menuRm","value","ds_menu","MENU_RM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_menu.form.cbo_useYn","value","ds_menu","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_menu.form.edt_menuSeq","value","ds_menu","MENU_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_menu.form.edt_menuGrp","value","ds_menu","MENU_GRP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_menu.form.cbo_ISUSEPLANTAUTHORITY","value","ds_menu","ISUSEPLANTAUTHORITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_menu.form.cbo_ISUSEPLANTSINGLE","value","ds_menu","ISUSEPLANTSINGLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_menu.form.edt_dictionaryid","value","ds_menu","DICTIONARYID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_menu.form.edt_dictionaryname","value","ds_menu","DICTIONARYNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_menu.form.cbo_popupYn","value","ds_menu","POPUP_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMSY01200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 메뉴 관리
         * 파일명 		: cmsy01200.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.03.18
         *
         * 설  명		: 공통코드 조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2017.09.16	진성하   	최초작성
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
        	this.nfn_formInit(obj);

        	this.fn_search();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_menu.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLATFORM_FLAG", "W");

        	var sSvcID = "selectCmdJobMenuMngList";
        	var sController = "/cmsy01200/selectCmdJobMenuMngList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_menu=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdJobMenuMngList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	var bOK = nexacro.getApplication().confirm("저장하시겠습니까?");
        	if (bOK == false)
        	{
        		return;
        	}

        	if (!this.gfn_dsIsUpdated(this.ds_menu))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	if (this.ds_menu.rowcount > 0)
        	{
        		var component = this.div_menu;
        		var strColIdList = "edt_menuNm,cbo_useYn";
        		var strColNmList = "메뉴명,사용여부";
        		var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        		if (rtn == false)
        		{
        			return;
        		}
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveCmdJobMenuMng";
        	var sController = "/cmsy01200/saveCmdJobMenuMng.do";
        	var sInDatasets = "INPUT=ds_menu:U";
        	var sOutDatasets = "";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "saveCmdJobMenuMng");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        };

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
        		if (trId == "selectCmdJobMenuMngList")
        		{
        		}
        		else if (trId == "saveCmdJobMenuMng")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
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
        	var upperMenu = this.ds_menu.getColumn(this.ds_menu.rowposition, "JOB_MENU_ID");
        	if (this.ds_menu.getColumn(this.ds_menu.rowposition, "JOB_MENU_ID") == 0)
        	{
        		upperMenu = null;
        	}
        	var menuLvs = nexacro.toNumber(this.ds_menu.getColumn(this.ds_menu.rowposition, "MENU_LVS")) + 1;
        	var menuGrp = this.ds_menu.getColumn(this.ds_menu.rowposition, "MENU_GRP");

        	var nRow = this.ds_menu.insertRow(this.ds_menu.rowposition + 1);
        	this.ds_menu.setColumn(nRow, "USE_YN", "Y");
        	this.ds_menu.setColumn(nRow, "UPPER_MENU", upperMenu);
        	this.ds_menu.setColumn(nRow, "MENU_LVS", menuLvs);
        	this.ds_menu.setColumn(nRow, "MENU_GRP", menuGrp);
        	this.ds_menu.setColumn(nRow, "JOB_SYS_CD", "DR");
        	this.ds_menu.setColumn(nRow, "PLATFORM_FLAG", "W");
        	this.ds_menu.setColumn(nRow, "ISUSEPLANTSINGLE", "");
        	this.ds_menu.setColumn(nRow, "ISUSEPLANTAUTHORITY", "");
        };

        this.btn_del_onclick = function (obj, e)
        {
        	if (this.ds_menu.getRowType(this.ds_menu.rowposition) == 2)
        	{
        		this.ds_menu.deleteRow(this.ds_menu.rowposition);
        	}
        	else
        	{
        		this.alert("기등록된 메뉴는 삭제하실 수 없습니다!! 사용여부를 'N'으로 하시기 바랍니다!!");
        	}
        };


        /* leftMenu - 마이메뉴 drag & drop 이벤트 */
        this.div_left_grd_myMenu_ondrop = function (obj, e)
        {
        	var nStartRow = obj._user_selectstartrow;
        	// trace("nStartRow(픽업row) : " + nStartRow + " / e.row(드랍row) : " + e.row);

        	this.fn_myMenuOrdrChg(nStartRow, e.row); //즐겨찾기 순서변경 호출

        	// this.ds_myMenu.exchangeRow( nStartRow, e.row );

        	this.div_left.sta_gragImage.set_visible(false);
        	obj._user_selectstartrow = -1;

        	return true;
        };

        /* leftMenu - 마이메뉴 drag & drop 이벤트 */
        this.div_left_grd_myMenu_ondrag = function (obj, e)
        {
        	if (e.row < 0)
        	{
        		// 정상적인 행이 아닌곳에서 드래그 할경우 차단
        		return false;
        	}
        	else
        	{
        		// 반환값이 true일 경우에는 상위 컴포넌트에서 이벤트가 발생하지 않고 마우스 드래그 앤 드랍 동작이 처리됩니다.
        		obj._user_selectstartrow = e.row;

        		this.div_left.sta_gragImage.set_text(obj.getCellText(e.row, e.cell));
        		this.div_left.sta_gragImage.set_visible(true);


        		/* Form 에서 Grid Cell 기준으로 위치얻기 */
        		var objRect = obj.getCellRect(e.row, e.cell);

        		/* cell 기준 position으로 클라이언트 기준 X, Y 좌표를 스크린 기준 기준으로 바꾸어 위치얻기 */
        		// var nHeight = this.div_left.sta_gragImage.getOffsetHeight();
        		var nLeft = system.clientToScreenX(obj, objRect.left);
        		var nTop = system.clientToScreenY(obj, objRect.bottom);

        		/* 스크린 기준 X, Y 좌표를 클라이언트 기준으로 바꾸어 위치얻기 */
        		nLeft = system.screenToClientX(nexacro.getApplication().mainframe, nLeft);
        		nTop = system.screenToClientY(nexacro.getApplication().mainframe, nTop);


        		this.div_left.sta_gragImage.set_left(nLeft);
        		this.div_left.sta_gragImage.set_top(nTop);

        		return true;
        	}
        }

        ;


        this.div_btn_dic_onclick = function(obj,e)
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
        	oArg.arg_type = "B";
        	oArg.arg_popupCd = "P00002";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "DICTIONARYID|DICTIONARYNAME";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "DICTIONARYID="+this.div_menu.form.edt_dictionaryid.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
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
        		var nRow = this.ds_menu.rowposition;

        		this.ds_menu.setColumn(nRow, "DICTIONARYID", rtn[0]);
        		this.ds_menu.setColumn(nRow, "DICTIONARYNAME", rtn[1]);
        	}

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.Static02.addEventHandler("onclick",this.Static10_onclick,this);
            this.div_left.form.grd_Menu.addEventHandler("ontreestatuschanged",this.div_left_grd_Menu_ontreestatuschanged,this);
            this.div_menu.form.btn_dic.addEventHandler("onclick",this.div_btn_dic_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("CMSY01200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
