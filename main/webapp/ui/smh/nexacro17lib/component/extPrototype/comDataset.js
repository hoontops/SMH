var pForm = nexacro.Form.prototype;
/*
 ===============================================================================
 ==  Dataset 관련 공통 함수
 ===============================================================================
 ● gfn_createDataset				: 주어진 scope 범위에 Dataset 존재시 반환, 없으면 생성
 ● gfn_SetFirstRow					: 데이터셋의 첫 번째 데이터(row)를 셋팅
 ● gfn_comComboIns      			: 공통코드 dataset 아규 셋팅
 ● gfn_dsCheckValid     			: DataSet 내의 데이터 무결성을 검사하는 함수
 ● gfn_itemCheck        			: DataSet 내의 데이터 무결성을 검사하는 함수
 ● gfn_checkValidSetFocus			: DataSet 내의 데이터 무결성을 검사한후 focus 처리
 ● gfn_updateToDataset				: 컨트롤이 Dataset에 bind되어 있을경우 즉시 value를 Dataset에 적용시킨다.
 ● gfn_DsGetUpdated				: Datset의 갱신여부를  Return 한다.
 ● gfn_deleteData					: dataset object에서 키에 해당되는 Row를 찾아서 삭제
 ● gfn_moveData					: dataset object에서 키에 해당되는 Row를 찾아서 이동
 ● gfn_editData					: dataset object에서 키에 해당되는 Row를 찾아서 값을 변경
 ● gfn_getData						: dataset object에서 데이터를 가져오는 함수 Null경우에는 Type에 의한 예외처리 하여 반환
 ● gfn_getLookupData				: dataSet object에서 키에 해당되는 Row를 찾아서 칼럼값을 전달
 ● gfn_findData					: dataSet object에서 키에 해당되는 Row를 찾아서 rowpostion 전달
 ● gfn_dsIsUpdated					: dataSet의 Row 중에서 변경된 내용이 있는지 여부를
 ● gfn_isUpdatedRow				: dataSet의 Row가 변경되었는지 판단하는 함수
 ● gfn_isUpdateColumn				: dataSet의 Row 에서 해당 칼럼이 변경되었는지
 ● gfn_allRowDataCall				: Dataset의 모든 행을 함수의 인자로 넘겨주고 함수 호출처리
 ● gfn_dsFilter					: Dataset의 필터한 정보를 대상 Dataset으로 Copy하는 기능
 ● gfn_isCheckDs					: 해당 데이터셋명으로 검색하여 데이터셋이 없으면 데이터셋을 생성
 ● gfn_getDataset					: 해당 데이터셋명으로 검색하여 데이터셋찾아서 리턴 없으면 -1을 반환
 ● gfn_isDatasetChanged			: 데이타셋 변경여부체크
 ● gfn_gridToXpDataset				: 소계와 합계가 있는 그리드의 내용을 데이타셋으로 만들어준다.
 ● gfn_isDupCol					: 데이터셋의 컬럼 키 중복을 검증
 ● gfn_isDupColArg					: argument 를 입력받아 데이터셋의 컬럼 키 중복을 검증
 ● gfn_isDupColRowDelete			: 데이터셋의 해당 컬럼이 중복되면 중복되는 row를 삭제
 */



/**
 * @class 주어진 scope 범위에 Dataset 존재시 반환, 없으면 생성
 * @param {Object} objForm - Form object
 * @param {String} sDsId - Dataset 아이디
 * @return {Object} Dataset
 */  
pForm.gfn_createDataset = function (objForm, sDsId)
{
	try 
	{
		var objDs = objForm.objects[sDsId];  		
		if (this.gfn_isNull(objDs)) {	
			objDs = new Dataset;
			objDs.set_name(sDsId);
			objForm.addChild(sDsId, objDs);		
		}	
		return objDs;
	} catch (e) {
		trace("error", "e : " + e +  ", message : "+e.message);
	}	
}

