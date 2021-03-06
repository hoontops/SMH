//XJS=pcmCommon.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: pcm 에서 쓰이는 공통
         * 파일명 		: pcmCommon.xjs
         * 작성자 		: 김애리
         * 작성일 		: 2021.3.12
         *
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.3.12	김애리   	최초작성
         * 2021.4.5		박대호		품목 조회 시 Rev. 콤보변경setProduct_ProdVersion(); 함수추가
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

         /*===============================================================================
        == 기준관리(BAS) 공통함수 목록
        ===============================================================================
        ● pfn_allTrim              :
        ● pfn_CostomQuery          :
        ● pfn_CostomQuerySync      :
        /*******************************************************************************/


        this.pfn_allTrim = function(sValue)
        {
        	if(sValue==null)		return "";
        	if (new String(sValue).valueOf() == "undefined") return "";

            var objValue = new String(sValue);
            var sRtnValue="";
            var i;

            return nexacro.trim( objValue );
        };

        this.pfn_CostomQuery = function (ds_INPUT, ds_OUTPUT, query)
        {
        		if(ds_INPUT.getConstColIndex("SQL_ID") < 0) ds_INPUT.addColumn("SQL_ID", "String","255");
        		ds_INPUT.setColumn(0,"SQL_ID",query);
        		ds_OUTPUT.clearData(); //ds_cbo_ProdVersion

        		var sSvcID 			= query;
        		var sController 	= "/pcmCommon/selectCustomQuery.do";
        		var sInDatasets 	= "INPUT="+ ds_INPUT.name;
        		var sOutDatasets 	= ds_OUTPUT.name + "=output";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.pfn_CostomQuerySync = function (ds_INPUT, ds_OUTPUT, query)
        {
        		if(ds_INPUT.getConstColIndex("SQL_ID") < 0) ds_INPUT.addColumn("SQL_ID", "String","255");
        		ds_INPUT.setColumn(0,"SQL_ID",query);
        		ds_OUTPUT.clearData(); //ds_cbo_ProdVersion

        		var sSvcID 			= query;
        		var sController 	= "/pcmCommon/selectCustomQuery.do";
        		var sInDatasets 	= "INPUT="+ ds_INPUT.name;
        		var sOutDatasets 	= ds_OUTPUT.name + "=output";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);
        };

        this.pfn_openPopup_LOTID = function (popupId,lotID,arg_type)
        {
        	var oArg = {};
        	oArg.arg_type = arg_type;
        	oArg.arg_popupCd = "P00133";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "LOTID";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "LOTID="+lotID;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };

        this.openAREA_P00124 = function (arg_type, dsSearch)
        {
        	var areaID = dsSearch.getColumn(0,"AREAID")
        	var languageType = nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");

        	var popupId = "SEARCH_AREA";
        	var oArg = {};
        	oArg.arg_type = arg_type;
        	oArg.arg_popupCd = "P00124";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "AREAID|AREANAME";
        	oArg.arg_paramCols = "PLANTID|LANGUAGETYPE";
        	oArg.arg_paramValues = this.gf_getSiteType() + "|" + languageType;
        	oArg.arg_searchStr = "TXTAREA="+areaID;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=500,height=450");
        };

        this.openProduct_P00105 = function (arg_type, dsSearch, strProdDivision)
        {
        	var popupId = "SEARCH_PRODUCT";
        	var pPRODUCTDIVISION = strProdDivision;
        	var pPlantID = dsSearch.getColumn(0,"PLANTID");
        	var processDefId = dsSearch.getColumn(0,"PRODUCTDEFID");
        	var prductIDCondition = processDefId == "" ? "" : "TXTPRODUCTDEFNAME=" + processDefId + "|";

        	var oArg = {};
        	oArg.arg_type = arg_type;
        	oArg.arg_popupCd = "P00105";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME";
        	oArg.arg_paramCols = "PLANTID";
        	oArg.arg_paramValues = pPlantID;
        	oArg.arg_searchStr = prductIDCondition + "PRODUCTDIVISION=" + pPRODUCTDIVISION;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };

        this.openUSER_P00155 = function (dsSearch,arg_type)
        {
        	var userName = dsSearch.getColumn(0,"USERNAME");
        	var areaID = this.pfn_allTrim(dsSearch.getColumn(0,"AREAID"));

        	var popupId = "SEARCH_USER";
        	var oArg = {};
        	oArg.arg_type = arg_type;
        	oArg.arg_popupCd = "P00155";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "USERID|USERNAME";
        	oArg.arg_paramCols = "PLANTID|ENTERPRISE|AREAID";
        	oArg.arg_paramValues = this.gf_getSiteType() + "|" + this.gf_getEnterpriseId() + "|" + areaID;
        	oArg.arg_searchStr = "USERIDNAME="+userName;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=500,height=450");
        };

        this.setProduct_P00105 = function (rtn, ds_cbo_ProdVersion, dsSearch)
        {

        	if(rtn.length == 1) {
        		var colArray = rtn[0];
        		ds_cbo_ProdVersion.clearData();
        		ds_cbo_ProdVersion.addRow();
        // 		ds_cbo_ProdVersion.setColumn(0,"PRODUCTDEFVERSIONCODE",colArray[1]);
        // 		ds_cbo_ProdVersion.setColumn(0,"PRODUCTDEFVERSIONNAME",colArray[1]);
        // 		this.AddAll(ds_cbo_ProdVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");

        		dsSearch.setColumn(0,"PRODUCTDEFID",colArray[0]);
        		//dsSearch.setColumn(0,"PRODUCTDEFVERSION",colArray[1]);
        		this.GetProductVersion(ds_cbo_ProdVersion, dsSearch);
        		dsSearch.setColumn(0,"PRODUCTDEFVERSION", colArray[1]);
        		dsSearch.setColumn(0,"PRODUCTDEFNAME",colArray[2]);

        	} else if(rtn.length > 1) {
        		var arrCode = [];
        		for(var i=0; i<rtn.length; i++)
        		{
        			var colArray = rtn[i];
        			arrCode.push(colArray[0]);
        		}
        		dsSearch.setColumn(0,"PRODUCTDEFID",arrCode.join(","));
        		this.GetProductVersion(ds_cbo_ProdVersion, dsSearch);//eleventh : 여러개의 PRODUCTDEFID 로 ver을 distinct 해옴.
        		dsSearch.setColumn(0,"PRODUCTDEFNAME","");
        	}
        };

        this.AddAll = function(obj,code,name)
        {
        	obj.insertRow(0);
        	obj.setColumn(0,code,"");
        	obj.setColumn(0,name,"전체");
        };

        this.AddSelect = function(obj,code,name)
        {
        	obj.insertRow(0);
        	obj.setColumn(0,code,"");
        	obj.setColumn(0,name,"선택");
        };

        this.GetProductVersion = function (ds_cbo_ProdVersion, dsSearch)
        {
        	this.pfn_CostomQuerySync(dsSearch , ds_cbo_ProdVersion, "selectProductVersionMulty")
        	this.AddAll(ds_cbo_ProdVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	dsSearch.setColumn(0,"PRODUCTDEFVERSION", "");
        };

        this.pfn_DatasetAddColumn = function (objDataset, strColumnInfo)
        {
        	var arrColumn = strColumnInfo.split(",");
        	var setEnable = objDataset.enableevent;

        	objDataset.set_enableevent(false);

        	var i;
        	for (i=0; i<arrColumn.length; i++) {
        		if(objDataset.getConstColIndex(arrColumn[i]) < 0) objDataset.addColumn(arrColumn[i], "String","255");
        	}

        	if(objDataset.rowcount == 0) objDataset.addRow();

        	objDataset.set_enableevent(setEnable);

        };


        this.SelectRow2JsonString = function(ds_obj){
        	var result = "";

        	var nRow = ds_obj.rowposition;
        	if(nRow < 0) return "";
        	var arrColData = [];
        	for(var col=0;col<ds_obj.colcount;col++)
        	{
        		var colID = ds_obj.getColID(col);
        		var colVal = ds_obj.getColumn(nRow, col);
        		// arrColData.push( " " + colID + ":" + colVal + " " );
        		arrColData.push( '"' + colID + '":"' + colVal + '"' );
        	}

        	result = "{" + arrColData.join(",") + "}";
        	return result;
        };

        //품목 조회 시 Rev. 콤보변경
        this.setProduct_ProdVersion = function (rtn, ds_cbo_ProdVersion, dsSearch, arg_type)
        {
        	var arrCode = [];
        	for(var i=0; i<rtn.length; i++)
        	{
        		var colArray = rtn[i];
        		if(arg_type == "C")
        		{
        			arrCode.push(colArray[0]);
        		}
        		else if(arg_type == "B")
        		{
        			arrCode.push(rtn[i]);
        		}
        	}
        	dsSearch.setColumn(0,"PRODUCTDEFID",arrCode.join(","));
        	this.GetProductVersion(ds_cbo_ProdVersion, dsSearch);
        };


        this.pfn_CurrencyFormat = function(obj, type) {

            if(this.nfn_isNull(obj)) return;

            var txtNumber = "";

            if(obj == '[object]') {
                txtNumber = String(obj.value);
            } else {
                txtNumber = String(obj);
            }

            if(!this.nfn_isNull(type)) {
                var idxVal = txtNumber.indexOf(".");
                var chkVal = txtNumber.length - idxVal;

                if(type == "F") {
                    if(idxVal == -1) {
                        txtNumber = txtNumber + ".00";
                    } else if(chkVal == 2) {
                        txtNumber = txtNumber + "0";
                    }
                } else {
                    var digit = Number(type);
                    var suffix1 = ".";
                    var suffix2 = "";

                    if(digit != 0) {
                        if(idxVal == -1) {
                            for(var i=0; i<digit; i++) {
                                suffix1 += "0";
                            }
                            txtNumber = txtNumber + suffix1;
                        } else if(chkVal >= 2) {
                            for(var j=0; j<digit-chkVal+1; j++) {
                                suffix2 += "0";
                            }
                            txtNumber = txtNumber + suffix2;
                        }
                    }
                }
            }
            var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
            var arrNumber = txtNumber.split('.');
            var result = "";
            arrNumber[0] += '.';

            do {
                arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
            } while (rxSplit.test(arrNumber[0]));

            if(arrNumber.length > 1) {
                result = arrNumber.join('');
            } else {
                result = arrNumber[0].split('.')[0];
            }

            if(result.substring(0, 1) == ".") result = "0" + result;
            if(obj == '[object]') {
                obj.value = result;
            }

            return result;
        }



        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
