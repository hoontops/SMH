(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_grid_getBindCellIndex");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sub", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ID_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEE_OFF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LOCKER_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"VISIT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BAG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NATION_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOLE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOUNT_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOUNT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"LOCKERKEY_RETURN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ROUNDCHK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHKOUT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ISRT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ISRT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISRT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">1</Col><Col id=\"COMPANY_CD\">2</Col><Col id=\"ID_NO\">3</Col><Col id=\"TEE_OFF_NO\">4</Col><Col id=\"BOOKG_NO\">5</Col><Col id=\"LOCKER_KEY\">6</Col><Col id=\"VISIT_NAME\">7</Col><Col id=\"BAG_NAME\">8</Col><Col id=\"CUST_ID\">9</Col><Col id=\"MEMBER_CD\">0</Col><Col id=\"MEMBER_NO\">11</Col><Col id=\"SEX_CD\">12</Col><Col id=\"NATION_CD\">13</Col><Col id=\"HOLE_CD\">14</Col><Col id=\"PAYMT_CD\">15</Col><Col id=\"DISCOUNT_REMARK\">16</Col><Col id=\"DISCOUNT_AMT\">17</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_sub",null,"59","960","157","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_sub");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("comboselect");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"30\"/><Column size=\"76\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"96\"/><Column size=\"79\"/><Column size=\"91\"/><Column size=\"51\"/><Column size=\"50\"/><Column size=\"52\"/><Column size=\"64\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"내장객명\"/><Cell col=\"2\" text=\"회원번호\" wordWrap=\"true\"/><Cell col=\"3\" text=\"성별\" wordWrap=\"true\"/><Cell col=\"4\" text=\"락카키\"/><Cell col=\"5\" text=\"백네임\"/><Cell col=\"6\" text=\"J\"/><Cell col=\"7\" text=\"홀\"/><Cell col=\"8\" text=\"회원구분\"/><Cell col=\"9\" text=\"우대구분\"/><Cell col=\"10\" text=\"이벤트\"/><Cell col=\"11\" text=\"내외\"/><Cell col=\"12\" text=\"대여\"/><Cell col=\"13\" text=\"체크인\"/><Cell col=\"14\" text=\"정산\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" text=\"bind:VISIT_NAME\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"expand\" expandimage=\"\"/><Cell col=\"2\" text=\"bind:MEMBER_NO\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" text=\"bind:SEX_CD\" combodataset=\"ds_sexCd\" combocodecol=\"MINOR_CD\" combodatacol=\"MINOR_NAME\" textAlign=\"center\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:LOCKER_KEY\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:BAG_NAME\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:HOLE_CD\" combodataset=\"ds_holeCd\" combocodecol=\"MINOR_CD\" combodatacol=\"MINOR_NAME\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:MEMBER_CD\" combodataset=\"ds_memberCd\" combocodecol=\"MINOR_CD\" combodatacol=\"MINOR_NAME\" textAlign=\"center\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:PAYMT_CD\" combodataset=\"ds_paymtCd\" combocodecol=\"MINOR_CD\" combodatacol=\"MINOR_NAME\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:DISCOUNT_AMT\"/><Cell col=\"11\" displaytype=\"combo\" text=\"bind:NATION_CD\" combodataset=\"ds_nationCd\" combocodecol=\"MINOR_CD\" combodatacol=\"MINOR_NAME\"/><Cell col=\"12\"/><Cell col=\"13\" displaytype=\"combo\" edittype=\"none\" text=\"bind:ISRT_DATE\" combodataset=\"ds_yn\" combocodecol=\"MINOR_CD\" combodatacol=\"MINOR_NAME\"/><Cell col=\"14\"/></Band></Format><Format id=\"format_copy\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","37","21","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("nexacro_grid_getBindCellIndex.xfdl", function() {

        this.Button00_onclick = function (obj, e)
        {
        	trace("grd_sub.getCellCount : " + this.grd_sub.getCellCount("body"));
        	for (var j = 0; j < this.grd_sub.getCellCount("body"); j++)
        	{
        		var sColNm = this.grd_sub.getCellProperty("body", j, "text");
        		// trace(sColNm);
        		if (sColNm != "")
        		{
        			var sColNm = sColNm.split("bind:");
        			trace(sColNm[1]);
        			var iCellIdx = this.grd_sub.getBindCellIndex("body", sColNm[1]);
        			var iColIdx = this.grd_sub.getCellProperty("body", iCellIdx, "col");
        			trace("iCellIdx : " + iCellIdx + " iColIdx : " + iColIdx + " : " + sColNm[1]);
        		}
        	}
        };

        this.grd_sub_oncellclick = function (obj, e)
        {
        	trace(e.col + " : " + e.cell);
        };

        this.grd_program_onheadclick = function (obj, e)
        {
        	trace(e.col + " : " + e.cell);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_sub.addEventHandler("oncellclick",this.grd_sub_oncellclick,this);
            this.grd_sub.addEventHandler("onheadclick",this.grd_program_onheadclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.ds_sub.addEventHandler("oncolumnchanged",this.ds_sub_oncolumnchanged,this);
        };
        this.loadIncludeScript("nexacro_grid_getBindCellIndex.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