/**
* 데이터셋의 첫 번째 데이터(row)를 셋팅
* @param {string} dsId DataSetId
* @param {number} sType 첫 번째줄 설정 타입
* @return N/A
* @example
* @memberOf global
*/
pForm.gfn_SetFirstRow = function (dsId, sType) 
{	
    if( sType   == "ALL" ) 
	{
		dsId.insertRow(0);
		dsId.setColumn(0,"CM_CD","");
		dsId.setColumn(0,"CD_NM","전체");
	} 
	else if( sType == "NONE" ) 
	{
		//return;
	} 
	else if( sType == "PK" ) 
	{
		dsId.insertRow(0);
		dsId.setColumn(0,"CM_CD","");
		dsId.setColumn(0,"CD_NM","선택");		
	}
	else if( sType == "BLANK")
	{
		dsId.insertRow(0);
		dsId.setColumn(0,"CM_CD","");
		dsId.setColumn(0,"CD_NM","");
	}
}


/**
* 공통코드 dataset 아규 셋팅
* @param  {object}oCombo
* @param  {strring}맨처음 넣을 값 = select -
* @param  {string} 컬럼명
* @param  {string} 이름명
* @return N/A
* @example
* @memberOf public
*/
pForm.gfn_comComboIns = function(oCombo,sVal,sCodeCd,sCodeNm)
{
    var oDs = this.gfn_getDataset(oCombo.innerdataset);
    oDs.insertRow(0);

    if(sCodeCd == null)
		oDs.setColumn(0,"CODE_CD","");
    else
		oDs.setColumn(0,sCodeCd,"");

	if(sCodeNm == null)
		oDs.setColumn(0,"CODE_NM",sVal);
    else
		oDs.setColumn(0,sCodeNm,sVal);

    oCombo.set_index(0);
}

/**
* DataSet 내의 데이터 무결성을 검사하는 함수
* @param {string}  DataSet
* @param {string}  objDsValid(Vlidation 체크 데이터셋 ) 없으면 [objDs]_valid명칭으로 데이터셋
* @param {object}  그리드 데이터셋 체크시 적용
* @return  N/A
* @example
* @memberOf public
*/
pForm.gfn_dsCheckValid = function (strDs,objDsValid,objGrid)
{
    if(this.gfn_isNull(objDsValid))
    {
        objDsValid = this.objects[strDs.name + "_valid"];
    }


	if (this.gfn_isNull(objDsValid))
	{
		return true;
	}

	var nRowCnt = objDs.getRowCount();
    var nRowValidCnt = objDsValid.getRowCount();

	for (var i = 0; i < nRowCnt; i++)
	{
// 		if (objDs.getRowType(i) == Dataset.ROWTYPE_INSERT || objDs.getRowType(i) == Dataset.ROWTYPE_UPDATE)
// 		{
		    for(var j = 0; j < nRowValidCnt; j++)
		    {
		        var strColID = objDsValid.getColumn(j,"ID");

		        var oColInfo = objDs.getColumnInfo(strColID);

		        if(!this.gfn_isNull(oColInfo))
		        {
					var rtnVar = this.gfn_itemCheck(i, strColID, objDs, objDsValid,j);
					if (!rtnVar)
					{
					    objDs.set_rowposition(i);
					    this.gfn_checkValidSetFocus(objDs,objDsValid,j,objGrid);
						return false;
					}
		        }

		    }
//		}
	}
	return true;
}

