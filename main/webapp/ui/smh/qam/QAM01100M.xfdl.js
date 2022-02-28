(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01100M");
            this.set_titletext("계측값등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qamMeasureValue", this);
            obj._setContents("<ColumnInfo><Column id=\"MEASUREDATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"FACTORYID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURER\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DAITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"DAITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECRANGE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"AVERAGEVALUE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MAXVALUE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MINVALUE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEVIATION\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_4\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_5\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_6\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_7\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_8\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_9\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_10\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_11\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_12\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_13\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_14\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_15\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_16\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_17\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_18\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_19\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_20\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_21\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_22\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_23\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_24\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_25\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_26\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_27\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_28\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_29\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_30\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_31\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_32\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_33\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_34\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_35\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_36\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_37\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_38\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_39\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_40\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_41\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_42\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_43\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_44\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_45\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_46\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_47\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_48\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_49\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_50\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_51\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_52\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_53\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_54\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_55\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_56\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_57\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_58\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_59\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_60\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_AVERAGE\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_MAX\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_DEVIATION\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_1\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_2\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_3\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_4\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_5\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_6\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_7\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_8\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_9\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_10\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_11\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_12\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_13\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_14\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_15\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_16\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_17\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_18\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_19\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_20\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_21\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_22\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_23\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_24\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_25\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_26\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_27\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_28\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_29\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_30\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_31\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_32\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_33\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_34\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_35\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_36\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_37\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_38\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_39\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_40\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_41\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_42\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_43\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_44\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_45\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_46\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_47\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_48\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_49\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_50\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_51\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_52\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_53\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_54\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_55\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_56\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_57\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_58\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_59\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_60\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","154","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("계측값등록");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-QC-0120");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_qamMeasureValue","31.32%","0","120","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","0","0",null,"34","sta_cnt_ds_qamMeasureValue:41.67%",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("측정값 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("MEASUREDVALUE");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_qamMeasureValue","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamMeasureValue");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"240\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"215\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"측정일시\" tooltiptext=\"MEASUREDATETIME\"/><Cell col=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"3\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell col=\"4\" text=\"설비호기\" tooltiptext=\"EQUIPMENTUNIT\"/><Cell col=\"5\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"6\" text=\"품목명\" tooltiptext=\"PRODUCTNAME\"/><Cell col=\"7\" text=\"REV\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"8\" text=\"재작업횟수\" tooltiptext=\"REWORKCOUNT\"/><Cell col=\"9\" text=\"양산구분\" tooltiptext=\"SUBNAME\"/><Cell col=\"10\" text=\"Lot No\"/><Cell col=\"11\" text=\"측정항목\" tooltiptext=\"DAITEMNAME\"/><Cell col=\"12\" text=\"규격범위\" tooltiptext=\"SPECRANGE\"/><Cell col=\"13\" text=\"판정결과\" tooltiptext=\"INSPECTIONRESULT\"/><Cell col=\"14\" text=\"평균값\" tooltiptext=\"AVERAGEVALUE\"/><Cell col=\"15\" text=\"최대값\" tooltiptext=\"MAXVALUE\"/><Cell col=\"16\" text=\"최소값\" tooltiptext=\"MINVALUE\"/><Cell col=\"17\" text=\"편차\" tooltiptext=\"DEVIATION\"/><Cell col=\"18\" text=\"측정값1\" tooltiptext=\"MEASUREVALUE1\"/><Cell col=\"19\" text=\"측정값2\" tooltiptext=\"MEASUREVALUE2\"/><Cell col=\"20\" text=\"측정값3\" tooltiptext=\"MEASUREVALUE3\"/><Cell col=\"21\" text=\"측정값4\" tooltiptext=\"MEASUREVALUE4\"/><Cell col=\"22\" text=\"측정값5\" tooltiptext=\"MEASUREVALUE5\"/><Cell col=\"23\" text=\"측정값6\" tooltiptext=\"MEASUREVALUE6\"/><Cell col=\"24\" text=\"측정값7\" tooltiptext=\"MEASUREVALUE7\"/><Cell col=\"25\" text=\"측정값8\" tooltiptext=\"MEASUREVALUE8\"/><Cell col=\"26\" text=\"측정값9\" tooltiptext=\"MEASUREVALUE9\"/><Cell col=\"27\" text=\"측정값10\" tooltiptext=\"MEASUREVALUE10\"/><Cell col=\"28\" text=\"측정값11\" tooltiptext=\"MEASUREVALUE11\"/><Cell col=\"29\" text=\"측정값12\" tooltiptext=\"MEASUREVALUE12\"/><Cell col=\"30\" text=\"측정값13\" tooltiptext=\"MEASUREVALUE13\"/><Cell col=\"31\" text=\"측정값14\" tooltiptext=\"MEASUREVALUE14\"/><Cell col=\"32\" text=\"측정값15\" tooltiptext=\"MEASUREVALUE15\"/><Cell col=\"33\" text=\"측정값16\" tooltiptext=\"MEASUREVALUE16\"/><Cell col=\"34\" text=\"측정값17\" tooltiptext=\"MEASUREVALUE17\"/><Cell col=\"35\" text=\"측정값18\" tooltiptext=\"MEASUREVALUE18\"/><Cell col=\"36\" text=\"측정값19\" tooltiptext=\"MEASUREVALUE19\"/><Cell col=\"37\" text=\"측정값20\" tooltiptext=\"MEASUREVALUE20\"/><Cell col=\"38\" text=\"측정값21\" tooltiptext=\"MEASUREVALUE21\"/><Cell col=\"39\" text=\"측정값22\" tooltiptext=\"MEASUREVALUE22\"/><Cell col=\"40\" text=\"측정값23\" tooltiptext=\"MEASUREVALUE23\"/><Cell col=\"41\" text=\"측정값24\" tooltiptext=\"MEASUREVALUE24\"/><Cell col=\"42\" text=\"측정값25\" tooltiptext=\"MEASUREVALUE25\"/><Cell col=\"43\" text=\"측정값26\" tooltiptext=\"MEASUREVALUE26\"/><Cell col=\"44\" text=\"측정값27\" tooltiptext=\"MEASUREVALUE27\"/><Cell col=\"45\" text=\"측정값28\" tooltiptext=\"MEASUREVALUE28\"/><Cell col=\"46\" text=\"측정값29\" tooltiptext=\"MEASUREVALUE29\"/><Cell col=\"47\" text=\"측정값30\" tooltiptext=\"MEASUREVALUE30\"/><Cell col=\"48\" text=\"측정값31\" tooltiptext=\"MEASUREVALUE31\"/><Cell col=\"49\" text=\"측정값32\" tooltiptext=\"MEASUREVALUE32\"/><Cell col=\"50\" text=\"측정값33\" tooltiptext=\"MEASUREVALUE33\"/><Cell col=\"51\" text=\"측정값34\" tooltiptext=\"MEASUREVALUE34\"/><Cell col=\"52\" text=\"측정값35\" tooltiptext=\"MEASUREVALUE35\"/><Cell col=\"53\" text=\"측정값36\" tooltiptext=\"MEASUREVALUE36\"/><Cell col=\"54\" text=\"측정값37\" tooltiptext=\"MEASUREVALUE37\"/><Cell col=\"55\" text=\"측정값38\" tooltiptext=\"MEASUREVALUE38\"/><Cell col=\"56\" text=\"측정값39\" tooltiptext=\"MEASUREVALUE39\"/><Cell col=\"57\" text=\"측정값40\" tooltiptext=\"MEASUREVALUE40\"/><Cell col=\"58\" text=\"측정값41\" tooltiptext=\"MEASUREVALUE41\"/><Cell col=\"59\" text=\"측정값42\" tooltiptext=\"MEASUREVALUE42\"/><Cell col=\"60\" text=\"측정값43\" tooltiptext=\"MEASUREVALUE43\"/><Cell col=\"61\" text=\"측정값44\" tooltiptext=\"MEASUREVALUE44\"/><Cell col=\"62\" text=\"측정값45\" tooltiptext=\"MEASUREVALUE45\"/><Cell col=\"63\" text=\"측정값46\" tooltiptext=\"MEASUREVALUE46\"/><Cell col=\"64\" text=\"측정값47\" tooltiptext=\"MEASUREVALUE47\"/><Cell col=\"65\" text=\"측정값48\" tooltiptext=\"MEASUREVALUE48\"/><Cell col=\"66\" text=\"측정값49\" tooltiptext=\"MEASUREVALUE49\"/><Cell col=\"67\" text=\"측정값50\" tooltiptext=\"MEASUREVALUE50\"/><Cell col=\"68\" text=\"측정값51\" tooltiptext=\"MEASUREVALUE51\"/><Cell col=\"69\" text=\"측정값52\" tooltiptext=\"MEASUREVALUE52\"/><Cell col=\"70\" text=\"측정값53\" tooltiptext=\"MEASUREVALUE53\"/><Cell col=\"71\" text=\"측정값54\" tooltiptext=\"MEASUREVALUE54\"/><Cell col=\"72\" text=\"측정값55\" tooltiptext=\"MEASUREVALUE55\"/><Cell col=\"73\" text=\"측정값56\" tooltiptext=\"MEASUREVALUE56\"/><Cell col=\"74\" text=\"측정값57\" tooltiptext=\"MEASUREVALUE57\"/><Cell col=\"75\" text=\"측정값58\" tooltiptext=\"MEASUREVALUE58\"/><Cell col=\"76\" text=\"측정값59\" tooltiptext=\"MEASUREVALUE59\"/><Cell col=\"77\" text=\"측정값60\" tooltiptext=\"MEASUREVALUE60\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:MEASUREDATETIME\" cssclass=\"expr:INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:AREANAME\" textAlign=\"left\" cssclass=\"expr:INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:EQUIPMENTUNIT\" textAlign=\"left\" cssclass=\"expr:INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFID\" cssclass=\"expr:INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"expr:INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"8\" text=\"bind:REWORKCOUNT\" textAlign=\"right\" displaytype=\"number\" cssclass=\"expr:INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"9\" text=\"bind:SUBNAME\" textAlign=\"center\" cssclass=\"expr:INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"10\" text=\"bind:LOTID\" cssclass=\"expr:INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"11\" text=\"bind:DAITEMNAME\" textAlign=\"left\" cssclass=\"expr:INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"12\" text=\"bind:SPECRANGE\" textAlign=\"left\" cssclass=\"expr:INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"13\" text=\"bind:INSPECTIONRESULT\" cssclass=\"expr:INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"14\" text=\"bind:AVERAGEVALUE\" textAlign=\"right\" cssclass=\"expr:INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"15\" text=\"bind:MAXVALUE\" textAlign=\"right\" cssclass=\"expr:INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"16\" text=\"bind:MINVALUE\" textAlign=\"right\" cssclass=\"expr:INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"17\" text=\"bind:DEVIATION\" textAlign=\"right\" cssclass=\"expr:INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"18\" text=\"bind:MEASUREVALUE_1\" textAlign=\"right\" cssclass=\"expr:RESULT_1==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"19\" text=\"bind:MEASUREVALUE_2\" textAlign=\"right\" cssclass=\"expr:RESULT_2==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"20\" text=\"bind:MEASUREVALUE_3\" textAlign=\"right\" cssclass=\"expr:RESULT_3==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"21\" text=\"bind:MEASUREVALUE_4\" textAlign=\"right\" cssclass=\"expr:RESULT_4==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"22\" text=\"bind:MEASUREVALUE_5\" textAlign=\"right\" cssclass=\"expr:RESULT_5==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"23\" text=\"bind:MEASUREVALUE_6\" textAlign=\"right\" cssclass=\"expr:RESULT_6==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"24\" text=\"bind:MEASUREVALUE_7\" textAlign=\"right\" cssclass=\"expr:RESULT_7==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"25\" text=\"bind:MEASUREVALUE_8\" textAlign=\"right\" cssclass=\"expr:RESULT_8==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"26\" text=\"bind:MEASUREVALUE_9\" textAlign=\"right\" cssclass=\"expr:RESULT_9==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"27\" text=\"bind:MEASUREVALUE_10\" textAlign=\"right\" cssclass=\"expr:RESULT_10==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"28\" text=\"bind:MEASUREVALUE_11\" textAlign=\"right\" cssclass=\"expr:RESULT_11==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"29\" text=\"bind:MEASUREVALUE_12\" textAlign=\"right\" cssclass=\"expr:RESULT_12==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"30\" text=\"bind:MEASUREVALUE_13\" textAlign=\"right\" cssclass=\"expr:RESULT_13==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"31\" text=\"bind:MEASUREVALUE_14\" textAlign=\"right\" cssclass=\"expr:RESULT_14==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"32\" text=\"bind:MEASUREVALUE_15\" textAlign=\"right\" cssclass=\"expr:RESULT_15==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"33\" text=\"bind:MEASUREVALUE_16\" textAlign=\"right\" cssclass=\"expr:RESULT_16==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"34\" text=\"bind:MEASUREVALUE_17\" textAlign=\"right\" cssclass=\"expr:RESULT_17==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"35\" text=\"bind:MEASUREVALUE_18\" textAlign=\"right\" cssclass=\"expr:RESULT_18==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"36\" text=\"bind:MEASUREVALUE_19\" textAlign=\"right\" cssclass=\"expr:RESULT_19==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"37\" text=\"bind:MEASUREVALUE_20\" textAlign=\"right\" cssclass=\"expr:RESULT_20==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"38\" text=\"bind:MEASUREVALUE_21\" textAlign=\"right\" cssclass=\"expr:RESULT_21==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"39\" text=\"bind:MEASUREVALUE_22\" textAlign=\"right\" cssclass=\"expr:RESULT_22==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"40\" text=\"bind:MEASUREVALUE_23\" textAlign=\"right\" cssclass=\"expr:RESULT_23==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"41\" text=\"bind:MEASUREVALUE_24\" textAlign=\"right\" cssclass=\"expr:RESULT_24==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"42\" text=\"bind:MEASUREVALUE_25\" textAlign=\"right\" cssclass=\"expr:RESULT_25==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"43\" text=\"bind:MEASUREVALUE_26\" textAlign=\"right\" cssclass=\"expr:RESULT_26==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"44\" text=\"bind:MEASUREVALUE_27\" textAlign=\"right\" cssclass=\"expr:RESULT_27==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"45\" text=\"bind:MEASUREVALUE_28\" textAlign=\"right\" cssclass=\"expr:RESULT_28==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"46\" text=\"bind:MEASUREVALUE_29\" textAlign=\"right\" cssclass=\"expr:RESULT_29==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"47\" text=\"bind:MEASUREVALUE_30\" textAlign=\"right\" cssclass=\"expr:RESULT_30==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"48\" text=\"bind:MEASUREVALUE_31\" textAlign=\"right\" cssclass=\"expr:RESULT_31==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"49\" text=\"bind:MEASUREVALUE_32\" textAlign=\"right\" cssclass=\"expr:RESULT_32==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"50\" text=\"bind:MEASUREVALUE_33\" textAlign=\"right\" cssclass=\"expr:RESULT_33==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"51\" text=\"bind:MEASUREVALUE_34\" textAlign=\"right\" cssclass=\"expr:RESULT_34==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"52\" text=\"bind:MEASUREVALUE_35\" textAlign=\"right\" cssclass=\"expr:RESULT_35==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"53\" text=\"bind:MEASUREVALUE_36\" textAlign=\"right\" cssclass=\"expr:RESULT_36==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"54\" text=\"bind:MEASUREVALUE_37\" textAlign=\"right\" cssclass=\"expr:RESULT_37==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"55\" text=\"bind:MEASUREVALUE_38\" textAlign=\"right\" cssclass=\"expr:RESULT_38==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"56\" text=\"bind:MEASUREVALUE_39\" textAlign=\"right\" cssclass=\"expr:RESULT_39==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"57\" text=\"bind:MEASUREVALUE_40\" textAlign=\"right\" cssclass=\"expr:RESULT_40==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"58\" text=\"bind:MEASUREVALUE_41\" textAlign=\"right\" cssclass=\"expr:RESULT_41==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"59\" text=\"bind:MEASUREVALUE_42\" textAlign=\"right\" cssclass=\"expr:RESULT_42==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"60\" text=\"bind:MEASUREVALUE_43\" textAlign=\"right\" cssclass=\"expr:RESULT_43==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"61\" text=\"bind:MEASUREVALUE_44\" textAlign=\"right\" cssclass=\"expr:RESULT_44==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"62\" text=\"bind:MEASUREVALUE_45\" textAlign=\"right\" cssclass=\"expr:RESULT_45==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"63\" text=\"bind:MEASUREVALUE_46\" textAlign=\"right\" cssclass=\"expr:RESULT_46==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"64\" text=\"bind:MEASUREVALUE_47\" textAlign=\"right\" cssclass=\"expr:RESULT_47==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"65\" text=\"bind:MEASUREVALUE_48\" textAlign=\"right\" cssclass=\"expr:RESULT_48==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"66\" text=\"bind:MEASUREVALUE_49\" textAlign=\"right\" cssclass=\"expr:RESULT_49==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"67\" text=\"bind:MEASUREVALUE_50\" textAlign=\"right\" cssclass=\"expr:RESULT_50==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"68\" text=\"bind:MEASUREVALUE_51\" textAlign=\"right\" cssclass=\"expr:RESULT_51==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"69\" text=\"bind:MEASUREVALUE_52\" textAlign=\"right\" cssclass=\"expr:RESULT_52==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"70\" text=\"bind:MEASUREVALUE_53\" textAlign=\"right\" cssclass=\"expr:RESULT_53==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"71\" text=\"bind:MEASUREVALUE_54\" textAlign=\"right\" cssclass=\"expr:RESULT_54==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"72\" text=\"bind:MEASUREVALUE_55\" textAlign=\"right\" cssclass=\"expr:RESULT_55==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"73\" text=\"bind:MEASUREVALUE_56\" textAlign=\"right\" cssclass=\"expr:RESULT_56==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"74\" text=\"bind:MEASUREVALUE_57\" textAlign=\"right\" cssclass=\"expr:RESULT_57==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"75\" text=\"bind:MEASUREVALUE_58\" textAlign=\"right\" cssclass=\"expr:RESULT_58==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"76\" text=\"bind:MEASUREVALUE_59\" textAlign=\"right\" cssclass=\"expr:RESULT_59==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/><Cell col=\"77\" text=\"bind:MEASUREVALUE_60\" textAlign=\"right\" cssclass=\"expr:RESULT_60==&apos;NG&apos;? &apos;cell_bg_yellowRed&apos;:(INSPECTIONRESULT == &apos;NG&apos; ? &apos;cell_red&apos; : &apos;&apos;)\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_qamMeasureValue",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_saveRegist",null,"6","50","24","btn_xlDn_grd_qamMeasureValue:5",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("Toolbar_Regist");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_areaName","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREANAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","175","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","175","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"155","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","181","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label03","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("COMPANYCLIENT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C6A85700415446D89213292978260263");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_area","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_customer",null,"110","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","10","60","94","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_innerdataset("gds_period");
            obj.set_codecolumn("code");
            obj.set_datacolumn("desc");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_dateFrom","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_dateTo","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","88","365",null,"20","57",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_value("작업장ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("작업장ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer_id","88","398",null,"20","57",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_value("고객사ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("고객사ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lotId","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("Lot No");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_resourceId","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_calendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("QAM01100M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM01100M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM01100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 계측값 등록
         * 파일명 		: QAM01100M.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.04.07
         *
         * 설  명		: 품질관리 > 공정품질 > 계측값 등록
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.07	권혜영   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.tab_search.Tabpage1.form.div_dateTo.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_changeCalendar, this);
        	this.fn_formInit();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_site.value);
        	this.ds_search.setColumn(0, "PERIODFR", this.tab_search.Tabpage1.form.div_dateFrom.form.calStart.value);
        	this.ds_search.setColumn(0, "PERIODTO", this.tab_search.Tabpage1.form.div_dateTo.form.calStart.value);
        	this.ds_search.setColumn(0, "AREAID", this.tab_search.Tabpage1.form.edt_area_id.value);
        	this.ds_search.setColumn(0, "CUSTOMERID", this.tab_search.Tabpage1.form.edt_customer_id.value);
        	this.ds_search.setColumn(0, "RESOURCEID", this.tab_search.Tabpage1.form.edt_resourceId.value);

        	var sSvcID 			= "selectQamMeasureValueList";
        	var sController 	= "/qam01100/selectQamMeasureValueList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamMeasureValue=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };

        /*
         * 기능 : 신규
         */
        this.fn_add = function(obj,e)
        {

        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_qamMeasureValue) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	var component = this.div_work.form.grd_qamMeasureValue;
        	var strColIdList = "INSPECTIONCLASSID,GRADE";
        	var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveQamMeasureValue";
        	var sController 	= "/qam01100/saveQamMeasureValue.do";
        	var sInDatasets 	= "INPUT=ds_qamMeasureValue:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        	var dsObj = this.ds_qamMeasureValue;
        	var nRowType = dsObj.getRowType(dsObj.rowposition);

        	if(nRowType==2 ){
        		var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        		if (bOK == false) return;
        		dsObj.deleteRow(dsObj.rowposition);
        	} else {
        		this.gfn_Message("CantdelSaveData", null, "info", "ok");
        	}
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
        		if (trId == "saveQamMeasureValue")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
        		}else if (trId == "selectQamMeasureValueList")
        		{

        		}
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.ds_CSiteType.filter("LOOKUP_CODE == '"+this.gf_getSiteType()+"'");
        	this.tab_search.Tabpage1.form.cbo_site.set_index(0);

        	this.tab_search.Tabpage1.form.cbo_periodType.set_value("thisweek"); //금주
        	this.qamfn_setCompControl(this.tab_search.Tabpage1.form.components, "empty");

        	this.fn_setDate("thisweek");
        };

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */

        this.fn_changeCalendar = function() {
        	this.tab_search.Tabpage1.form.cbo_periodType.set_value(null);
        };

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	//checkpoint 20210525 modify
        // 	this.tab_search.Tabpage1.form.div_dateFrom.form.calStart.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        // 	this.tab_search.Tabpage1.form.div_dateTo.form.calStart.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));

        	if (this.nfn_isNull(periodType)) return false;

        	var sDate = this.nfn_getCurrentSystemTime(0, 0, periodType.toLowerCase());
        	var arrDate = sDate.split(",");
        	var sDateFrom = arrDate[1];
        	var sDateTo = arrDate[2];
        	var sTime = "0830";

        	this.tab_search.Tabpage1.form.div_dateFrom.form.calStart.set_value(sDateFrom+sTime);
        	this.tab_search.Tabpage1.form.div_dateTo.form.calStart.set_value(sDateTo+sTime);
        };

        /*
         * 기능 : 측정값 등록 팝업화면 open
         */
        this.fn_openViewPopup = function (nRow)
        {
        	var oArg = {};

        	if (nRow > -1) {
        		oArg.lotId = this.ds_qamMeasureValue.getColumn(nRow, "LOTID");
        		oArg.equipmentId = this.ds_qamMeasureValue.getColumn(nRow, "EQUIPMENTID");
        		oArg.resourceType = this.ds_qamMeasureValue.getColumn(nRow, "RESOURCETYPE");
        	}
        	this.gfn_openPopup("REG_MEASUER_VALUE","qam::QAM01100P.xfdl",oArg,"width=1000,height=750");
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        //기간 검색구분 변경 시
        this.tab_search_Tabpage1_cbo_periodType_onitemchanged = function(obj,e)
        {
        	if(!this.nfn_isNull(e.postvalue)) {
        		this.fn_setDate(e.postvalue);
        	}
        };

        //조회기간 달력 변경 시 기간 검색구분 사용자지정으로 변경
        this.tab_search_Tabpage1_div_dateTo_onkeyup = function(obj,e)
        {
        	this.fn_changeCalendar();
        };

        //조회기간 달력 변경 시 기간 검색구분 사용자지정으로 변경
        this.tab_search_Tabpage1_div_dateFrom_onkeyup = function(obj,e)
        {
        	this.fn_changeCalendar();
        };

        //등록 버튼 클릭 시 "계측값등록" 팝업 화면 호출
        this.div_header_btn_saveRegist_onclick = function(obj,e)
        {
        	this.fn_openViewPopup(-1);
        };

        //그리드 더블클릭 시 "계측값등록" 팝업 화면 호출
        this.div_work_grd_qamMeasureValue_oncelldblclick = function(obj,e)
        {
        	this.fn_openViewPopup(e.row);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.grd_qamMeasureValue.addEventHandler("oncelldblclick",this.div_work_grd_qamMeasureValue_oncelldblclick,this);
            this.div_work.form.btn_saveRegist.addEventHandler("onclick",this.div_header_btn_saveRegist_onclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_area.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_customer.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.cbo_periodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_periodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.div_dateFrom.addEventHandler("onkeyup",this.tab_search_Tabpage1_div_dateTo_onkeyup,this);
            this.tab_search.Tabpage1.form.div_dateTo.addEventHandler("onkeyup",this.tab_search_Tabpage1_div_dateFrom_onkeyup,this);
        };
        this.loadIncludeScript("QAM01100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
