(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMD00100M");
            this.set_titletext("사이트맵");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,890);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVS\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_MENU\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_OPTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ARGS\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_EXTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_RM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/><Column id=\"ISUSEPLANTAUTHORITY\" type=\"STRING\" size=\"256\"/><Column id=\"ISUSEPLANTSINGLE\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"_chk\"/><Col id=\"JOB_MENU_ID\">1000</Col><Col id=\"MENU_NM\">운영관리</Col><Col id=\"MENU_LVS\">0</Col><Col id=\"UPPER_MENU\"/><Col id=\"MENU_SEQ\">49</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\"/><Col id=\"UPDATE_USER\"/><Col id=\"UPDATE_DT\"/><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\"/><Col id=\"PAGE_EXTP\"/><Col id=\"MENU_AUTH\"/></Row><Row><Col id=\"_chk\"/><Col id=\"JOB_MENU_ID\">100010</Col><Col id=\"MENU_NM\">공통코드관리</Col><Col id=\"MENU_LVS\">1</Col><Col id=\"UPPER_MENU\">1000</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"JOB_MENU_ID\">100011</Col><Col id=\"MENU_NM\">공통코드관리</Col><Col id=\"MENU_LVS\">2</Col><Col id=\"UPPER_MENU\">100010</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PGE_URL\">cmcm::CMCM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"_chk\"/><Col id=\"JOB_MENU_ID\">100020</Col><Col id=\"MENU_NM\">메시지 관리</Col><Col id=\"MENU_LVS\">1</Col><Col id=\"UPPER_MENU\">1000</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"JOB_MENU_ID\">100021</Col><Col id=\"MENU_NM\">메시지 목록</Col><Col id=\"MENU_LVS\">2</Col><Col id=\"UPPER_MENU\">100020</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PGE_URL\">cmmm::CMMM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">100022</Col><Col id=\"MENU_NM\">메시지 등록</Col><Col id=\"MENU_LVS\">2</Col><Col id=\"UPPER_MENU\">100020</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">20120831181214000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905182055000</Col><Col id=\"PGE_URL\">cmmm::CMMM01300M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"_chk\"/><Col id=\"JOB_MENU_ID\">3000</Col><Col id=\"MENU_NM\">작업/모니터링</Col><Col id=\"MENU_LVS\">0</Col><Col id=\"UPPER_MENU\">3000</Col><Col id=\"MENU_SEQ\">51</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_LVS\">1</Col><Col id=\"JOB_MENU_ID\">300010</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"MENU_NM\">시스템로그</Col><Col id=\"UPPER_MENU\">3000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col></Row><Row><Col id=\"JOB_MENU_ID\">300012</Col><Col id=\"MENU_NM\">시스템로그 목록</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">300011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">CMLM::CMLM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">4000</Col><Col id=\"MENU_NM\">개발가이드 참조</Col><Col id=\"MENU_LVS\">0</Col><Col id=\"UPPER_MENU\">4000</Col><Col id=\"MENU_SEQ\">51</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400010</Col><Col id=\"MENU_NM\">GUIDE</Col><Col id=\"MENU_LVS\">1</Col><Col id=\"UPPER_MENU\">4000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400012</Col><Col id=\"MENU_NM\">Guide_01.Static,Edit,TextArea</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_01.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400013</Col><Col id=\"MENU_NM\">Guide_02.Button</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_02.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400014</Col><Col id=\"MENU_NM\">Guide_03.Box,Calendar</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_03.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_AUTH\">1111</Col><Col id=\"JOB_MENU_ID\">400015</Col><Col id=\"MENU_NM\">Guide_04.Grid</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_04.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400016</Col><Col id=\"MENU_NM\">Guide_05.GroupBox,Bar,Radio,Tab</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_05.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400017</Col><Col id=\"MENU_NM\">Guide_06.Search,Input</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_06.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400018</Col><Col id=\"MENU_NM\">Guide_07.MDI,GNB</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">guide::Guide_07.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400020</Col><Col id=\"MENU_NM\">TEMPLATE</Col><Col id=\"MENU_LVS\">1</Col><Col id=\"UPPER_MENU\">4000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400026</Col><Col id=\"MENU_NM\">화면_조회_그리드형</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400027</Col><Col id=\"MENU_NM\">화면_조회_게시판형</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400028</Col><Col id=\"MENU_NM\">화면_입력_일반형</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400029</Col><Col id=\"MENU_NM\">화면_입력_탭형</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400030</Col><Col id=\"MENU_NM\">화면_그래프</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_005.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400031</Col><Col id=\"MENU_NM\">화면_메시지</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_006.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400032</Col><Col id=\"MENU_NM\">화면_통계_그래프</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_007.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400033</Col><Col id=\"MENU_NM\">화면_통계_표</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::TemplateGuide_008.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400035</Col><Col id=\"MENU_NM\">팝업_분할지급/다수령인지급</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::PopUp_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400036</Col><Col id=\"MENU_NM\">팝업_조회</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::PopUp_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400037</Col><Col id=\"MENU_NM\">팝업_입력</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::PopUp_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400038</Col><Col id=\"MENU_NM\">팝업_도움말</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::PopUp_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"JOB_MENU_ID\">400039</Col><Col id=\"MENU_NM\">팝업_메세지</Col><Col id=\"MENU_LVS\">3</Col><Col id=\"UPPER_MENU\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">20150120202000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">20150120202000</Col><Col id=\"PGE_URL\">template::PopUp_005.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLATFORM_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title_bg","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#3056a3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"12","25","25","13",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","0",null,"50","1078",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("txt_24B");
            obj.set_text("사이트 맵");
            obj.set_tooltiptext("SITEMAP");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("div_head","0","60",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_head");
            obj.set_border("0px none,0px none,1px solid #3056a3");
            this.addChild(obj.name, obj);

            obj = new Div("div_line","0","100",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_2");
            this.addChild(obj.name, obj);

            obj = new Div("div","0","0",null,null,"0","0",null,null,null,null,this.div_line.form);
            obj.set_taborder("0");
            obj.set_text("div_line");
            obj.set_formscrolltype("none");
            this.div_line.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,890,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SITEMAP.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: ID Serial 관리
         * 파일명 		: SITEMAP.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.01.11
         *
         * 설  명		: SITEMAP
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.01.11	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM LOAD
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

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	var left = 0;
        	var top = 0;
        	var height = 30;
        	var objDs = nexacro.getApplication().gds_menu;
        	var top1 = 0;
        	var menuTop;
        	var seq = 0;
        	var width = 150;
        	var max_height = 0;
        	var sum_height = 0;
        	objDs.filter("MENU_GRP!='9000'");
        	for(var i=0; i<objDs.rowcount; i++){
        		if(objDs.getColumn(i,"MENU_LEVEL")=="1"){
        			left = left + (i==0?0:93) + 60;
        			top = 0;
        			var objButton = new Button();
        			var btnId = "div_"+objDs.getColumn(i,"MENU_ID");
        			objButton.init(btnId, left, top, width, height );
        			objButton.set_cssclass("btn_sitemap_menu0");
        			objButton.set_text(objDs.getColumn(i,"MENU_NM"));
        			objButton.set_tooltiptext(objDs.getColumn(i,"MENU_NM"));
        			//objButton.set_fittocontents("height");
        			this.div_head.addChild(btnId, objButton);
        			objButton.show();
        			top = top + objButton.height;
        			if(max_height < sum_height) max_height = sum_height;
        		}else if(objDs.getColumn(i,"MENU_LEVEL")=="2"){
        			var objButton = new Button();
        			var btnId = "btn_"+objDs.getColumn(i,"MENU_ID");
        			objButton.init(btnId, left, top, width, 25 );
        			//objButton.set_wordWrap("char");
        			objButton.set_cssclass("btn_sitemap_menu1");
        			objButton.set_text(objDs.getColumn(i,"MENU_NM"));
        			objButton.set_tooltiptext(objDs.getColumn(i,"MENU_NM"));
        			//objButton.set_fittocontents("height");
        			this.div_line.form.div.addChild(btnId, objButton);
        			objButton.show();
        			top = top + objButton.height;
        			sum_height = sum_height + objButton.height;
        		}else if(objDs.getColumn(i,"MENU_LEVEL")=="3"){
        			var objButton = new Button();
        			var btnId = "btn_"+objDs.getColumn(i,"MENU_ID");
        			objButton.init(btnId, left, top, width, 23 );
        			//objButton.set_wordWrap("char");
        			objButton.set_cssclass("btn_sitemap_menu2");
        			objButton.set_text(objDs.getColumn(i,"MENU_NM"));
        			objButton.set_tooltiptext(objDs.getColumn(i,"MENU_NM"));
        			objButton.addEventHandler("onclick", this.fn_btnClick , this);
        			//objButton.set_fittocontents("height");
        			this.div_line.form.div.addChild(btnId, objButton);
        			objButton.show();
        			top = top + objButton.height;
        			sum_height = sum_height + 23;
        		}
        	}
        	if(max_height < sum_height) max_height = sum_height;
        	this.div_line.form.div.set_height(max_height);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        };

        /*
         * 기능 : 신규
         */
        this.fn_new = function(obj,e)
        {
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delelete = function(obj,e)
        {
        };
        /*
         * 기능 : 도움말  => 공통 처리
         */
        this.fn_help = function(obj,e)
        {
        };

        /*
         * 기능 : 출력
         */
        this.fn_print = function(obj,e)
        {
        };

        /*
         * 기능 : work영역 초기화  => 공통처리
         */
        this.fn_reset = function(obj,e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "selectCmdJobMenuMngList")
        		{
        			this.fn_sitemap();
        		}
        	}

        }


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        }
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.fn_btnClick = function(obj,e)
        {
        	var menuId = obj.id.substring(4);
        	var sUrl = nexacro.getApplication().gds_menu.lookup("MENU_ID",menuId,"PAGE_URL");

        	// arryList 타입전달 예)
        	var objArgs = {}

        	var bReload = false;
        	this.gfn_goPage(sUrl, objArgs, bReload);

        	this.close();
        };


        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("SITEMAP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