/**
* DataSet 내의 데이터 무결성을 검사하는 함수
* @param {number}  DataSet row position
* @param {string}  DataSet Column Index
* @param {object}  DataSet(Grid에 bind된 DataSet)
* @param {object}  Dataset(objDs의 무결성 검사용 DataSet
* @param {number}  Dataset(objDs의 무결성 검사용 rowindex
* @return  N/A
* @example
* @memberOf public
*/
pForm.gfn_itemCheck = function (rowNum, colNum, objDs, objDsValid,nDsValidRow)
{

	var nColCnt = objDsValid.getColCount();
	var value = objDs.getColumn(rowNum, colNum);

	var returnVal;
	var title = objDsValid.getColumn(nDsValidRow,"NM");

    if(this.gfn_isNull(title)) return true;


	for (var k = 0; k < nColCnt; k++)
	{
		var chkItem = objDsValid.getColID(k);
        var chkValue = objDsValid.getColumn(nDsValidRow,k);

        if(this.gfn_isNull(chkValue)) continue;

		switch (chkItem)
		{
			case "REQUIRED":
				if (chkValue == "Y")
				{
					if (this.gfn_isNull(value))
					{
						this.gfn_alert("msg.err.validator.required", "warning", title);
						return false;
					}
				}
				break;
			case "MINLENGTH":
				if (this.gfn_length(value) < chkValue)
				{
					this.gfn_alert("msg.err.validator.minlength", "warning", title, chkValue);
					return false;
				}
				break;
			case "MAXLENGTH":
				if (this.gfn_length(value) > chkValue)
				{
					this.gfn_alert("msg.err.validator.maxlength", "warning", title, chkValue);
					return false;
				}
				break;
			case "NUMBER":
				if (chkValue == "f" && !nexacro.isNumeric(value))
				{
					this.gfn_alert("msg.err.validator.chknumber.f", "warning", title, chkValue);
					return false;
				}
				else if (chkValue == "i" && !nexacro.isNumeric(value))
				{
					this.gfn_alert("msg.err.validator.chknumber.i", "warning", title, chkValue);
					return false;
				}
				else if (chkValue == "n" && !nexacro.isNumeric(value))
				{
					this.gfn_alert("msg.err.validator.chknumber.n", "warning", title, chkValue);
					return false;
				}
				break;
		}
	}
	return true;
}

/**
* DataSet 내의 데이터 무결성을 검사한후 focus 처리
* @param {number}  DataSet
* @param {string}  Dataset(objDs의 무결성 검사용 DataSet
* @param {object}  DataSetDataset(objDs의 무결성 검사용 DataSet
* @param {object}  Grid
* @return  N/A
* @example
* @memberOf private
*/
pForm.gfn_checkValidSetFocus = function(objDs,objDsValid,nDsValidRow,objGrid)
{
     var sDsColId = objDsValid.getColumn(nDsValidRow,"ID");

     if(this.gfn_isNull(objGrid))
     {
         var sDsNm = objDs.name;
         var sTargetPath = objDsValid.getColumn(nDsValidRow,"FOCUS");
         if(this.gfn_isNull(sTargetPath))
         {
			 // 2015.08.28 ExtNx -> Eco로 전환
			 var oBind = Eco.XComp.query(this, "typeOf == 'BindItem' && prop[datasetid] == '"+sDsNm+"'  && prop[columnid] == '"+sDsColId+"'","")[0];

			 if(!this.gfn_isNull(oBind))
			 {
				 oComp = eval("this."+oBind.compid);
			 }
         }
         else
         {
             oComp = eval(sTargetPath);
         }

		 if(!this.gfn_isNull(oComp))
		 {
			 oComp.setFocus();
		 }
     }
     else
     {
         var nCell = objGrid.getBindCellIndex("body",sDsColId);
         objGrid.setCellPos(nCell);
         objGrid.setFocus();
     }
}


/**
* 컨트롤이 Dataset에 bind되어 있을경우 즉시 value를 Dataset에 적용시킨다.
* @param
* @return  N/A
* @example
* @memberOf public
*/
pForm.gfn_updateToDataset = function ()
{
	var objComp = this.getFocus();

	if (objComp != null)
	{
		try
		{
			objComp.updateToDataset();
		}
		catch (e)
		{
		}
	}
}

/**
* Datset의 갱신여부를  Return 한다.
* @param  {string} 확인 대상 Dataset
* @return  {boolen} 갱신여부
* @example
* @memberOf public
*/
pForm.gfn_DsGetUpdated = function (objDs)
{
	this.gfn_updateToDataset();
	return this.gfn_DsIsUpdated(objDs);
}

