(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMHM00100M");
            this.set_titletext("매뉴얼관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVS\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_MENU\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_OPTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ARGS\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_EXTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_RM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/><Column id=\"ISUSEPLANTAUTHORITY\" type=\"STRING\" size=\"256\"/><Column id=\"ISUSEPLANTSINGLE\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"_chk\"/><Col id=\"JOB_MENU_ID\">1000</Col><Col id=\"MENU_NM\">운영관리</Col><Col id=\"MENU_LVS\">0</Col><Col id=\"UPPER_MENU\"/><Col id=\"MENU_SEQ\">49</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\"/><Col id=\"UPDATE_USER\"/><Col id=\"UPDATE_DT\"/><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\"/><Col id=\"PAGE_EXTP\"/><Col id=\"MENU_AUTH\"/></Row><Row><Col id=\"_chk\"/><Col id=\"JOB_MENU_ID\">100010</Col><Col id=\"MENU_NM\">공통코드관리</Col><Col id=\"MENU_LVS\">1</Col><Col id=\"UPPER_MENU\">1000</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"JOB_MENU_ID\">100011</Col><Col id=\"MENU_NM\">공통코드관리</Col><Col id=\"MENU_LVS\">2</Col><Col id=\"UPPER_MENU\">100010</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PGE_URL\">cmcm::CMCM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"_chk\"/><Col id=\"JOB_MENU_ID\">100020</Col><Col id=\"MENU_NM\">메시지 관리</Col><Col id=\"MENU_LVS\">1</Col><Col id=\"UPPER_MENU\">1000</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"JOB_MENU_ID\">100021</Col><Col id=\"MENU_NM\">메시지 목록</Col><Col id=\"MENU_LVS\">2</Col><Col id=\"UPPER_MENU\">100020</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PGE_URL\">cmmm::CMMM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">100022</Col><Col id=\"MENU_NM\">메시지 등록</Col><Col id=\"MENU_LVS\">2</Col><Col id=\"UPPER_MENU\">100020</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PGE_URL\">cmmm::CMMM01300M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"_chk\"/><Col id=\"JOB_MENU_ID\">3000</Col><Col id=\"MENU_NM\">작업/모니터링</Col><Col id=\"MENU_LVS\">0</Col><Col id=\"UPPER_MENU\">3000</Col><Col id=\"MENU_SEQ\">51</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_LVS\">1</Col><Col id=\"JOB_MENU_ID\">300010</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"MENU_NM\">시스템로그</Col><Col id=\"UPPER_MENU\">3000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col></Row><Row><Col id=\"JOB_MENU_ID\">300012</Col><Col id=\"MENU_NM\">시스템로그 목록</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">300011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">CMLM::CMLM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">4000</Col><Col id=\"MENU_NM\">개발가이드 참조</Col><Col id=\"MENU_LVS\">0</Col><Col id=\"UPPER_MENU\">4000</Col><Col id=\"MENU_SEQ\">51</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400010</Col><Col id=\"MENU_NM\">GUIDE</Col><Col id=\"MENU_LVS\">1</Col><Col id=\"UPPER_MENU\">4000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400012</Col><Col id=\"MENU_NM\">Guide_01.Static,Edit,TextArea</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_01.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400013</Col><Col id=\"MENU_NM\">Guide_02.Button</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_02.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400014</Col><Col id=\"MENU_NM\">Guide_03.Box,Calendar</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_03.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_AUTH\">1111</Col><Col id=\"JOB_MENU_ID\">400015</Col><Col id=\"MENU_NM\">Guide_04.Grid</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_04.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400016</Col><Col id=\"MENU_NM\">Guide_05.GroupBox,Bar,Radio,Tab</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_05.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400017</Col><Col id=\"MENU_NM\">Guide_06.Search,Input</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_06.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400018</Col><Col id=\"MENU_NM\">Guide_07.MDI,GNB</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_07.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400020</Col><Col id=\"MENU_NM\">TEMPLATE</Col><Col id=\"MENU_LVS\">1</Col><Col id=\"UPPER_MENU\">4000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400026</Col><Col id=\"MENU_NM\">화면_조회_그리드형</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400027</Col><Col id=\"MENU_NM\">화면_조회_게시판형</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400028</Col><Col id=\"MENU_NM\">화면_입력_일반형</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400029</Col><Col id=\"MENU_NM\">화면_입력_탭형</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400030</Col><Col id=\"MENU_NM\">화면_그래프</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_005.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400031</Col><Col id=\"MENU_NM\">화면_메시지</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_006.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400032</Col><Col id=\"MENU_NM\">화면_통계_그래프</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_007.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400033</Col><Col id=\"MENU_NM\">화면_통계_표</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_008.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400035</Col><Col id=\"MENU_NM\">팝업_분할지급/다수령인지급</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::PopUp_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400036</Col><Col id=\"MENU_NM\">팝업_조회</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::PopUp_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400037</Col><Col id=\"MENU_NM\">팝업_입력</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::PopUp_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400038</Col><Col id=\"MENU_NM\">팝업_도움말</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::PopUp_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400039</Col><Col id=\"MENU_NM\">팝업_메세지</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::PopUp_005.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"UPPER_MENU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_manual", this);
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVS\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_MENU\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_OPTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ARGS\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_EXTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_RM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FILE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_save",null,"0","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0%","21",null,"15","1.09%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","6","32","140","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("메뉴Tree");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0%","59",null,"10","87.17%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","20","74",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Menu","2","69","338",null,null,"10",null,null,null,null,this);
            obj.set_cssclass("grd_LF_treeMenu");
            obj.set_taborder("6");
            obj.set_binddataset("ds_menu");
            obj.set_autosizingtype("none");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_visible("true");
            obj.set_cursor("auto");
            obj.set_border("0px solid #c7c7c7,1px solid #c7c7c7");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"305\"/><Column size=\"49\"/></Columns><Rows><Row size=\"23\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:MENU_NM\" treestartlevel=\"-1\" treelevel=\"bind:MENU_LVS\" autosizecol=\"none\"/><Cell col=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_manual","344","71",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_manual");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"320\"/><Column size=\"118\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"메뉴명\"/><Cell col=\"1\" text=\"매뉴얼 여부\"/><Cell col=\"2\" text=\"매뉴얼 등록\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_NM\"/><Cell col=\"1\" text=\"bind:FILE_YN\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"매뉴얼 등록\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMHM00100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 메뉴 관리
         * 파일명 		: cmhm00100.xfdl
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
        	//var menuNm = nexacro.getApplication().gds_menu.lookup("PGM_ID",this.name,"MENU_NM");
        	//this.sta_title.set_text(menuNm);

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

        	var sSvcID = "selectManualMenuList";
        	var sController = "/cmhm00100/selectManualMenuList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_menu=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectManualMenuList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	var bOK = this.gfn_Message("InfoPopupSave", null, "conf", "yesno");
        	if (bOK == false) return;

        	if (!this.gfn_dsIsUpdated(this.ds_cmdMessage) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

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
        		if (trId == "selectManualMenuList")
        		{
        		}
        		if (trId == "selectManualMenuDtlList")
        		{
        		}
        	}
        };

        /**************************************************************************
         * 6-1. 팝업 시작
         **************************************************************************/

        /**************************************************************************
         * 6-2. 팝업 RETURN
        ***************************************************************************/

        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.grd_Menu_onselectchanged = function(obj,e)
        {
        	this.ds_manual.clearData();
        	if(this.ds_menu.getColumn(e.row,"MENU_LVS") != 2) return;
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0,"UPPER_MENU",this.ds_menu.getColumn(e.row,"JOB_MENU_ID"));
        	var sSvcID = "selectManualMenuDtlList";
        	var sController = "/cmhm00100/selectManualMenuDtlList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_manual=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectManualMenuDtlList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        this.grd_manual_oncellclick = function(obj,e)
        {
        	if(e.col != 2) return;

        	if( e.row <0 ) return;

            var jobSysCd = "CMD"; //업무구분코드 CMD,BAS....
            var subDir = "manual";	//세부업무약어
            var resouceid = this.ds_manual.getColumn(e.row,"JOB_MENU_ID");//테이블의 키 값  //RESOURCEID
            var resourcetype = "MANUAL";  //RESOURCETYPE
            var comments = "manual";  //파일설명 //
            var fileCnt = "5"; // 업로드 수
            var oArg = {arg_jobSysCd:jobSysCd,arg_atchSrcKey:resouceid ,arg_tableName:resourcetype ,arg_desc:comments, arg_subDir:subDir, arg_fileCnt:fileCnt};
            this.gfn_openPopup("file_upload","cmd::CMSA01220P.xfdl",oArg,"");
            //this.gfn_openPopup("file_download","cmd::CMSA01320P.xfdl",oArg,"");	//파일다운로드

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.Static02.addEventHandler("onclick",this.Static10_onclick,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.grd_Menu.addEventHandler("onselectchanged",this.grd_Menu_onselectchanged,this);
            this.grd_manual.addEventHandler("oncellclick",this.grd_manual_oncellclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("CMHM00100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
