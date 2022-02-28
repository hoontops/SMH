(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA90310M");
            this.set_titletext("복리후생가이드");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_01","16.85%","209","15.33%","176",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("url(\'theme://images/policy_01.png\') no-repeat center top");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","86",null,"20","0",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_text("법정 복리후생");
            obj.set_textAlign("center");
            obj.set_font("normal 700 17px/normal \"나눔 고딕\",\"arial\"");
            obj.set_color("#333333");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","116",null,null,"0","0",null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("4대보험 & 퇴직금\r\n건강검진");
            obj.set_textAlign("center");
            obj.set_color("#666666");
            obj.set_font("normal 14px/normal \"Arial\"");
            obj.set_verticalAlign("top");
            this.div_01.addChild(obj.name, obj);

            obj = new Div("div_01_00","33.70%","209","15.33%","176",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("url(\'theme://images/policy_02.png\') no-repeat center top");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","86",null,"20","0",null,null,null,null,null,this.div_01_00.form);
            obj.set_taborder("0");
            obj.set_text("단체상해보험");
            obj.set_textAlign("center");
            obj.set_font("normal 700 17px/normal \"나눔 고딕\",\"arial\"");
            obj.set_color("#333333");
            this.div_01_00.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","116",null,null,"0","0",null,null,null,null,this.div_01_00.form);
            obj.set_taborder("1");
            obj.set_text("사망 5천만원\r\n암 1천만원");
            obj.set_textAlign("center");
            obj.set_color("#666666");
            obj.set_font("normal 14px/normal \"Arial\"");
            obj.set_verticalAlign("top");
            this.div_01_00.addChild(obj.name, obj);

            obj = new Div("div_01_00_00","50.33%","209","15.33%","176",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("url(\'theme://images/policy_03.png\') no-repeat center top");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","86",null,"20","0",null,null,null,null,null,this.div_01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("자녀학자금");
            obj.set_textAlign("center");
            obj.set_font("normal 700 17px/normal \"나눔 고딕\",\"arial\"");
            obj.set_color("#333333");
            this.div_01_00_00.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","116",null,null,"0","0",null,null,null,null,this.div_01_00_00.form);
            obj.set_taborder("1");
            obj.set_text("자녀 대학교\r\n학자금 지원");
            obj.set_textAlign("center");
            obj.set_color("#666666");
            obj.set_font("normal 14px/normal \"Arial\"");
            obj.set_verticalAlign("top");
            this.div_01_00_00.addChild(obj.name, obj);

            obj = new Div("div_01_00_00_00","67.50%","209","15.33%","176",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'theme://images/policy_04.png\') no-repeat center top");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","86",null,"20","0",null,null,null,null,null,this.div_01_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("호텔&리조트");
            obj.set_textAlign("center");
            obj.set_font("normal 700 17px/normal \"나눔 고딕\",\"arial\"");
            obj.set_color("#333333");
            this.div_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","116",null,null,"0","0",null,null,null,null,this.div_01_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("그룹 호텔 / 리조트\r\n할인 이용");
            obj.set_textAlign("center");
            obj.set_color("#666666");
            obj.set_font("normal 14px/normal \"Arial\"");
            obj.set_verticalAlign("top");
            this.div_01_00_00_00.addChild(obj.name, obj);

            obj = new Div("div_01_01","16.74%","459","15.33%","176",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("url(\'theme://images/policy_05.png\') no-repeat center top");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","86",null,"20","0",null,null,null,null,null,this.div_01_01.form);
            obj.set_taborder("0");
            obj.set_text("복지카드 제공");
            obj.set_textAlign("center");
            obj.set_font("normal 700 17px/normal \"나눔 고딕\",\"arial\"");
            obj.set_color("#333333");
            this.div_01_01.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","116",null,null,"0","0",null,null,null,null,this.div_01_01.form);
            obj.set_taborder("1");
            obj.set_text("반기별 자유롭게\r\n사용 가능한\r\n복지 포인트 부여");
            obj.set_textAlign("center");
            obj.set_color("#666666");
            obj.set_font("normal 14px/normal \"Arial\"");
            obj.set_verticalAlign("top");
            this.div_01_01.addChild(obj.name, obj);

            obj = new Div("div_01_00_01","33.70%","459","15.33%","176",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("url(\'theme://images/policy_06.png\') no-repeat center top");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","86",null,"20","0",null,null,null,null,null,this.div_01_00_01.form);
            obj.set_taborder("0");
            obj.set_text("생일축하금");
            obj.set_textAlign("center");
            obj.set_font("normal 700 17px/normal \"나눔 고딕\",\"arial\"");
            obj.set_color("#333333");
            this.div_01_00_01.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","116",null,null,"0","0",null,null,null,null,this.div_01_00_01.form);
            obj.set_taborder("1");
            obj.set_text("본인 생일 기념\r\n축하금 지원");
            obj.set_textAlign("center");
            obj.set_color("#666666");
            obj.set_font("normal 14px/normal \"Arial\"");
            obj.set_verticalAlign("top");
            this.div_01_00_01.addChild(obj.name, obj);

            obj = new Div("div_01_00_00_01","50.33%","459","15.33%","176",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("url(\'theme://images/policy_07.png\') no-repeat center top");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","86",null,"20","0",null,null,null,null,null,this.div_01_00_00_01.form);
            obj.set_taborder("0");
            obj.set_text("식대&교통비");
            obj.set_textAlign("center");
            obj.set_font("normal 700 17px/normal \"나눔 고딕\",\"arial\"");
            obj.set_color("#333333");
            this.div_01_00_00_01.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","116",null,null,"0","0",null,null,null,null,this.div_01_00_00_01.form);
            obj.set_taborder("1");
            obj.set_text("중, 석식비 및\r\n교통비 지원");
            obj.set_textAlign("center");
            obj.set_color("#666666");
            obj.set_font("normal 14px/normal \"Arial\"");
            obj.set_verticalAlign("top");
            this.div_01_00_00_01.addChild(obj.name, obj);

            obj = new Div("div_01_00_00_00_00","67.50%","459","15.33%","176",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("url(\'theme://images/policy_08.png\') no-repeat center top");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","86",null,"20","0",null,null,null,null,null,this.div_01_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("경조사 지원");
            obj.set_textAlign("center");
            obj.set_font("normal 700 17px/normal \"나눔 고딕\",\"arial\"");
            obj.set_color("#333333");
            this.div_01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","116",null,null,"0","0",null,null,null,null,this.div_01_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("경조사 발생 시\r\n청원휴가, 화환\r\n등 지원");
            obj.set_textAlign("center");
            obj.set_color("#666666");
            obj.set_font("normal 14px/normal \"Arial\"");
            obj.set_verticalAlign("top");
            this.div_01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta_00","0","50",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Benefit Guide");
            obj.set_textAlign("center");
            obj.set_font("normal 600 24px/normal \"나눔고딕\",\"Arial\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","103",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("SM 상선은 임직원에게 다양한 복리후생을 제공합니다.");
            obj.set_textAlign("center");
            obj.set_font("normal 600 17px/normal \"나눔고딕\",\"Arial\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_01","0%","37",null,"3","0%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_textAlign("center");
            obj.set_font("normal 600 24px/normal \"나눔고딕\",\"Arial\"");
            obj.set_color("#333333");
            obj.set_background("url(\'theme://images/img_SMH_GuideTop_bg.jpg\') no-repeat center top");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("HRA90310M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