/**
* dataset object에서 키에 해당되는 Row를 찾아서 삭제
* @param {object} dataset
* @param {string} 키칼럼
* @param {string} :키값
* @param {string} 서브키칼럼
* @param {string} :서브 키값
* @return N/A
* @example
* @memberOf global
*/
pForm.gfn_deleteData = function (ObjDs, strIdCol, strId, strSubCol, strSubId)
{
	var curRow = this.gfn_findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
	ObjDs.deleteRow(curRow);
}

/**
* dataset object에서 키에 해당되는 Row를 찾아서 이동
* @param {object} dataset
* @param {string} 키칼럼
* @param {string} :키값
* @param {string} : 이동할 Row,
* @param {string} :서브키칼럼
* @param {string} : 서브 키값
* @return N/A
* @example
* @memberOf global
*/
pForm.gfn_moveData = function (ObjDs, strIdCol, strId, newRow, strSubCol, strSubId)
{
	var curRow = this.gfn_findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
	ObjDs.moveRow(curRow, newRow);
}


/**
* dataset object에서 키에 해당되는 Row를 찾아서 값을 변경
* @param {object} dataset
* @param {string} 키칼럼
* @param {string} :키값
* @param {string} : 변경할 칼럼
* @param {string} :변경값
* @param {string} : 서브키칼럼
* @param {string} : 서브 키값
* @return N/A
* @example
* @memberOf global
*/
pForm.gfn_editData = function (ObjDs, strIdCol, strId, valCol, newVal, strSubCol, strSubId)
{
	var curRow = this.gfn_findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
	return ObjDs.setColumn(curRow, valCol, newVal);
}


/**
* dataset object에서 가져오는 함수 Null경우에는 Type에 의한 예외처리 하여 반환
* @param {object} dataset
* @param {string} 키칼럼
* @param {string} :키값
* @param {string} : 변경할 칼럼
* @param {string} :변경값
* @param {string} : 서브키칼럼
* @param {string} : 서브 키값
* @return N/A
* @example
* @memberOf global
*/
pForm.gfn_getData = function(ObjDs,nRow,sColId,sVal)
{
    var oData = ObjDs.getColumn(nRow,sColId);

    var oColInfo = ObjDs.getColumnInfo(sColId);
    if(this.gfn_isNull(oColInfo)) return "";
    var sType = oColInfo.type;

    if(this.gfn_isNull(sVal))
    {
		switch(sType.toUpperCase())
		{
			case "STRING" :
			   sVal = "";
			break;
			case "BIGDECIMAL" :
			case "INT" :
			case "FLOAT" :
			   sVal = 0;
			break;
		}
	}

    var rtnVal = (this.gfn_isNull(oData)) ? sVal : oData;

    return rtnVal;
}

/**
* dataSet object에서 키에 해당되는 Row를 찾아서 칼럼값을 전달
* @param {object} dataset
* @param {string} 키칼럼
* @param {string} :키값
* @param {string} : dataSet 칼럼
* @param {string} :변경값
* @param {string} : 서브키칼럼
* @param {string} : 서브 키값
* @return N/A
* @example
* @memberOf global
*/
pForm.gfn_getLookupData = function (ObjDs, strIdCol, strId, strInfo, strSubCol, strSubId)
{
	var strVal;
	var curRow = this.gfn_findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
	if (curRow < 0)
	{
		return "";
	}

	strVal = ObjDs.getColumn(curRow, strInfo);
	if (this.gfn_isNull(strVal))
	{
		return "";
	}

	return strVal;
}


