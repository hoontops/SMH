(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01500D");
            this.set_titletext("자주검사 이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(958,413);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Inspect", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFNAME|\" type=\"STRING\" size=\"256\"/><Column id=\"degree\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUSER\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_InspDefect", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"degree\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREA\" type=\"STRING\" size=\"256\"/><Column id=\"FILERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"OC_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileCombo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"OC_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("title1","0","0","139","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("검사이력 리스트 ");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_Inspect","title1:0","0","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grdInspect","0","34",null,null,"0","233",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_Inspect");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"170\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"공정 수순\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"작업장\"/><Cell col=\"5\" text=\"검사 정의 명\"/><Cell col=\"6\" text=\"차수\"/><Cell col=\"7\" text=\"완료일시\"/><Cell col=\"8\" text=\"검사자\"/><Cell col=\"9\" text=\"검사수량\"/><Cell col=\"10\" text=\"불량 수량\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:AREANAME\"/><Cell col=\"5\" text=\"bind:INSPECTIONDEFNAME|\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:degree\"/><Cell col=\"7\" text=\"bind:INSPECTIONDATE\"/><Cell col=\"8\" text=\"bind:INSPECTIONUSER\"/><Cell col=\"9\" text=\"bind:INSPECTIONQTY\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:DEFECTQTY\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("title2","0",null,"111","34",null,"199",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("불량 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grdInspDefect","0",null,null,"199","260","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_InspDefect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"170\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"공정 수순\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"검사 정의 명\"/><Cell col=\"5\" text=\"차수\"/><Cell col=\"6\" text=\"불량 코드\"/><Cell col=\"7\" text=\"불량 코드 명\"/><Cell col=\"8\" text=\"불량 수량\"/><Cell col=\"9\" text=\"원인 품목\"/><Cell col=\"10\" text=\"원인품목 명\"/><Cell col=\"11\" text=\"원인 LOTID\"/><Cell col=\"12\" text=\"원인공정\"/><Cell col=\"13\" text=\"원인작업장\"/><Cell col=\"14\" text=\"불량사진\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:INSPECTIONDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:degree\"/><Cell col=\"6\" text=\"expr:QCSEGMENTID+DEFECTCODE\"/><Cell col=\"7\" text=\"expr:QCSEGMENTNAME + &quot;-&quot; + DEFECTCODENAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:DEFECTQTY\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:REASONCONSUMABLEDEFID\"/><Cell col=\"10\" text=\"bind:REASONCONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:REASONCONSUMABLELOTID\"/><Cell col=\"12\" text=\"bind:REASONSEGMENT\"/><Cell col=\"13\" text=\"bind:REASONAREA\"/><Cell col=\"14\" text=\"bind:OC_FILE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imageViewer",null,null,"250","199","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("img_photo");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dnImg",null,null,"68","20","6","203",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("다운로드");
            obj.set_tooltiptext("FILEDOWNLOAD");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","860","423","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_Image",null,null,"137","24","113","203",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_fileCombo");
            obj.set_codecolumn("ATCH_FILE_GUID");
            obj.set_datacolumn("OC_FILE_NM");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",958,413,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cbo_Image","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM01500D.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01500D.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM01500D.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		:
         * 파일명 		: PCM01500D.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.3.25
         *
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.3.25	김애리   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
         this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
         this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

         /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.mfn_GetInspection(this.parent.LotID);
        	this.parent.DetailLoad = "Y";
        };

         /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        trace('fn_callBack trId ?' + trId);
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}

        	{
        		switch(trId) {
        		case "SelectLotHistoryInspectionDefectPop" :
        		{
        trace(this.ds_InspDefect.saveXML());
        			this.ds_fileCombo.clearData();

        			for(var i=0;i<this.ds_InspDefect.rowcount;i++)
        			{
        				var fileID = this.ds_InspDefect.getColumn(i,"FILERESOURCEID");
        				if(this.nfn_isNull(fileID) == false)
        				{
        					var arrfile_Name = this.ds_InspDefect.getColumn(i,"OC_FILE_NM").split(",");
        					var arrfile_GUID = this.ds_InspDefect.getColumn(i,"ATCH_FILE_GUID").split(",");

        					for(var j=0;j<arrfile_Name.length;j++)
        					{
        						var nRow = this.ds_fileCombo.addRow();
        						this.ds_fileCombo.setColumn(nRow, "ATCH_FILE_ID",fileID);
        						this.ds_fileCombo.setColumn(nRow, "OC_FILE_NM",arrfile_Name[j]);
        						this.ds_fileCombo.setColumn(nRow, "ATCH_FILE_GUID",arrfile_GUID[j]);
        					}

        				}
        			}

        			var filterString = "ATCH_FILE_ID == '" + this.ds_InspDefect.getColumn(0,"FILERESOURCEID") + "'"
        			this.ds_fileCombo.filter();
        			this.ds_fileCombo.filter(filterString);

        trace(this.ds_fileCombo.saveXML());
        			if(this.nfn_isNull(this.ds_InspDefect.getColumn(0,"FILERESOURCEID")) == false)
        			{
        				var atchFileGuid = this.ds_fileCombo.getColumn(0, "ATCH_FILE_GUID");
        				this.cbo_Image.set_value(atchFileGuid);
        				var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + atchFileGuid + ".do";
        				this.imageViewer.set_image(upUrl);
        			}

        			break;
        		}

        		}
        	}
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        this.mfn_GetInspection = function (LotID)
        {
        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE,INSPECTIONDEFID");

        	this.ds_temp.setColumn(0, "LOTID", LotID);
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));
        	this.ds_temp.setColumn(0, "INSPECTIONDEFID", this.parent.InspectionClassID);

        	this.pfn_CostomQuery(this.ds_temp, this.ds_Inspect, "SelectSelfInspectHisForFinalInspect");
        };

        this.mfn_GetInspectionDetail = function ()
        {
        	var nRow = this.ds_Inspect.rowcount == 1 ? 0 : this.ds_Inspect.rowposition;

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE,PROCESSDEFID,PROCESSDEFVERSION,PROCESSSEGMENTID,WORKCOUNT,INSPECTIONDEFID,DEGREE");

        	this.ds_temp.setColumn(0, "LOTID", this.ds_Inspect.getColumn(nRow, "LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));
        	this.ds_temp.setColumn(0, "PROCESSDEFID", this.ds_Inspect.getColumn(nRow, "PROCESSDEFID"));
        	this.ds_temp.setColumn(0, "PROCESSDEFVERSION", this.ds_Inspect.getColumn(nRow, "PROCESSDEFVERSION"));
        	this.ds_temp.setColumn(0, "PROCESSSEGMENTID", this.ds_Inspect.getColumn(nRow, "PROCESSSEGMENTID"));
        	this.ds_temp.setColumn(0, "WORKCOUNT", this.ds_Inspect.getColumn(nRow, "WORKCOUNT"));
        	this.ds_temp.setColumn(0, "INSPECTIONDEFID", this.ds_Inspect.getColumn(nRow, "INSPECTIONDEFID"));
        	this.ds_temp.setColumn(0, "DEGREE", this.ds_Inspect.getColumn(nRow, "degree"));

        	if(this.ds_Inspect.getColumn(nRow, "INSPECTIONDEFID") == "BBTInspection" || this.ds_Inspect.getColumn(nRow, "INSPECTIONDEFID") == "AOIInspection")
        		this.pfn_CostomQuery(this.ds_temp, this.ds_InspDefect, "SelectLotHistoryAOIBBTInspectionDefectPop");
        	else this.pfn_CostomQuery(this.ds_temp, this.ds_InspDefect, "SelectLotHistoryInspectionDefectPop");
        };

        this.ds_Inspect_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0 ) return;

        	this.mfn_GetInspectionDetail();
        };

        this.ds_InspDefect_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0 ) return;

        	var filterString = "ATCH_FILE_ID == '" + this.ds_InspDefect.getColumn(e.newrow,"FILERESOURCEID") + "'"
        	this.ds_fileCombo.filter();
        	this.ds_fileCombo.filter(filterString);
        	var atchFileGuid = this.ds_fileCombo.getColumn(0,"ATCH_FILE_GUID");

        	this.cbo_Image.set_value(atchFileGuid);

        	var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + atchFileGuid + ".do";
        	this.imageViewer.set_image(upUrl);
        };

        this.btn_dnImg_onclick = function(obj,e)
        {
        	var atchFileGuid = this.cbo_Image.value;
        	var dnUrl = nexacro.getEnvironment().services["svcurl"].url + "/comm/downFile/" + atchFileGuid + ".do";
        	this.FileDownload00.set_downloadurl(dnUrl);
        	var bSucc = this.FileDownload00.download();

        	trace("bSucc >> " + bSucc);

        };

        this.cbo_Image_onitemchanged = function(obj,e)
        {
        	var atchFileGuid = e.postvalue;
        	var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + atchFileGuid + ".do";
        	this.imageViewer.set_image(upUrl);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_dnImg.addEventHandler("onclick",this.btn_dnImg_onclick,this);
            this.cbo_Image.addEventHandler("onitemchanged",this.cbo_Image_onitemchanged,this);
            this.ds_Inspect.addEventHandler("onrowposchanged",this.ds_Inspect_onrowposchanged,this);
            this.ds_InspDefect.addEventHandler("onrowposchanged",this.ds_InspDefect_onrowposchanged,this);
            this.ds_fileCombo.addEventHandler("onrowposchanged",this.ds_fileCombo_onrowposchanged,this);
        };
        this.loadIncludeScript("PCM01500D.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
