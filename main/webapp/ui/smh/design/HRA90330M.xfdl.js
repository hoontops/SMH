(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA90330M");
            this.set_titletext("평가가이드");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_00","0","50",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Appraisal Guide");
            obj.set_textAlign("center");
            obj.set_font("normal 600 24px/normal \"나눔고딕\",\"Arial\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","103",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("SM 상선은 \'공동체적 성과주의\' 실현을 위하여 공정하고 합리적인 평가체계를 운영합니다.");
            obj.set_textAlign("center");
            obj.set_font("normal 600 17px/normal \"나눔고딕\",\"Arial\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","0","149",null,"25","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("SM 상선 평가체계 및 평가 종류 : 업적, 역량, 행동 등 조직 구성원의 다양한 측면을 공정하게 평가합니다.");
            obj.set_textAlign("center");
            obj.set_font("normal 600 17px/normal \"나눔고딕\",\"Arial\"");
            obj.set_color("#666666");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00","5.00%","209","19.13%","80",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("업적평가");
            obj.set_textAlign("center");
            obj.set_font("normal 600 24px/normal \"나눔고딕\",\"Arial\"");
            obj.set_color("#ffffff");
            obj.set_background("#e9446f");
            obj.set_borderRadius("30px 0px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00",null,"209","71.09%","80","5.00%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("평가기간 내 설정한 업무 목표(Objectives) 대비 실제 달성수준을 평가합니다.\r\n\r\n조직점수 할당제 운영을 통해 조직평가와 개인평가를 연계하여 공동체적 성과주의를 실현합니다.");
            obj.set_textAlign("center");
            obj.set_font("normal 600 14px/0.9 \"나눔고딕\",\"Arial\"");
            obj.set_color("#e9446f");
            obj.set_background("#e4e4e4");
            obj.set_borderRadius("0px 30px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_01","5.00%","309","19.13%","80",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("역량평가");
            obj.set_textAlign("center");
            obj.set_font("normal 600 24px/normal \"나눔고딕\",\"Arial\"");
            obj.set_color("#ffffff");
            obj.set_background("#a42c5a");
            obj.set_borderRadius("30px 0px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00",null,"309","71.09%","80","5.00%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("직급/직책별 요구되는 역량 기대수준 대비 실제 발휘수준을 평가합니다.\r\n\r\n성취지향, 전략적사고, 솔선수범, 문제해결력, 의사결정, 주도성, 프로세스 개선 등의 역량항목을 평가합니다.");
            obj.set_textAlign("center");
            obj.set_font("normal 600 14px/0.9 \"나눔고딕\",\"Arial\"");
            obj.set_color("#a42c5a");
            obj.set_background("#e4e4e4");
            obj.set_borderRadius("0px 30px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_01_00","5.00%","409","19.13%","80",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("행동평가");
            obj.set_textAlign("center");
            obj.set_font("normal 600 24px/normal \"나눔고딕\",\"Arial\"");
            obj.set_color("#ffffff");
            obj.set_background("#dd8016");
            obj.set_borderRadius("30px 0px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00_00",null,"409","71.09%","80","5.00%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("조직에의 기여수준을 조직 구성원이 상호간 직접 평가합니다.\r\n\r\n직무능력(또는 리더십), 조직기여도, 성실성과 인화력에 대한 상호간 평가를 통해 조직 협력성을 키웁니다.");
            obj.set_textAlign("center");
            obj.set_font("normal 600 14px/0.9 \"나눔고딕\",\"Arial\"");
            obj.set_color("#dd8016");
            obj.set_background("#e4e4e4");
            obj.set_borderRadius("0px 30px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_01_00_00","5.00%","579","19.13%","80",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("종합평가");
            obj.set_textAlign("center");
            obj.set_font("normal 600 24px/normal \"나눔고딕\",\"Arial\"");
            obj.set_color("#ffffff");
            obj.set_background("#038eb7");
            obj.set_borderRadius("0px 0px 0px 30px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00_00_00",null,"579","71.09%","80","5.00%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("업적/역랑/행동 수준을 최종적으로 고려하여 2차 평가자가 종합평가를 실시합니다.");
            obj.set_textAlign("center");
            obj.set_font("normal 600 14px/0.9 \"나눔고딕\",\"Arial\"");
            obj.set_color("#038eb7");
            obj.set_background("#e4e4e4");
            obj.set_borderRadius("0px 0px 30px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","0","514",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("url(\'theme://images/img_guide_plus.png\') no-repeat center top");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_01","0.00%","37",null,"3","0.00%",null,null,null,null,null,this);
            obj.set_taborder("12");
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
        this.loadIncludeScript("HRA90330M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