/**
* dataSet object에서 키에 해당되는 Row를 찾아서 rowpostion 전달
* @param {object} dataset
* @param {string} 키칼럼
* @param {string} :키값
* @param {string} : 서브키칼럼
* @param {string} :서브 키값
* @return N/A
* @example
* @memberOf global
*/
pForm.gfn_findData = function (ObjDs, strIdCol, strId, strSubCol, strSubId)
{
	//var arrArgument = this.gfn_findData.arguments;
	if (this.gfn_isNull(strSubCol))
	{
		return ObjDs.findRow(strIdCol, strId);
	}

	return ObjDs.findRowExpr(strIdCol + " == '" + strId + "' && " + strSubCol + " == '" + strSubId + "'");
}

/**
* dataSet의 Row 중에서 변경된 내용이 있는지 여부를  판단하는 함수
* @param {object} DataSet
* @return {boolen} true = 변경 된 데이터가 존재 , false = 변경 된 데이터가 없음
* @example
* @memberOf global
*/
pForm.gfn_dsIsUpdated = function (objDs)
{
	if (objDs.getDeletedRowCount() > 0)
	{
		return true;
	}

	if (objDs.findRowExpr("(this.getRowType(rowidx)==Dataset.ROWTYPE_UPDATE)||(this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT)") > -1)
	{
		return true;
	}
	return false;
}

/**
* dataSet의 Row가 변경되었는지 판단하는 함수
* @param {object} objDs(DataSet)
* @param {number} 체크할 Row index
* @return {boolen} true = 변경 된 데이터가 존재 , false = 변경 된 데이터가 없음
* @example
* @memberOf global
*/
pForm.gfn_isUpdatedRow = function (objDs, nRow)
{
	if (objDs.updatecontrol == true)
	{
		if (objDs.getRowType(nRow) == 2 || objDs.getRowType(nRow) == 4)
		{
			return true;
		}
		return false;
	}
	else
	{
		for (var i = 0; objDs.getColCount(); i++)
		{
			if (this.gfn_IsUpdateColumn(objDs, nRow, i) == true)
			{
				return true;
			}
		}
	}
	return false;
}

/**
* dataSet의 Row 에서 해당 칼럼이 변경되었는지
* @param {object} objDs(DataSet)
* @param {number} 체크할 Row index
* @param {string} 체크할 컬럼값
* @return {boolen} true = 변경 된 데이터가 존재 , false = 변경 된 데이터가 없음
* @example
* @memberOf global
*/
pForm.gfn_isUpdateColumn = function (objDs, nRow, Column)
{
	if (objDs.getRowType(nRow) == 2)
	{
		if (this.gfn_isNull(objDs.getColumn(nRow, Column)))
		{
			return false;
		}
	}
	else
	{
		if (objDs.getColumn(nRow, Column) == objDs.getOrgColumn(nRow, Column))
		{
			return false;
		}
	}
	return true;
}

/**
* Dataset의 모든 행을 함수의 인자로 넘겨주고 함수 호출처리
* @param {object} objDs(DataSet)
* @param {string} 호출할 함수
* @param {boolen} 변경된 데이터만 호출할지 여부
* @return {string} 호출된값
* @example
* @memberOf global
*/
pForm.gfn_allRowDataCall = function (dsObj, callFncObj, bModifiedOnly)
{
	var retVal;
	for (var i = 0; i < dsObj.getRowCount(); i++)
	{
		if (bModifiedOnly && !(dsObj.getRowType(i) == 2 || dsObj.getRowType(i) == 4))
		{
			continue;
		}
		retVal = callFncObj(dsObj, i);
		if (this.gfn_isNull(retVal) == false)
		{
			return retVal;
		}
	}
}

/**
* Dataset의 필터한 정보를 대상 Dataset으로 Copy하는 기능
* @param {object} 목적데이타셋dsDs(DataSet)
* @param {string} 처리데이타셋
* @param {string} 필터표현
* @return N/A
* @example
* @memberOf global
*/
 pForm.gfn_dsFilter = function(dsSc,dsTg,sFilterExpr)
 {
    var sKeyString = dsSc.keystring;
    if(!this.gfn_isNull(sKeyString))  sKeyString = sKeyString.toString();
    dsSc.set_keystring("");
    dsSc.filter(sFilterExpr);
    dsTg.copyData(dsSc,true);
    dsSc.filter("");
    if(!this.gfn_isNull(sKeyString))  dsSc.set_keystring(sKeyString);
 }

/**
* 해당 데이터셋명으로 검색하여 데이터셋이 없으면 데이터셋을 생성
* @param {string} 데이터셋명
* @return {string} dataset
* @example
* @memberOf global
*/
pForm.gfn_isCheckDs = function(sDsNm)
{
     var oDs = this.gfn_getDataset(sDsNm);

     if(this.gfn_isNull(oDs))
     {
         oDs = new Dataset;
         oDs.name = sDsNm;
         this.addChild(sDsNm, oDs);
     }

     return oDs;
}

/**
* 해당 데이터셋명으로 검색하여 데이터셋찾아서 리턴 없으면 -1을 반환
* @param {string} 데이터셋명
* @return {string} dataset
* @example
* @memberOf global
*/
pForm.gfn_getDataset = function(sDsNm)
{
     // 2015.08.28 ExtNx -> Eco로 전환
     return this.objects[sDsNm];	//Eco.XComp.query(this, "typeOf == 'Dataset' && prop[name] == '"+sDsNm+"'")[0];
}

//===================================================================================================================================================
//===================================================================================================================================================
//===================================================================================================================================================

/**
 * 데이타셋 변경여부체크
 * @param {String} oDs : 데이타셋 
 * @return {Boolean} - true : 변경, false : 미변경
 */  
pForm.gfn_isDatasetChanged = function (oDs)
{
	var rowCnt = oDs.getRowCount();
	var bool = false;

	for (var i = 0; i < rowCnt; i++) 
	{
		if (oDs.getRowType(i) == Dataset.ROWTYPE_INSERT
			 || oDs.getRowType(i) == Dataset.ROWTYPE_UPDATE
			 || oDs.getRowType(i) == Dataset.ROWTYPE_DELETE) 
		{
			bool = true;
		}
	}

	rowCnt = oDs.getDeletedRowCount();

	for (var i = 0; i < rowCnt; i++) 
	{
		bool = true;
	}
	return bool;
}

/**
 * 소계와 합계가 있는 그리드의 내용을 데이타셋으로 만들어준다.
 * @param objGrid - 그리드 
 * @param objDs - 화면에서 생성해서 출력물로 넘겨줄 데이타셋. 
 * @return objDs - 출력물에 보내줄 데이타셋(소계와 합계가 있는거.)
 */  
pForm.gfn_gridToXpDataset = function (objGrid, objDs)
{
	for (var k = 0; k < objGrid.getFormatRowCount(); k++) 
	{
		// body의 데이타 얻어오기.
		if (objGrid.getFormatRowProperty(k, "band") == "body") 
		{
			for (var i = 0; i < objGrid.rowcount; i++) 
			{
				var nRow = objDs.addRow();
				for (var j = 0; j < objGrid.getCellCount("body"); j++) 
				{
					objDs.setColumn(nRow, "Column" + j, objGrid.getCellText(i, j));
				}
			}
		}

		// summ의 데이타 얻어오기.
		if (objGrid.getFormatRowProperty(k, "band") == "summ") 
		{
			var nRow = objDs.addRow();
			for (var m = 0; m < objGrid.getCellCount("summ"); m++) 
			{
				var sColText = objGrid.getCellText(-2, m);
				objDs.setColumn(nRow, "Column" + m, sColText);
			}
		}
	}

	return objDs;
}

/******************************************************************************
 * Function명 : gfn_isDupCol
 * 설명       : 데이터셋의 중복을 검증한다.
 * Params     : ds : Dataset
 *              aryColumn  : 컬럼리스트
 * Return     : isDup -> true면 중복 , upRow -> 중복된 상위 로우 downRow -> 중복된 하위 로우 gotoRow -> rowposition을 수정할 로우
 * 사용법    : var jDupResult = gfn_isDupCol(dsMain, ["ay","dghtCrseScCode"]);
 if(jDupResult.isDup){
 dsMain.rowposition = jDupResult.row2;
 alert("중복발생");
 }
 ******************************************************************************/
pForm.gfn_isDupCol = function (ds, aryColumn, fncAcceptRow)
{
	var result = {
		isDup : false,
		upRow : -1,
		downRow : -1,
		dupRow : -1
	};

	for (var i = ds.rowcount - 1; i > 0; i--) 
	{
		if (fncAcceptRow != undefined) 
		{
			if (false == fncAcceptRow(i)) 
			{
				continue;
			}
		}

		var sSearchText = "1 == 1 ";
		for (var n = 0,size2 = aryColumn.length; n < size2; n++) 
		{
			sSearchText += "&& " + aryColumn[n] + " == '" + ds.getColumn(i, aryColumn[n]) + "'";
		}
		var nRow = ds.findRowExpr(sSearchText, 0, i);
		if (nRow > -1) 
		{
			result.isDup = true;
			result.upRow = nRow;
			result.downRow = i;
			result.dupRow = this.gfn_smartPosRow(ds, nRow, i);

			break;
		}
	}

	return result;
}
/******************************************************************************
 * Function명 : gfn_isDupColArg
 * 설명       : argument를 입력받아 해당 값이 dataSet에 존재하는지 체크
 * Params     : ds : Dataset
 *              aryColumn  : 컬럼리스트
 * Return     : isDup -> true면 중복 , upRow -> 중복된 상위 로우 downRow -> 중복된 하위 로우 gotoRow -> rowposition을 수정할 로우
 * 사용법    : var jDupResult = gfn_isDupCol(dsMain, ["ay","dghtCrseScCode"]);
 if(jDupResult.isDup){
 dsMain.rowposition = jDupResult.row2;
 alert("중복발생");
 }
 ******************************************************************************/
pForm.gfn_isDupColArg = function (ds, column, arg)
{
	var result = {
		isDup : false,
		upRow : -1,
		downRow : -1,
		dupRow : -1
	};

	for (var i = 0; i < ds.rowcount; i++) 
	{
		var sSearchText = "1 == 1 ";

		sSearchText += "&& " + column + " == '" + arg + "'";
		var nRow = ds.findRowExpr(sSearchText, 0, i);
		if (nRow > -1) 
		{
			result.isDup = true;
			result.upRow = nRow;
			result.downRow = i;
			result.dupRow = this.gfn_smartPosRow(ds, nRow, i);
			break;
		}
	}

	return result;
}


/******************************************************************************
 * Function명 : gfn_isDupColRowDelete
 * 설명       : 데이터셋의 해당 컬럼이 중복되면 중복되는 row를 삭제
 * Params     : ds : Dataset
 *              aryColumn  : 컬럼리스트
 * Return     : boolean
 * 사용법    : var jDupResult = gfn_isDupCol(dsMain, ["ay","dghtCrseScCode"]);
 if(jDupResult.isDup){
 dsMain.rowposition = jDupResult.row2;
 alert("중복발생");
 }
 ******************************************************************************/
pForm.gfn_isDupColRowDelete = function (ds, aryColumn, fncAcceptRow)
{
	var result = {
		isDup : false,
		upRow : -1,
		downRow : -1,
		dupRow : -1
	};

	for (var i = ds.rowcount - 1; i > 0; i--) 
	{
		if (fncAcceptRow != undefined) 
		{
			if (false == fncAcceptRow(i)) 
			{
				continue;
			}
		}

		var sSearchText = "1 == 1 ";
		for (var n = 0,size2 = aryColumn.length; n < size2; n++) 
		{
			sSearchText += "&& " + aryColumn[n] + " == '" + ds.getColumn(i, aryColumn[n]) + "'";
		}

		var nRow = ds.findRowExpr(sSearchText, 0, i);
		if (nRow > -1) 
		{
			ds.deleteRow(i);
		}
	}
}
