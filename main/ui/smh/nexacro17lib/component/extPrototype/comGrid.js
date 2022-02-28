var pForm = nexacro.Form.prototype;
 /*
 ===============================================================================
 == Grid 관련 함수
 ===============================================================================
 ● gfn_clipboardPaste			: Clipboard에 Copy된 내용을 그리드의 선택된 영역에 Paste 한다.
 ● _gfn_grid_background		: 그리드 컬럼 expr background 셋팅
 ● gfn_GridKeyCheck			: 그리드로 입력시 키 컬럼 널 체크 후 해당 row 및 cell에 위치 반환.
 ● gfn_getBindColName			: body cell index로 binding 된 컬럼명을 얻어온다.
 ● gfn_gridSort				:  그리드의 Sort를 처리한다.
 ● gfn_ProcGrdSort				:  선택된 Grid Column에 대한 Sort 처리 하는 함수
 ● gfn_GridMultiDataSort		:  선택된 Grid Column에 대한 Sort 처리 하는 함수
 ● gfn_GridDataSort			:  단일 Column Sort 처리 하는 함수
 ● gfn_ClearSortMark			:  Seleted Column을 제외한 Sort Mark 제거 하는 함수
 ● gfn_SetGridCheckAll			:  그리드 헤드 클릭시 전체체크
 ● gfn_IsAreaSelected			:  그리드에 선택영역이 있는지 확인
 ● gfn_DefaultSortCols			:  Sort Mark 제거 시 기본 Sort Column 정의(sResetColumn) 하는 함수
 ● gfn_ClearRangeSortMark		:  Grid Head의 Row에 대한 영역별 Sort Mark 제거 하는 함수
 ● gfn_GrdBodyDepth			:  Grid Head(band)의 Row Depth 계산 하는 함수
 ● gfn_gridOnkeydown			: Grid Cell Copy & Past 테스트.
 ● gfn_clipboardCopy			: 
 */


/**
* 헤더 클릭시 정렬 선언
* @public
* @type number
* @example
* @mem Lib.Validation
*/

pForm.fv_AscMark = "▲"; //Asc Mark
pForm.fv_DescMark = "▼"; //Desc Mark
pForm.fv_CrtDSCheck = false; //Dataset 생성 여부 체크
pForm.fv_OrgObj = undefined;
pForm.fv_CDSGrdSort = undefined;
pForm.fv_bFlag = false;
pForm.fv_FormId = "";
pForm.fv_Count = 0;

/**
* Clipboard에 Copy된 내용을 그리드의 선택된 영역에 Paste 한다.
* @param  {object} objGrid       : Area Select 된 Grid
* @return N/A
* @example
*  this.grd_fn_ClipboardPaste(objGrid, ",", arrEditColor);
* @memberOf public
*/
pForm.gfn_clipboardPaste = function (objGrid)
{
	var orgDataset = objGrid.getBindDataset();//this.gfn_getDataset(objGrid.binddataset);

	var nSearchRow = 0;
	var nSearchCol = 0;
	var strColID;
	var strValue;
	var strEditType;
	var strBgColor;
    var strClipboardData = "";

	// 숫자 자릿수 구분은 comma 를 사용하기 때문에 호환을 위해서 comma 를 제거한다.
	try{
	   strClipboardData = system.getClipboard("CF_TEXT").split(",").join("");
	}catch(e){}

	if(this.gfn_isNull(strClipboardData))
	{
	    strClipboardData = nexacro.getApplication().gv_arrClipboard.split(",").join("");
	}

	// 유럽의 숫자 자릿수 구분은 space 를 사용하기 때문에 호환을 위해서 space 를 제거한다.
	strClipboardData = strClipboardData.split(" ").join("");

	var strClipboardRecord = strClipboardData.split("\n");


	var strClipboardColunm;

	var nAreaStartRow;
	var nAreaEndRow;
	var nAreaStartCol;
	var nAreaEndCol;
	if (objGrid.selecttype == "area")
	{
		nAreaStartRow = objGrid.selectstartrow;
		nAreaEndRow = objGrid.selectendrow;
		nAreaStartCol = objGrid.selectstartcol;
		nAreaEndCol = objGrid.selectendcol;
	}
	else
	{
		nAreaStartRow = objGrid.selectstartrow;
		nAreaEndRow = objGrid.selectendrow;
		nAreaStartCol = 0;
		nAreaEndCol = objGrid.getCellCount("Body")-1;
	}

	for (var nRow = nAreaStartRow; nRow < (parseInt(nAreaStartRow) + parseInt(strClipboardRecord.length)); nRow++)
	{
		strClipboardColunm = strClipboardRecord[nSearchRow].split(ct_separator);

		nSearchCol = 0;

		var nAreaCell = parseInt(nAreaStartCol) + parseInt(strClipboardColunm.length);

		for (var nCell = nAreaStartCol; nCell < nAreaCell; nCell++)
		{
			strColID = objGrid.getCellProperty("body", nCell, "text").substr(5);
			strEditType = objGrid.getCellProperty("body", nCell, "edittype");
			strValue = strClipboardColunm[nSearchCol];

            //에디터 타입이 none이거나 값이 없으면 카피 안함
			if(!(strEditType == "none" || this.gfn_isNull(strValue)))
			{
				orgDataset.setColumn(nRow, strColID, strValue);
			}
			nSearchCol++;
		}
		nSearchRow++;
	}
	return;
}

pForm.gfn_getGridSelectedData = function(objGrid)
{
	//그리드에 선택된 영역에 대한 정보
	var arrStartRow = objGrid.selectstartrow;
	var arrEndRow = objGrid.selectendrow;
	var arrStartSubRow = objGrid.selectstartsubrow;
	var arrEndSubRow = objGrid.selectendsubrow;
	var arrStartCol = objGrid.selectstartcol;
	var arrEndCol = objGrid.selectendcol;
	var currentcol = objGrid.currentcol;
	var currentrow = objGrid.currentrow;
	
	var nStartRow;
	var nEndRow;
	var nStartSubRow;
	var nEndSubRow;
	var nStartCol;
	var nEndCol;
	
	//그리드 셀의 갯수
	var nCellCount = objGrid.getCellCount("body");
	
	//그리드 Col의 갯수
	var nColCount = objGrid.getFormatColCount();
	
	var nRowCount = 0;
	
	var nColIdx;
	var nRowIdx;
	var nTargetRowIdx;
	var nTargetColIdx;
		
	var arrSelectedData = [];
	var sSelectedData = "";
	var nBaseRowIdx;
	
	//Col 구분자
	var sColSeperator = objGrid.colSeperator;
	
	if(objGrid.selecttype=="row"||objGrid.selecttype=="multirow"||objGrid.selecttype=="cell")
		return objGrid.getCellText(currentrow, currentcol);
		
	//SelectType이 Row 또는 MultiRow일 경우 Body Band의 Row 갯수 구하기
	if(objGrid.selecttype=="row"||objGrid.selecttype=="multirow")
	{
		for(var i=0;i<objGrid.getFormatRowCount();i++)
		{
			if(objGrid.getFormatRowProperty(i, "band")=="body")
			{
				nRowCount++;
			}
		}
	}
	
	for(var i=0;i<arrStartRow.length;i++)
	{
		//MultiRow, MultiArea일 때 각각의 Row, SubRow 선택 정보 구하기
		//여러영역을 선택했을 경우 선택정보가 배열로 들어있음
		nStartRow = arrStartRow[i];
		nEndRow = arrEndRow[i];
		nStartSubRow = arrStartSubRow[i];
		nEndSubRow = arrEndSubRow[i];
		
		//SelectType이 Row 또는 MultiRow일 경우 
		//영역 Col, SubRow에 대한 선택 정보가 없으므로
		//해당 영역의 전체 Col, SubRow가 선택된 것으로 값을 만듬
		if(objGrid.selecttype=="row"||objGrid.selecttype=="multirow")
		{
			nStartCol = 0;
			nEndCol = nColCount;
			nStartSubRow = 0;
			nEndSubRow = nRowCount;
		}
		//선택된 Col의 영역 정보 가져오기
		else
		{
			nStartCol = arrStartCol[i];
			nEndCol = arrEndCol[i];
		}
		
		//선택정보를 통해 2차원 배열 데이터 만들기
		//선택된 Row의 갯수만큼 For Loop
		for(var j=nStartRow;j<=nEndRow;j++)
		{
			//신규 Row Array생성
			arrSelectedData[arrSelectedData.length] = null;
			
			//생성된 Row Array Index를 Base로 설정
			nBaseRowIdx = arrSelectedData.length-1;
			
			//선택된 Col의 갯수만큼 For Loop
			for(var k=nStartCol;k<=nEndCol;k++)
			{
				//Body Band의 Cell 갯수만큼 For Loop
				for(var l=0;l<nCellCount;l++)
				{
					//현재 Cell Index의 Col, Row Index 구하기
					nColIdx = objGrid.getCellProperty("body", l, "col");
					nRowIdx = objGrid.getCellProperty("body", l, "row");
					
					//현재 Cell의 Col Index와 선택된 Col Index가 같을 경우
					if(nColIdx==k)
					{
						//선택된 Row가 1개일 경우
						if(nStartRow==nEndRow)
						{
							//현재 Row Index가 선택 Sub Row안에 포함되어 있는 경우
							if(nRowIdx>=nStartSubRow && nRowIdx <= nEndSubRow)
							{
								//nRowIdx가 0부터 시작될 수 있도록 계산
								//nRowIdx는 2차원 배열의 Row Index로 쓸꺼임
								nRowIdx = nRowIdx -nStartSubRow;
								
								//선택된 Cell임을 확인
								bCheckValue = true;
							}else 
							{
								//선택된 Cell이 아님을 확인
								bCheckValue = false;
							}
						}
						//현재 Row가 선택 시작 Row일 경우
						else if(nStartRow == j)
						{
							//현재 Row Index가 선택 Start Sub Row보다 크거나 같을 경우
							//선택된 Row가 1개 이상일 경우 마지막 Row가 아닌이상
							//모두 선택되어있으므로 선택 End Sub Row는 체크하지 않음
							if(nRowIdx>=nStartSubRow)
							{
								//nRowIdx가 0부터 시작될 수 있도록 계산
								//nRowIdx는 2차원 배열의 Row Index로 쓸꺼임
								nRowIdx = nRowIdx -nStartSubRow;
								
								//선택된 Cell임을 확인
								bCheckValue = true;
							}else 
							{
								//선택된 Cell이 아님을 확인
								bCheckValue = false;
							}
						}
						//현재 Row가 선택 마지막 Row일 경우
						else if(nEndRow == j)
						{
							//현재 Row Index가 선택 End Sub Row보다 작거나 같을 경우
							//선택된 Row가 1개 이상일 경우 시작 Row가 아닌이상
							//모두 선택되어있으므로 선택 Start Sub Row는 체크하지 않음
							if(nRowIdx<=nEndSubRow)
							{
								//선택된 Cell임을 확인
								bCheckValue = true;
							}else 
							{
								//선택된 Cell이 아님을 확인
								bCheckValue = false;
							}
						}
						else
						{
							//선택된 Cell임을 확인
							bCheckValue = true;
						}
						
						//선택된 Cell이 맞을 경우
						if(bCheckValue == true)
						{
							//Cell의 값 가져오기
							sValue = objGrid.getCellText(j, l);
							
							//Cell의 병합 갯수 가져오기
							nRowSpan = objGrid.getCellProperty("body", l, "rowspan");
							nColSpan = objGrid.getCellProperty("body", l, "colspan");
					
							//병합된 Cell일 경우
							if(nRowSpan>1 || nColSpan>1)
							{
								//Row 병합 갯수만큼 For Loop
								for(var m=0;m<nRowSpan;m++)
								{
									//Col 병합 갯수만큼 For Loop
									for(var n=0;n<nColSpan;n++)
									{
										//값을 입력할 Array Row Index 구하기
										//Row Index = 선택 Row Index를 기준으로 구한 Row Index + SubIndex 값 + 병합된 Row Index 값
										nTargetRowIdx = nBaseRowIdx + nRowIdx + m;
										
										//해당 Array Row에 값이 없을 경우 Array로 초기화
										if(arrSelectedData[nTargetRowIdx]==null)arrSelectedData[nTargetRowIdx] = [];
										
										//값을 입력할 Array Col Index 구하기
										nTargetColIdx = arrSelectedData[nTargetRowIdx].length;
										
										//병합된 Cell의 시작 Row, Col Index일 경우 값을 넣기
										if(m==0&&n==0)
										{
											arrSelectedData[nTargetRowIdx][nTargetColIdx] = sValue;
										}
										//시작 Row, Col Index가 아닐 경우 공백 넣기
										//엑셀에서 병합된 Cell을 복사하면 이렇게 들어와서 
										//동일하게 맞췄는데... 값을 넣어주는게 업무에 더 맞을수도 있을 것 같아요~ㅎㅎ
										else
										{
											arrSelectedData[nTargetRowIdx][nTargetColIdx] = "";
										}
									}
								}
							}
							//병합된 Cell이 아닐 경우
							else
							{
								//값을 입력할 Array Row Index 구하기
								nTargetRowIdx = nBaseRowIdx + nRowIdx;
										
								//해당 Array Row에 값이 없을 경우 Array로 초기화
								if(arrSelectedData[nTargetRowIdx]==null)arrSelectedData[nTargetRowIdx] = [];
								
								//값을 입력할 Array Col Index 구하기
								nTargetColIdx = arrSelectedData[nTargetRowIdx].length;
								
								//값 넣기
								arrSelectedData[nTargetRowIdx][nTargetColIdx] = sValue;
							}
						}
					}
				}
			}
		}
	}
	
	//2차원 배열 값으로 Clipboard에 붙여넣기할 문자열 만들기
	for(var i=0;i<arrSelectedData.length;i++)
	{
		for(var j=0;j<arrSelectedData[i].length;j++)
		{
			if(j<arrSelectedData[i].length-1)
			{
				sSelectedData += arrSelectedData[i][j]+sColSeperator;
			}else
			{
				sSelectedData += arrSelectedData[i][j];
			}
		}
		sSelectedData += "\r\n";
	}
	//Clipboard 용 문자열 리턴
	return sSelectedData;
}
pForm.gfn_setGridSeletedData =  function(objGrid, copyData)
{
	//현재 선택된 Cell의 Dataset 기준 Row, 그리드 기준 Col/Row 위치값 가져오기
	var nSelectedRow = nexacro.toNumber(objGrid.selectstartrow);
	var nSelectedColIdx = nexacro.toNumber(objGrid.getCellProperty("body", objGrid.getCellPos(), "col"));
	var nSelectedRowIdx = nexacro.toNumber(objGrid.getCellProperty("body", objGrid.getCellPos(), "row"));
	
	//그리드 셀의 갯수
	var nGridCellCount = objGrid.getCellCount("body");
	var nGridRowCount = 0;
	
	var ds = objGrid.getBindDataset();
	var nRowCount = ds.rowcount;
	var sColumnId;
	
	//Col 구분자
	var sSeperator = objGrid.colSeperator;
	var sValue;
	
	var nTargetColIndx;
	var nTargetRowIdx;
	var nTargetDatasetRowIdx;
	var nColIdx;
	var nRowIdx;
	var nEndCellPos;
	
	var arrRowData;
	var arrColData;
	var nArrayRowCount;
	var nArrayColCount;
	
	objGrid.set_enableevent(false);
	objGrid.set_enableredraw(false); 
	//ds.set_enableevent(false); 
	
	//브라우저별 규칙이 다른가봐요?
	//이렇게 해야 모든브라우저에서 정상동작 하네요
	//예전 Copy&Paste 로직 참조함
	if (system.navigatorname == "nexacro" || system.navigatorname == "IE" && system.navigatorversion < 12) 
	{
		//Array Row 데이터
		arrRowData = copyData.split("\r\n"); 
	}else
	{
		//Array Row 데이터
		arrRowData = copyData.split(/[\n\f\r]/); 
	}
	
	//Array Row 갯수
	nArrayRowCount = arrRowData.length - 1;
	
	//Body Band의 Row 갯수 구하기
	//붙여넣기할 위치 구할 때 필요
	for(var i=0;i<objGrid.getFormatRowCount();i++)
	{
		if(objGrid.getFormatRowProperty(i, "band")=="body")
		{
			nGridRowCount++;
		}
	}
	
	//Array Row 갯수만큼 For Loop
	for (var i = 0; i < nArrayRowCount; i++) 
	{
		//Array Col 데이터
		arrColData = arrRowData[i].split(sSeperator);
		
		//Array Col 갯수
		nArrayColCount = arrColData.length;
		
		//Array Col 갯수만큼 For Loop
		for(var j=0;j<nArrayColCount;j++)
		{
			//값 가져오기
			sValue = arrColData[j];
			
			//값을 넣을 Col Index 구하기
			//Col Index = 그리드에서 선택된 Col Index + Array Col Index
			nTargetColIndx = nSelectedColIdx + j;
			
			//값을 넣을 Row Index 구하기
			//Row Index = 그리드에서 선택된 Row Index + Array Row Index + (선택된 데이터셋 Row Index * 그리드 Body Band Row 갯수) % 그리드 Body Band Row 갯수
			nTargetRowIndx = (nSelectedRowIdx + i + (nSelectedRow*nGridRowCount)) % nGridRowCount;
			
			//값을 넣을 Dataset Row Index 구하기
			//Dataset Row Index = Floor(그리드에서 선택된 Row Index + Array Row Index + (선택된 데이터셋 Row Index * 그리드 Body Band Row 갯수) / 그리드 Body Band Row 갯수)
			nTargetDatasetRowIdx = nexacro.floor((i + nSelectedRowIdx + (nSelectedRow*nGridRowCount)) / nGridRowCount);
			
			//그리드 Cell 갯수만큼 For Loop
			for(var k=0;k<nGridCellCount;k++)
			{
				//현재 Cell Index의 Col, Row Index 구하기
				nColIdx = objGrid.getCellProperty("body", k, "col");
				nRowIdx = objGrid.getCellProperty("body", k, "row");
				
				//현재 Cell의 Col, Row Index와 위에서 구한 Col, Row Index가 같을 경우
				if(nColIdx==nTargetColIndx && nRowIdx==nTargetRowIndx)
				{
					//위에서 구한 Dataset Row Index가
					//데이터셋의 Row 갯수보다 클 경우 로우 추가
					if(ds.rowcount<=nTargetDatasetRowIdx)
					{
						ds.addRow();
					}
					
					//현재 Cell에 bind된 Column Id 가져오기
					sColumnId = objGrid.getCellProperty("body", k, "text").replace("bind:", "");
					
					//데이터셋에 값 넣기
					ds.setColumn(nTargetDatasetRowIdx, sColumnId, sValue);
					
					//선택표시를 위해 현재 Cell Index를 설정
					nEndCellPos = k;
				}
			}
		}
	}
			
	objGrid.set_enableredraw(true);
	objGrid.set_enableevent(true);
	//ds.set_enableevent(true);
	
	//붙여넣기된 Cell들을 선택된 상태로 만들기
	objGrid.selectArea(nSelectedRow, objGrid.getCellPos(), nTargetDatasetRowIdx, nEndCellPos);
}

pForm.gfn_setGridCopyPaste = function (objGrid)
{
	//Grid에서 현재 Form을 찾을 수 있도록 하기 위해 변수처리
	objGrid.targetForm = this;
	
	//Col 구분값 변수 처리
	objGrid.colSeperator = "	";
		
	//클립보드를 사용할 수 있는 브라우저의 경우
	if (system.navigatorname == "nexacro" || system.navigatorname == "IE" && system.navigatorversion < 12) 
	{
		//onkeydown에서 바로 처리하지 않는 이유는
		//현재 Cell이 Editable상태일 경우 해당 Cell 내에 text가 복사되므로
		//실처리는 onkeyup에서 처리함
		objGrid.addEventHandler("onkeydown", this.grdCopyPasteStateChk, this);
		objGrid.addEventHandler("onkeyup", this.grdCopyPaste, this);		
	}
	//클립보드를 사용할 수 없는 브라우저의 경우
	else
	{
		objGrid.addEventHandler("onkeydown", this.grdCopyPasteEtc, this);
		this.addEventHandler("ontimer", this.grdCopyPasteTimerHandler, this);	
	}
}
pForm.grdCopyPasteStateChk = function(obj,e)
{
	var sKeycode = e.keycode;
		
	if(e.ctrlkey && !e.shiftkey && !e.altkey)
	{
		if(sKeycode == 67)
		{
			obj.bGridCopy = true;
		}
		else if(sKeycode == 86)
		{
			obj.bGridPaste = true;
		}
	}
};

pForm.grdCopyPaste = function(obj,e)
{
	var sCopyData;
	
	if(obj.bGridCopy == true)
	{
		obj.bGridCopy = false;
		
		//복사할 데이터 가져오기
		sCopyData = this.gfn_getGridSelectedData(obj);
		
		//클립보드 초기화
		system.clearClipboard();
		
		//클립보드에 붙여넣기
		system.setClipboard("CF_TEXT",sCopyData);
					
	}
	else if(obj.bGridPaste == true)
	{
		obj.bGridPaste = false;
		
		//클립보드 데이터 가져오기
		sCopyData = system.getClipboard("CF_TEXT");
		sCopyData = new String(sCopyData);
		
		//그리드에 데이터 붙여넣기
		this.gfn_setGridSeletedData(obj, sCopyData);
	}	
};

pForm.grdCopyPasteEtc = function(obj,e)
{
	var objTextArea;
	var objForm = obj.targetForm;
	var sKeycode = e.keycode;
	var sCopyData;
	
	if(e.ctrlkey && !e.shiftkey && !e.altkey)
	{	
		if(sKeycode == 67)
		{
			//복사할 데이터 가져오기
			sCopyData = this.gfn_getGridSelectedData(obj);
			
			//ontimer이벤트에서 현재 그리드를 사용하기 위해 변수 처리
			objForm.targetGrid = obj;		
			
			//clipboard를 우회처리하기 위핸 TextArea 생성
			//이렇게 하면 Clipboard에 TextArea데이터가 담김
			objTextArea = this.createElementTextarea(sCopyData);
			
			//만들어진 TextArea를 나중에 삭제하기 위해 변수 처리
			objForm.targetGrid["ta"] = objTextArea;		
			
			//복사하는 데이터가 많을 경우 Clipboard에 저장되는데 시간이 걸리므로 타이머 처리
			objForm.setTimer(777, 100);
			
			e.stopPropagation();					
		}
		else if(sKeycode == 86)
		{
			//ontimer이벤트에서 현재 그리드를 사용하기 위해 변수 처리
			objForm.targetGrid = obj;
			
			//clipboard를 우회처리하기 위핸 TextArea 생성
			//이렇게 하면 TextArea에 Clipboard데이터가 담김
			objTextArea = this.createElementTextarea('');
			
			//만들어진 TextArea를 나중에 사용하기 위해 변수 처리
			objForm.targetGrid["ta"] = objTextArea;		
			
			//붙여넣기 하는 데이터가 많을 경우 TextArea에 저장되는데 시간이 걸리므로 타이머 처리
			objForm.setTimer(888, 100);		

			e.stopPropagation();			
		}
	}
}

pForm.grdCopyPasteTimerHandler = function(obj,e)
{
	var timerid = e.timerid;
	
	if(timerid == 777) 
	{
		obj.killTimer(timerid);
		var ta = obj.targetGrid["ta"];
		if(!ta)return;	
		
		//TextArea 삭제
		document.body.removeChild(ta);
		
		//TextArea 변수 삭제
		obj.targetGrid["ta"] = undefined;
		
		//targetGrid 변수 삭제
		obj.targetGrid = undefined;
	} 
	else if(timerid == 888)
	{ 
		obj.killTimer(timerid);
		var objGrid = obj.targetGrid;
		var ta = objGrid["ta"];
		
		if(!ta)	return;	
		
		//붙여넣기된 데이터 가져오기
		var sCopyData = ta.value;
		
		//TextArea삭제
		document.body.removeChild(ta);
		
		//TextArea 변수 삭제
		obj.targetGrid["ta"] = undefined;
		
		//targetGrid 변수 삭제
		obj.targetGrid = undefined;
		
		//그리드에 데이터 붙여넣기
		this.gfn_setGridSeletedData(objGrid, sCopyData);
	}
}
pForm.createElementTextarea = function(sText)
{
	var objTxtArea = document.createElement('textarea');
	objTxtArea.style.position = 'absolute';
	objTxtArea.style.left = '-1000px';
	objTxtArea.style.top = document.body.scrollTop + 'px';
	objTxtArea.value = sText;
	document.body.appendChild(objTxtArea);
	objTxtArea.select();

	return objTxtArea;
}

/**
*그리드 컬럼 expr background 셋팅
* @param {object} gridObj
* @param {number} 현재Row값
* @return N/A
* @example
* @memberOf public
*/
pForm._gfn_grid_background = function(obj,nRow)
{
     var dsBind = this.gfn_getDataset(obj.binddataset);
     var nRowType = dsBind.getRowType(nRow);
     var sRtnVal = "";
     switch(nRowType)
     {
         case Dataset.ROWTYPE_INSERT : nRowType = "#FFE8F3FF"; break;
         case Dataset.ROWTYPE_UPDATE : nRowType = "#EDF4D5FF"; break;
     }

     return nRowType;

}


/**
 * 그리드로 입력시 키 컬럼 널 체크 후 해당 row 및 cell에 위치 반환.
* @param {object} Grid
* @param {string} arrColId 키칼럼
* @return return : 정상 : true 빈값있음 : false
* @example gfn_GridKeyCheck(Grid_1, ["CD_ID", "CD_NAME"]);
* @memberOf global
*/
pForm.gfn_GridKeyCheck = function(objGrid, arrColId)
{
	var arrTitle = new Array();
	var arrCell  = new Array();
	var nIdx = 0;
	var nCell, nCol;
	if(objGrid.getCellCount("head") == objGrid.getCellCount("body")) {
		for(var i=0; i<arrColId.length; i++) {
			nCell = objGrid.getBindCellIndex("body", arrColId[i]);
			if(nCell>=0) {
				arrTitle[nIdx] = objGrid.getCellProperty("head", nCell, "text");
				if(nexacro.getApplication().gv_languageType != "ko-KR"){
					var text = objGrid.getCellProperty("Body",nCell,"text");
					//trace("text-->"+text);
					arrTitle[nIdx] = this.nfn_getDictionaryname(text.replace("bind:", ""));
//					trace("2-->"+text.replace("bind:", ""));
//					trace("2-->"+arrTitle[nIdx]);
				}
				arrCell[nIdx]  = nCell;
			} else {
				arrTitle[nIdx] = "";
				arrCell[nIdx]  = -1;
			}
			nIdx++;
		}
	} else {
		for(var i=0; i<arrColId.length; i++) {
			nCell = objGrid.getBindCellIndex("body", arrColId[i]);
			if(nCell>=0) {
				nCol  = objGrid.getCellProperty("body", nCell, "col");
				arrTitle[nIdx] = "";
				for(var j=0; j<objGrid.getCellCount("head"); j++) {
					if(nCol >= objGrid.getCellProperty("head", j, "col")&&nCol<(objGrid.getCellProperty("head", j, "col")+objGrid.getCellProperty("head", j, "colspan")) ) {
						arrTitle[nIdx] += objGrid.getCellProperty("head", j, "text") + "/";
					}
				}
				arrTitle[nIdx] = arrTitle[nIdx].substr(0, arrTitle[nIdx].length-1);
				if(nexacro.getApplication().gv_languageType != "ko-KR"){
					var text = objGrid.getCellProperty("Body",nCell,"text");
					//trace("text-->"+text);
					arrTitle[nIdx] = this.nfn_getDictionaryname(text.replace("bind:", ""));
				}
//				trace("3-->"+text.replace("bind:", ""));
//				trace("3-->"+arrTitle[nIdx]);

				arrCell[nIdx]  = nCell;
			} else {
				arrTitle[nIdx] = "";
				arrCell[nIdx]  = -1;
			}
			nIdx++;
		}
	}

//
 	var blnRtn = true;
 	var objData = this.all[objGrid.binddataset];

 	for(var i=0; i < objData.getRowCount(); i++) {

 	  if (objData.getRowType(i) == 2 || objData.getRowType(i) == 4){

		for(var j=0; j<arrColId.length; j++) {
			if(this.gfn_isNull(objData.getColumn(i, arrColId[j]))) {
				if(!this.gfn_isNull(arrTitle[j])) {
					this.gfn_Message("InputSomeThing",arrTitle[j] , "warning","ok");//alert(arrTitle[j]+"을(를) 입력 해주세요");
					objData.set_rowposition(i);
					objGrid.setFocus();
					objGrid.setCellPos(arrCell[j]);
					objGrid.showEditor(true);
					blnRtn = false;
					return false;
					/*
					objGrid.selectCell(i,this.nfn_GetColNum(objGrid,arrColId[j]));
					objGrid.showEditor(true);
					blnRtn = false;
					return false;
					*/
				} else {
					//gfn_Message("MQ008", "warning", "ok", arrColId[j]);
					this.gfn_Message("InputSomeThing",arrTitle[j] , "warning","ok");//alert(arrColId[j]+"을(를) 입력 해주세요");
					objData.set_rowposition(i);
					objGrid.setFocus();
					//objGrid.selectCell(i,this.nfn_GetColNum(objGrid,arrColId[j]));
					blnRtn = false;
					return false;
				}
			}
		}
	  }
 	}
 	return blnRtn;
}



/**
 * body cell index로 binding 된 컬럼명을 얻어온다.
 * @param {Grid} grid 대상 Grid Component
 * @param {number} index body cell index
 */
pForm.gfn_getBindColName = function(objGrid, index)
{
	var text = "";
	var columnid = "";
	var subCell = objGrid.getCellProperty("body", index, "subcell");
	if ( subCell > 0 ) {
		text = objGrid.getSubCellProperty("body", index, 0, "text");
	} else {
		text = objGrid.getCellProperty("body", index, "text");
	}

	if ( !this.gfn_isNull(text) )
	{
		if ( text.search(/^BIND\(/) > -1 )
		{
			columnid = text.replace(/^BIND\(/, "");
			columnid = columnid.substr(0, columnid.length-1);
		}
		else if ( text.search(/^bind:/) > -1 )
		{
			columnid = text.replace(/^bind:/, "");
		}
	}
	return columnid;
}

/**
* 그리드의 Sort를 처리한다.
* @param  {event} grid event
* @return N/A
* @example
* @memberOf public
*/
pForm.gfn_gridSort = function (obj, e)
{
	// 컬럼의 정렬방식을 'head'의 text에 "↑,↓"여부로 판단.
	// 이미지로 대체 가능.
	var strType = obj.getCellProperty("head", e.cell, "displaytype");
	if (strType == "checkbox")
	{
		return;
	}

	var bindDs = this.gfn_getDataset(obj.binddataset);
	if (bindDs.rowcount == 0)
	{
		return false;
	}

	var BodyColId = (obj.getCellProperty("body", e.col, "text")).toString().split(":");
//	bindDs.set_enableevent(false);
	for (var i = 0; i < obj.getCellCount("head"); i++)
	{
		if (obj.getCellText(-1, i) == "undefined")
		{
			continue;
		}

		var strHeadText = obj.getCellText(-1, i);

		if (i == e.cell)
		{
			if (strHeadText.substr(strHeadText.length - 1) == this.fv_DescMark)//fv_constAscMark)
			{
				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1) + this.fv_AscMark);//fv_constDescMark);
				bindDs.set_keystring(("S:-" + BodyColId[1]));
			}
			else if (strHeadText.substr(strHeadText.length - 1) == this.fv_AscMark)//fv_constDescMark)
			{
				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1) + this.fv_DescMark);//fv_constAscMark);
				bindDs.set_keystring(("S:+" + BodyColId[1]));
			}
			else
			{
				obj.setCellProperty("head", i, "text", strHeadText + this.fv_DescMark);//fv_constAscMark);
				bindDs.set_keystring(("S:+" + BodyColId[1]));
			}
		}
		else
		{
			// 정렬표시 삭제
			if (strHeadText.substr(strHeadText.length - 1) == this.fv_DescMark /*fv_constAscMark*/ || strHeadText.substr(strHeadText.length - 1) == this.fv_AscMark)//fv_constDescMark)
			{
				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1));
			}
		}
	}
//	bindDs.set_enableevent(true);
}


/**
 * @class 선택된 Grid Column에 대한 Sort 처리 하는 함수
 * @param  oGrid - 처리할 Grid 객체
 * @param  nCell - 처리할 Cell의 인덱스
 * @param  sResetCol - 리셋 할 컬럼
 * @param  sDefaultCol - 기본 Sort 할 컬럼
 * @return N/A
 */  
pForm.gfn_ProcGrdSort = function (oGrid, nCell, sResetCol, sDefaultCol)
{


	// 스크롤바가 있는 그리드의 최우측 셀 클릭시 맨앞으로 이동현상을 없앰
	var sScrollbar = oGrid.scrollbars;
	oGrid.set_scrollbartype("none");
	// ------------------------------------------------------------------------------------------------------

	var oCurObj = oGrid.name;
	if (sResetCol == null)
	{
		sResetCol = "";
	}
	if (sDefaultCol == null)
	{
		sDefaultCol = "";
	}

	//checkbox인경우 skip
	var strType = oGrid.getCellProperty("head", nCell, "displaytype");
	if (strType == "checkbox")
	{
		// 스크롤바가 있는 그리드의 최우측 셀 클릭시 맨앞으로 이동현상을 없앰
		// 원래 scrollbars속성 세팅
		oGrid.set_scrollbartype(sScrollbar);
		
		return;
	}

	// 다중 Sort 처리
	var bCtrlKey = window.event.ctrlKey;

	if (bCtrlKey) //Ctrl
	{
		if (this.fv_CrtDSCheck == false)
		{
			// 다중 Sort 관리 Dataset 미 존재 시 생성

			this.fv_CDSGrdSort = new Dataset();

			this.fv_CDSGrdSort.addColumn("Col", "string", 255); //Sort Column
			this.fv_CDSGrdSort.addColumn("Sort", "string", 255); //Sort 구분(+,-)

			this.fv_CrtDSCheck = true;
		}

		// Sort 처리 Grid가 다중 존재 시
		if (oCurObj != this.fv_OrgObj)
		{
			this.fv_CDSGrdSort.deleteAll();
			this.fv_OrgObj = oCurObj;
		}

		// 다중 Sort 시 항목이 존재 하지 않을 경우 해당 Grid의 Sort Mark 제거
		if (this.fv_CDSGrdSort.getRowCount() < 1)
		{
			this.gfn_ClearSortMark(oGrid);
		}

		// 다중 Column Sort 처리 시
		this.gfn_GridMultiDataSort(oGrid, nCell, sResetCol, sDefaultCol);

	}
	else
	{
		if (this.fv_CrtDSCheck == true)
		{
			// 다중 Sort Dataset이 존재 시

			if (this.fv_CDSGrdSort.getRowCount() > 0)
			{
				this.fv_CDSGrdSort.deleteAll();
			}
			// Row Delete
		}

		// 단일 Column Sort 처리 시
		this.gfn_GridDataSort(oGrid, nCell, sResetCol, sDefaultCol);

	}

	// 스크롤바가 있는 그리드의 최우측 셀 클릭시 맨앞으로 이동현상을 없앰
	// 원래 scrollbars속성 세팅
	oGrid.set_scrollbartype(sScrollbar);
}

/**
 * @class 선택된 Grid Column에 대한 Sort 처리 하는 함수
 * @param  oGrid - 처리할 Grid 객체
 * @param  nCell - 처리할 Cell의 인덱스
 * @param  sResetCol - 리셋 할 컬럼
 * @param  sDefaultCol - 기본 Sort 할 컬럼
 * @return N/A
 */  
pForm.gfn_GridMultiDataSort = function (oGrid, nCell, sResetCol, sDefaultCol)
{
	var oDsObj = new Object();
	oDsObj = this.objects[oGrid.binddataset];

	if (oDsObj.getRowCount() < 1)
	{
		return;
	}

	var sHeadText;
	var sFlag;
	var nSortCol;
	var nSortSpan;
	var aSplitCol;
	var sSortColumns = "";
	var aSortColumns = new Array;
	var nArrIdx = 0;
	var nRowDepth;

	var nHeadCnt = oGrid.getCellCount("head");
	var nBodyCnt = oGrid.getCellCount("body");
	var nSortRow = oGrid.getCellProperty("head", nCell, "row");

	for (var nHead = 0; nHead < nHeadCnt; nHead++)
	{
		nRowDepth = oGrid.getCellProperty("head", nHead, "row");
		if ((nCell == nHead) && (nSortRow == nRowDepth))
		{
			break;
		}
	}
	nSortCol = oGrid.getCellProperty("head", nHead, "col");

	var nBodyRow = this.gfn_GrdBodyDepth(oGrid);

	for (var nBody = 0; nBody < nBodyCnt; nBody++)
	{
		if (nBodyRow > 0)
		{
			if ((nSortCol == oGrid.getCellProperty("body", nBody, "col")) &&
				(nSortRow == oGrid.getCellProperty("body", nBody, "row")))
			{
				break;
			}
		}
		else
		{
			if (nSortCol == oGrid.getCellProperty("body", nBody, "col"))
			{
				break;
			}
		}
	}

	nSortSpan = oGrid.getCellProperty("head", nHead, "colspan");
	if (nSortSpan > 1)
	{
		return;
	}

	// Grid Head의 해당 Column이 Asc(▲) 인 경우
	if (oGrid.getCellProperty("head", nCell, "text").indexOf(this.fv_AscMark) > -1)
	{
		if (oGrid.getCellProperty("head", nCell, "colspan") > 1)
		{
			for (var i = 0; i < nBodyCnt; i++)
			{
				if ((oGrid.getCellProperty("body", i, "col") >= nSortCol) &&
					oGrid.getCellProperty("body", i, "col") < (Math.abs(nSortCol) + Math.abs(nSortSpan)))
				{
					if (oGrid.getCellProperty("body", i, "text").length > 0)
					{
						aSplitCol = oGrid.getCellProperty("body", i, "text").split(":");
						aSortColumns[nArrIdx] = aSplitCol[1];

						nArrIdx++;
					}
				}
			}

			this.gfn_ClearRangeSortMark(oGrid, nSortCol, Math.abs(nSortCol) + Math.abs(nSortSpan), nRowDepth);
		}
		else
		{
			aSplitCol = oGrid.getCellProperty("body", nBody, "text").split(":");
			aSortColumns[nArrIdx] = aSplitCol[1];
		}

		sHeadText = oGrid.getCellProperty("head", nCell, "text").split(this.fv_AscMark).join(this.fv_DescMark);
		sFlag = this.fv_DescMark;

		// // Grid Head의 해당 Column이 Desc(▼) 인 경우
	}
	else if (oGrid.getCellProperty("head", nCell, "text").indexOf(this.fv_DescMark) > -1)
	{
		if (oGrid.getCellProperty("head", nCell, "colspan") > 1)
		{
			for (var i = 0; i < nBodyCnt; i++)
			{
				if ((oGrid.getCellProperty("body", i, "col") >= nSortCol) &&
					oGrid.getCellProperty("body", i, "col") < (Math.abs(nSortCol) + Math.abs(nSortSpan)))
				{
					if (oGrid.getCellProperty("body", i, "text").length > 0)
					{
						aSplitCol = oGrid.getCellProperty("body", i, "text").split(":");
						aSortColumns[nArrIdx] = aSplitCol[1];
						nArrIdx++;
					}
				}
			}

			this.gfn_ClearRangeSortMark(oGrid, nSortCol, Math.abs(nSortCol) + Math.abs(nSortSpan), nRowDepth);
		}
		else
		{
			aSplitCol = oGrid.getCellProperty("body", nBody, "text").split(":");
			aSortColumns[nArrIdx] = aSplitCol[1];
		}

		sHeadText = oGrid.getCellProperty("head", nCell, "text").split(this.fv_DescMark).join("");
		sFlag = "";

		// 초기값인 경우(Sort 미 적용 시)
	}
	else
	{
		if (oGrid.getCellProperty("head", nCell, "colspan") > 1)
		{
			for (var i = 0; i < nBodyCnt; i++)
			{
				if ((oGrid.getCellProperty("body", i, "col") >= nSortCol) &&
					oGrid.getCellProperty("body", i, "col") < (Math.abs(nSortCol) + Math.abs(nSortSpan)))
				{
					if (oGrid.getCellProperty("body", i, "text").length > 0)
					{
						aSplitCol = oGrid.getCellProperty("body", i, "text").split(":");
						aSortColumns[nArrIdx] = aSplitCol[1];
						nArrIdx++;
					}
				}
			}

			this.gfn_ClearRangeSortMark(oGrid, nSortCol, Math.abs(nSortCol) + Math.abs(nSortSpan), nRowDepth);
		}
		else
		{
			aSplitCol = oGrid.getCellProperty("body", nBody, "text").split(":");
			aSortColumns[nArrIdx] = aSplitCol[1];
		}

		sHeadText = oGrid.getCellProperty("head", nCell, "text") + this.fv_AscMark;
		sFlag = this.fv_AscMark;
	}

	var sExist;
	for (var i = 0; i < aSortColumns.length; i++)
	{
		sExist = this.fv_CDSGrdSort.findRow("Col", aSortColumns[i]);

		if (sExist < 0)
		{
			this.fv_CDSGrdSort.addRow();

			this.fv_CDSGrdSort.setColumn(this.fv_CDSGrdSort.rowposition, "Col", aSortColumns[i]);
			this.fv_CDSGrdSort.setColumn(this.fv_CDSGrdSort.rowposition, "Sort", "+");
		}
		else
		{
			this.fv_CDSGrdSort.deleteRow(sExist);

			if (sFlag != "")
			{
				this.fv_CDSGrdSort.addRow();
				this.fv_CDSGrdSort.setColumn(this.fv_CDSGrdSort.rowposition, "Col", aSortColumns[i]);

				if (sFlag == this.fv_DescMark)
				{
					this.fv_CDSGrdSort.setColumn(this.fv_CDSGrdSort.rowposition, "Sort", "-");
				}
				else
				{
					this.fv_CDSGrdSort.setColumn(this.fv_CDSGrdSort.rowposition, "Sort", "+");
				}
			}
		}
	}

	for (var i = 0; i < this.fv_CDSGrdSort.getRowCount(); i++)
	{
		sSortColumns += this.fv_CDSGrdSort.getColumn(i, "Sort") + this.fv_CDSGrdSort.getColumn(i, "Col");
	}

	if (this.fv_CDSGrdSort.getRowCount() < 1)
	{
		var nSortIdx = 0;

		// Sort Mark 제거 시 해당 Grid의 Column Index에 대해서 Sort 처리(Max 3 Column)
		if (sResetCol != null && sResetCol.length > 0)
		{
			sSortColumns = this.gfn_DefaultSortCols(sResetCol); //Sort Column이 정의된 경우(매개변수)
		}
	}

	// Default Column 확인
	if (sDefaultCol != null && sDefaultCol != "")
	{
		sSortColumns = this.gfn_DefaultSortCols(sDefaultCol) + sSortColumns;
	}
	// trace(sSortColumns);
	// 해당 Column에 대한 Sort 처리
	if (sSortColumns.length > 0)
	{
		oDsObj.set_keystring( "S:" + sSortColumns);
	}
	else
	{
		oDsObj.set_keystring( "");
	}

	//oDsObj.set_rowposition(0);	//주석처리 : 헤더에 rowposition 방지 (by.Jungwoo)

	// 선택 Head의 Text 변경 (Sort Mark 적용)
	oGrid.setCellProperty("head", nCell, "text", sHeadText);
}

/**
 * @class 단일 Column Sort 처리 하는 함수
 * @param  oGrid - 처리할 Grid 객체
 * @param  nCell - 처리할 Cell의 인덱스
 * @param  sResetCol - 리셋 할 컬럼
 * @param  sDefaultCol - 기본 Sort 할 컬럼
 * @return N/A
 */  
pForm.gfn_GridDataSort = function (oGrid, nCell, sResetCol, sDefaultCol)
{
	//body bind되어 있지 않으면 return
	var strValue = oGrid.getCellProperty("body", nCell, "text");
	//if (this.gfn_isNull(strValue)) return;

	// Grid Bind Dataset 추출
	var oDsObj = this.objects[oGrid.binddataset];

	var bCtrlKey = window.event.ctrlKey;

	if (oDsObj.getRowCount() < 1) return;

	//checkbox인경우 skip
	var strType = oGrid.getCellProperty("head", nCell, "displaytype");
	if (strType == "checkboxcontrol") return;

	var sHeadText;
	var nSortCol;
	var nSortSpan;
	var aSplitCol;
	var sSortColumns = "";
	var nRowDepth;

	var nHeadCnt = oGrid.getCellCount("head");
	var nBodyCnt = oGrid.getCellCount("body");
	var nSortRow = oGrid.getCellProperty("head", nCell, "row");

	for (var nHead = 0; nHead < nHeadCnt; nHead++)
	{
		nRowDepth = oGrid.getCellProperty("head", nHead, "row");
		if ((nCell == nHead) && (nSortRow == nRowDepth))
		{
			break;
		}
	}

	nSortCol = oGrid.getCellProperty("head", nHead, "col");

	var nBodyRow = this.gfn_GrdBodyDepth(oGrid);

	for (var nBody = 0; nBody < nBodyCnt; nBody++)
	{
		if (nBodyRow > 0)
		{
			if ((nSortCol == oGrid.getCellProperty("body", nBody, "col")) &&
				(nSortRow == oGrid.getCellProperty("body", nBody, "row")))
			{
				break;
			}
		}
		else
		{
			if (nSortCol == oGrid.getCellProperty("body", nBody, "col"))
			{
				break;
			}
		}
	}

	nSortSpan = oGrid.getCellProperty("head", nHead, "colspan");
	if (nSortSpan > 1)
	{
		return;
	}

	// Grid Head의 해당 Column이 Asc(▲) 인 경우
	if (oGrid.getCellProperty("head", nCell, "text").indexOf(this.fv_AscMark) > -1)
	{
		if (oGrid.getCellProperty("head", nCell, "colspan") > 1)
		{
			nSortSpan = oGrid.getCellProperty("head", nHead, "colspan");

			for (var i = 0; i < nBodyCnt; i++)
			{
				if ((oGrid.getCellProperty("body", i, "col") >= nSortCol) &&
					oGrid.getCellProperty("body", i, "col") < (Math.abs(nSortCol) + Math.abs(nSortSpan)))
				{
					if ((oGrid.getCellProperty("body", i, "text") != null) &&
						(oGrid.getCellProperty("body", i, "text").length > 0))
					{
						aSplitCol = oGrid.getCellProperty("body", i, "text").split(":");
						sSortColumns += "-" + aSplitCol[1];
					}
				}
			}
		}
		else
		{
			aSplitCol = oGrid.getCellProperty("body", nBody, "text").split(":");
			sSortColumns += "-" + aSplitCol[1];
		}

		sHeadText = oGrid.getCellProperty("head", nCell, "text");
		sHeadText = sHeadText.split(this.fv_AscMark).join(this.fv_DescMark);
	}
	else if (oGrid.getCellProperty("head", nCell, "text").indexOf(this.fv_DescMark) > -1)
	{
		// Grid Head의 해당 Column이 Desc(▼) 인 경우
		var nSortIdx = 0;

		// Sort Mark 제거 시 해당 Grid의 Column Index에 대해서 Sort 처리(Max 3 Column)
		if (sResetCol != null && sResetCol.length > 0)
		{
			sSortColumns = this.gfn_DefaultSortCols(sResetCol); //trace("2 sSortColumns === " + sSortColumns);
		}

		sHeadText = oGrid.getCellProperty("head", nCell, "text");
		sHeadText = sHeadText.split(this.fv_DescMark).join("");

		// 초기값인 경우(Sort 미 적용) 시
	}
	else
	{
		if (oGrid.getCellProperty("head", nCell, "colspan") > 1)
		{
			nSortSpan = oGrid.getCellProperty("head", nHead, "colspan");

			for (var i = 0; i < nBodyCnt; i++)
			{
				if ((oGrid.getCellProperty("body", i, "col") >= nSortCol) && (oGrid.getCellProperty("body", i, "col") < (Math.abs(nSortCol) + Math.abs(nSortSpan))))
				{
					if ((oGrid.getCellProperty("body", i, "text") != null) && (oGrid.getCellProperty("body", i, "text").length > 0))
					{
						aSplitCol = oGrid.getCellProperty("body", i, "text").split(":");
						sSortColumns += "+" + aSplitCol[1];
					}
				}
			}
		}
		else
		{
			aSplitCol = oGrid.getCellProperty("body", nBody, "text").split(":");
			sSortColumns += "+" + aSplitCol[1];
		}

		sHeadText = oGrid.getCellProperty("head", nCell, "text");
		sHeadText = sHeadText + this.fv_AscMark;
	}

	// Default Column 확인
	if (sDefaultCol != null && sDefaultCol.length > 0)
	{
		sSortColumns = this.gfn_DefaultSortCols(sDefaultCol) + sSortColumns;
	}

	// 해당 Column에 대한 Sort 처리
	if (sSortColumns.length > 0)
	{
		oDsObj.set_keystring(("S:" + sSortColumns));
	}
	else
	{
		oDsObj.set_keystring("");
	}

	// Grid의 Row Position 설정(Sort 처리 시 Row Position 변경)
	//oDsObj.set_rowposition(0);	//주석처리 : 헤더에 rowposition 방지 (by.Jungwoo)

	// 선택 Head의 Text 변경 (Sort Mark 적용)
	oGrid.setCellProperty("head", nCell, "text", sHeadText);

	// Selected Column을 제외한 Sort Mark 제거
	this.gfn_ClearSortMark(oGrid, nCell);
}

/**
 * @class Seleted Column을 제외한 Sort Mark 제거 하는 함수
 * @param  oGrid - 처리할 Grid 객체
 * @param  nCell - 처리할 Cell의 인덱스
 * @param  bReset - SortMark 제거시 Dataset Sort 옵션 초기화
 * @return N/A
 */  
pForm.gfn_ClearSortMark = function (oGrid, nCell, bReset)
{
	if (bReset == null)
	{
		bReset = false;
	}
	var nColCnt = oGrid.getCellCount("head");
	var sRepText;

	for (var i = 0; i < nColCnt; i++)
	{
		if (nCell != null && nCell == i)
		{
			continue;
		}
		// 선택한 Cell을 제외하고 처리
		if (this.gfn_isNull(oGrid.getCellProperty("head", i, "text")))
		//if (this.gfn_isNull(this.gfn_blankStr(oGrid.getCellProperty("head", i, "text"))))
		{
			continue;
		}

		sRepText = oGrid.getCellProperty("head", i, "text").toString().split(this.fv_AscMark).join("").split(this.fv_DescMark).join("");
		oGrid.setCellProperty("head", i, "text", sRepText);
	}

	if (bReset)
	{
		var oDsObj = this.objects[oGrid.binddataset];

		if (!this.gfn_isNull(oDsObj))
		{
			oDsObj.set_keystring("");
		}
	}
}

/**
* Grid Head중 check box가 있을 경우, check box 클릭 이벤트 발생시 전체 row에 대한 check/uncheck 설정 함수
* @param  {event} grid
* @return N/A
* @example
* @memberOf public
*/
pForm.gfn_setGridCheckAll = function (obj, e)
{
	if (obj.readonly == true)
	{
		return;
	}

	var strType = obj.getCellProperty("head", e.cell, "displaytype");
	if (strType != "checkboxcontrol")
	{
		return;
	}

	var strVal;
	var strChkCol;
	var dsObj;

	dsObj = this.gfn_getDataset(obj.binddataset);
	strChkCol = this.gfn_isEmpty(obj.getCellProperty("body", e.col, "text"), "");
	strChkCol = strChkCol.split("bind:").join("");

	// Head셋팅
	strVal = obj.getCellProperty("head", e.cell, "text");
	if (this.gfn_isNull(strVal))
	{
	    strVal = "0";
	}

	if (strVal == "0")
	{
		obj.setCellProperty("head", e.cell, "text", '1');
		strVal = "1";
	}
	else
	{
		obj.setCellProperty("head", e.cell, "text", '0');
		strVal = "0";
	}

	// Body셋팅
//	dsObj.set_enableevent(false);
	//alert(strChkCol+" , "+strVal)
	for (var i = 0; i < dsObj.rowcount; i++)
	{
		if(obj.getCellPropertyValue( i, e.cell, "edittype" )!=="none")
		{	
			dsObj.setColumn(i, strChkCol, strVal);
		}
	}
//	dsObj.set_enableevent(true);

//    if (obj.readonly == true)
//    {
// 		return;
//    }
//
// 	var strType;
// 	var vl_chk;
// 	var strVal;
// 	var strChkVal;
// 	var objDS;
// 	var nCell = e.cell;
// 	var nSubCnt = obj.getSubCellCount("head", nCell);
//
// 	var objDs = this.objects[obj.binddataset];
// 	//strChkVal = this.gfn_TransNullToEmpty(obj.getCellProperty("body", nCell, "text"));
// 	strChkVal = obj.getCellProperty("body", nCell, "text");
//
// 	alert("gfn_setGridCheckAll------");
//
// 	if (this.gfn_isNull(strChkVal)) return;
//
// 	alert(strChkVal);
//
// 	//strChkVal = strChkVal.split("bind:").join("");
//
// 	strChkVal = strChkVal.replace("bind:","");
//
//
// 	// Merge한 셀이 있는 경우
// 	if (nSubCnt > 0)
// 	{
// 		var nChkIdx = -1;
// 		for (var i = 0; i < nSubCnt; i++)
// 		{
// 			strType = obj.getSubCellProperty("head", e.cell, i, "displaytype");
//
// 			if (strType == "checkbox")
// 			{
// 				nChkIdx = i;
// 				break;
// 			}
// 		}
//
// 		if (nChkIdx == -1)
// 		{
// 			return;
// 		}
//
// 		// Head셋팅
// 		strVal = obj.getSubCellProperty("head", nCell, nChkIdx, "text");
// 		if (this.gfn_IsNull(strVal))
// 		{
// 			strVal = "0";
// 		}
//
// 		if (strVal == "0")
// 		{
// 			obj.setSubCellProperty("head", nCell, nChkIdx, "text", '1');
// 			vl_chk = "1";
// 		}
// 		else
// 		{
// 			obj.setSubCellProperty("head", nCell, nChkIdx, "text", '0');
// 			vl_chk = "0";
// 		}
//
// 		// Merge한 셀이 없는 경우
// 	}
// 	else
// 	{
// 		strType = obj.getCellProperty("head", e.cell, "displaytype");
//
// 		if (strType != "checkbox")
// 		{
// 			return;
// 		}
//
// 		// Head셋팅
// 		strVal = obj.getCellProperty("head", nCell, "text");
// 		//strVal = strVal.split("expr:").join("");
// 		strVal = strVal.replace("expr:","");
// 		alert("strVal : "+strVal);
// 		// trace("strVal :" + strVal);
//
// 		if (this.gfn_isNull(strVal))
// 		{
// 			strVal = "0";
// 		}
//
// 		if (strVal == "0")
// 		{
// 			obj.setCellProperty("head", nCell, "text", '1');
// 			vl_chk = "1";
// 		}
// 		else
// 		{
// 			obj.setCellProperty("head", nCell, "text", '0');
// 			vl_chk = "0";
// 		}
// 	}
//
// 	// Body셋팅
// 	// for (var i=0; i<objDs.rowcount; i++) {
// 	for (var i = 0; i < objDs.getRowCount(); i++)
// 	{
// 		objDs.setColumn(i, strChkVal, vl_chk);
// 	}
}


/**
 * @class 그리드에 선택영역이 있는지 확인
 * @param  objGrid - Grid Object
 * @return Boolean
 */  
pForm.gfn_IsAreaSelected = function (objGrid)
{
	if (objGrid.selectendrow == -9)
	{
		if (this.lookup("gv_sLanguage") == "ko")
		{
			this.gfn_Message("선택영역이 없습니다.", "info", "ok");
		}
		else
		{
			this.gfn_Message("There is no selection.", "info", "ok");
		}
		return false;
	}
	else
	{
		return true;
	}
}

/**
 * @class Sort Mark 제거 시 기본 Sort Column 정의(sResetColumn) 하는 함수
 * @param  sResetCol - 리셋 할 컬럼
 * @return string
 */  
pForm.gfn_DefaultSortCols = function (sResetCol)
{
	var sRtnVal = "";
	var aSortCol = sResetCol.split(",");
    var nSortLen = aSortCol.length;

    for (i=0; i<nSortLen; i++) {
        if (aSortCol[i].length < 1) continue;
        sRtnVal += "+" + aSortCol[i];
    }

    return sRtnVal;
}

/**
 * @class Grid Head의 Row에 대한 영역별 Sort Mark 제거 하는 함수
 * @param  oGrid - 처리할 Grid 객체
 * @param  sCell - 시작 Cell의 인덱스
 * @param  eCell - 마지막 Cell의 인덱스
 * @param  dRow - DepthRow
 * @return N/A
 */  
pForm.gfn_ClearRangeSortMark = function (oGrid, sCell, eCell, dRow)
{
    var nColCnt = oGrid.getCellCount("head");
    var sRepText;
    var nDepthRow;
    var nCol;

    for(var i=0; i<nColCnt; i++)
    {
        nDepthRow = oGrid.getCellProperty("head", i, "row");
        nCol   = oGrid.getCellProperty("head", i, "col");

        if (nCol >= sCell && nCol < eCell)
        {
            if(dRow < nDepthRow)
            {
                sRepText = oGrid.getCellProperty("head",i,"text").replace(gsAscMark,"").replace(gsDescMark, "");
                oGrid.setCellProperty("head",i,"text", sRepText);
            }
        }
    }
}

/**
 * @class Grid Head(band)의 Row Depth 계산 하는 함수
 * @param  Grid - Head(band)의 Row Depth 계산 하는 함수
 * @param  oGrid - 처리할 Grid 객체
 * @return Integer - Head(band) Row Depth(Number)
 */  
pForm.gfn_GrdBodyDepth = function (oGrid)
{
	var nRtnVal = 0;
	var nRowDepth = 0;

	var nBodyCnt = oGrid.getCellCount("body");
	for (var i = 0; i < nBodyCnt; i++)
	{
		nRowDepth = oGrid.getCellProperty("body", i, "row");
		if (nRowDepth > nRtnVal)
		{
			nRtnVal = nRowDepth;
		}
	}

	return nRtnVal;
}


// 2. Grid Cell Copy & Past 테스트.
pForm.gfn_gridOnkeydown = function (obj, e)
{
	// Ctrl + C
	if (e.ctrlKey && e.keycode == 67)
	{
		this.gfn_clipboardCopy(obj);

		// Ctrl + V
	}
	else if (e.ctrlKey && e.keycode == 86)
	{
		this.gfn_clipboardPaste(obj);
	}
}

pForm.gfn_clipboardCopy = function (objGrid)
{
	var orgDataset = this.gfn_getDataset(objGrid.binddataset);

	var strColID;
	var strValue;

	var strClipboard = "";

	var nAreaStartRow;
	var nAreaEndRow;
	var nAreaStartCol;
	var nAreaEndCol;

	if (objGrid.selecttype == "area" || objGrid.selecttype == "cell")
	{
		nAreaStartRow = objGrid.selectstartrow;
		nAreaEndRow = objGrid.selectendrow;
		nAreaStartCol = objGrid.selectstartcol;
		nAreaEndCol = objGrid.selectendcol;
	}
	else
	{
		nAreaStartRow = objGrid.selectstartrow;
		nAreaEndRow = objGrid.selectendrow;
		nAreaStartCol = 0;
		nAreaEndCol = objGrid.getCellCount("Body")-1;
	}

	for (var nRow = nAreaStartRow; nRow <= nAreaEndRow; nRow++)
	{
		for (var nCell = nAreaStartCol; nCell <= nAreaEndCol; nCell++)
		{
			strColID = objGrid.getCellProperty("body", nCell, "text");
			strValue = this.gfn_isEmpty(orgDataset.getColumn(nRow, strColID.substr(5)));
			strClipboard = strClipboard + strValue + ct_separator;
		}

		strClipboard = strClipboard.substr(0, strClipboard.length - 1);
		strClipboard = strClipboard + "\n";
	}

	strClipboard = strClipboard.substr(0, strClipboard.length - 1);
	system.setClipboard("CF_TEXT", strClipboard);
	nexacro.getApplication().gv_arrClipboard = strClipboard;

	return;
}
/*
this.gfn_grdCopy_Paste = function (obj, e)
{
	if(e.ctrlKey){
		if(e.keycode == 67){
			var strGrdDsNm = obj.binddataset;
			var v_clip = "";
			var strSeperate = "	";
			for (var i= nexacro.toNumber(obj.selectstartrow);i<= nexacro.toNumber(obj.selectendrow);i++) {
				for (var j=nexacro.toNumber(obj.selectstartcol);j<=nexacro.toNumber(obj.selectendcol);j++) {

					if (j < obj.selectendcol) {
						v_clip += obj.getCellValue(i,j) + strSeperate;
					} else {
						v_clip += obj.getCellValue(i,j);
					}
				}
				if (i < obj.selectendrow) {
					v_clip += "\r\n";
				}
			}
			v_clip += "\r\n";
			system.clearClipboard();
			system.setClipboard("CF_TEXT",v_clip);	
			
			trace("strGrdDsNm " + strGrdDsNm);
			trace("v_clip " + v_clip);
			
		} else if(e.keycode == 86) {
			
		
		//	trace(e.keycode);
			
			var bAddrow = true;
			if (!this.gfn_isNull(this.gfn_grdCopy_Paste.arguments[2])) {
				bAddrow = this.gfn_grdCopy_Paste.arguments[2];
			}
			//Grid Binddataset
			var strGrdDsNm = obj.binddataset;
			//cell count
			var nGrdCellCnt = obj.getCellCount("body");
			//cell position
			var nGrdCellPos = obj.getCellPos();		
			
			//trace("nGrdCellPos  " + nGrdCellPos);	
			//row position
			var nRowPos = eval("this." + strGrdDsNm).rowposition;
		
			trace("nRowPos  " + nRowPos);
			
			//arrText2 index
			var k = 0;
			//Dataset rowcount
			var nDsRowCnt = eval("this." + strGrdDsNm).getRowCount();		

			trace("nDsRowCnt  " + nDsRowCnt);
				
			//var t_clip = system.getClipboard("CF_UNICODETEXT");
			var t_clip = system.getClipboard("CF_TEXT");
			
			var strText = new String(t_clip);
			var arrText = new Array();
			var arrText2 = new Array();
			arrText = strText.split("\r\n");
			
			trace("t_clip " + t_clip);
			trace("strText " + strText);
			trace("arrText " + arrText);
			trace("arrText2 " + arrText2);
			
			
			if (nDsRowCnt < (arrText.length + nRowPos -1)) {
				if (bAddrow) {
					
				} else {
					return false;
				}			
			}			
			//복사한 Row만큼
			var oDs =  eval("this." + strGrdDsNm);
			for (var i=0;i<arrText.length;i++) {
				
				if (this.gfn_isNull(arrText[i])) {
					return;
				}
				arrText2 = arrText[i].split("	");

				trace("arrText2:" + arrText2);
				
				//기존 dataset갯수보다 많은 경우
				if ( nDsRowCnt <= nRowPos) {
					var nAddrow = oDs.addRow();
				}
				
				var nLoopCnt = (nGrdCellPos + arrText2.length);
				if (nLoopCnt > nGrdCellCnt) {
					nLoopCnt = nGrdCellCnt;
				}
				
				//Dataset setcolumn				
				trace("nGrdCellPos  " + nGrdCellPos);				
				trace("nLoopCnt  " + nLoopCnt);
				
				k = 0;
				for (var j=nGrdCellPos;j<nLoopCnt;j++) {
					var colid = obj.getCellProperty("body", j, "text").substr(5);
				
					oDs.setColumn(nRowPos, colid, arrText2[k]);
					
					k++;
				}				
				nRowPos++;
				eval("this." + strGrdDsNm).rowposition = nRowPos;
			}
			return true;
		}
	}
}

this.gfn_grdAll = function(obj)
{
	var nStartRow = 0;
	var nStartCellIdx = 0;
	var nEndRow = obj.getFormatRowCount() + 1;
	var nEndCellIdx = obj.getFormatColCount();
	obj.selectArea(nStartRow, nStartCellIdx, nEndRow, nEndCellIdx);
}
*/

pForm.fGridFixClear = function(objGrid)
{
	var nCellCnt = objGrid.getCellCount("head");
	var strHeadTxt;

	for(var i = 0 ; i < nCellCnt; i++)  {
		//strHeadTxt = this.cf_replace(objGrid.getCellProperty("head",i,"text"), this._FIT_COL, "");
		objGrid.setCellProperty("head",i,"text",strHeadTxt);
	}
	//objGrid.Description = "";
};

pForm.fGridFixed2 = function( grdObj, nCell, nFix ) {

	var strHead = "";
	var nRowIdx;
	var nRowSpan;
	var nColIdx;

    var iHeadRow = nexacro.round( grdObj.getCellCount("head") /  grdObj.getFormatColCount() ) -1;
    var iColFix  = nCell;
	var nCellCnt = grdObj.getCellCount("Head");
	var dsObj = grdObj.getBindDataset();
	var mergeStartCol = 0;
	var mergeEndCol = 0;

	grdObj.set_enableredraw(false);


	//컬럼 Fix적용 / Fix해제  실행
// 	if( this.cf_EqualsIgnoreCase(nFix,"body") ) {

    for (var i=iColFix; i>-1; i--) {
		grdObj.setFormatColProperty( i ,"Style","Null");
		
		var bAct = grdObj.setFormatColProperty( i ,"band",nFix);
		
		//trace("bAct ==>"+bAct);
	}

	//this.fGridFixed3(grdObj, nCell, nFix);
	
	for(var i=0; i<grdObj.getCellCount("head"); i++){
		if(grdObj.getCellProperty( "head", i, "border")=="1px solid #e0e0e0,1px solid black,1px solid #e0e0e0,1px solid #e0e0e0")
			grdObj.setCellProperty( "Head", i, "border", "1px solid #e0e0e0");
			
	} 
	for(var i=0; i<grdObj.getCellCount("body"); i++){
		if(grdObj.getCellProperty( "body", i, "border")=="1px solid #f1f1f1,1px solid black,1px solid #f1f1f1,1px solid #f1f1f1")
			grdObj.setCellProperty( "body", i, "border", "1px solid #f1f1f1");
			
	}

	
	var colCnt = 0;
	for(var i=0; i<grdObj.getCellCount("head"); i++){
		colCnt = colCnt + nexacro.toNumber(grdObj.getCellProperty("head",i,"colspan")) ;
		if(colCnt >  iColFix){
			//firstColSpanCol = i + nexacro.toNumber(grdObj.getCellProperty("head",i,"colspan")) - 1;
			//startCol = i;
			mergeEndCol = colCnt - 1;
			mergeStartCol = colCnt - nexacro.toNumber(grdObj.getCellProperty("head",i,"colspan"));
			
			dsObj.addColumn("START_COL","BIGDECIMAL");
			dsObj.addColumn("END_COL","BIGDECIMAL");
			dsObj.setColumn(0,"START_COL",mergeStartCol);
			dsObj.setColumn(0,"END_COL",mergeEndCol);
			break;
		}
	}
/*	 
	for(var i=0; i<grdObj.getCellCount("head"); i++){
		if(grdObj.getCellProperty("head",i,"colspan") > 1 ){
			mergeEndCol = i + nexacro.toNumber(grdObj.getCellProperty("head",i,"colspan")) - 1;
			mergeStartCol = i;
			break;
		}
	}
*/	
	trace("mergeStartCol.."+mergeStartCol);
	trace("mergeEndCol.."+mergeEndCol);
	trace("iColFix.."+iColFix);
/*	if(iColFix >= mergeEndCol){
		for (var i=0; i<=iColFix; i++) {
			var bAct = grdObj.setFormatColProperty( i ,"band",nFix);
			trace("bAct ==>"+bAct);
		}
		for(var i=0; i<grdObj.getCellCount("head"); i++){
			if(grdObj.getCellProperty("head",i,"col") == iColFix){
				grdObj.setCellProperty( "Head", i, "border", "1px solid #e0e0e0,1px solid black,1px solid #e0e0e0,1px solid #e0e0e0");
			}
		} 
	}else{*/
		var startCell = 0;
		var rtn = grdObj.splitContentsCell("head",0,mergeStartCol,0,mergeEndCol,true);
		trace("rtn.."+rtn);
		for (var i=0; i<=iColFix; i++) {
			var bAct = grdObj.setFormatColProperty( i ,"band",nFix);
			trace("bAct ==>"+bAct);
		}
		for(var i=0; i<grdObj.getCellCount("head"); i++){
			if(grdObj.getCellProperty("head",i,"col") == iColFix){
				grdObj.setCellProperty( "Head", i, "border", "1px solid #e0e0e0,1px solid black,1px solid #e0e0e0,1px solid #e0e0e0");
			}
			if(grdObj.getCellProperty("head",i,"col") == mergeStartCol && startCell == 0){
				startCell = i;
			}
//		} 
//		trace("startCell.."+startCell);
		
		grdObj.mergeContentsCell("head",0,iColFix+1,0,mergeEndCol,iColFix+1,false);
		grdObj.mergeContentsCell("head",0,mergeStartCol,0,iColFix,startCell,false);
		
	}
	grdObj.setCellProperty( "Body", iColFix, "border", "1px solid #f1f1f1,1px solid black,1px solid #f1f1f1,1px solid #f1f1f1");

	grdObj.set_enableredraw(true);
	
	dsObj.addColumn("COL_FIX_YN","STRING");
	dsObj.setColumn(0,"COL_FIX_YN","Y");

};


pForm.fGridFixed3 = function( grdObj, nCell, nFix ) {
	var strHead = "";
	var nRowIdx;
	var nRowSpan;
	var nColIdx;

    var iHeadRow = nexacro.round( grdObj.getCellCount("head") /  grdObj.getFormatColCount() ) -1;
    var iColFix  = nCell;
	var nCellCnt = grdObj.getCellCount("Head");
	var dsObj = grdObj.getBindDataset();
	var mergeStartCol = 0;
	var mergeEndCol = 0;

	grdObj.set_enableredraw(false);


	//컬럼 Fix적용 / Fix해제  실행
// 	if( this.cf_EqualsIgnoreCase(nFix,"body") ) {
// 		iColFix = grdObj.getFormatColCount() -1;
// 		
// 	   for (var i=iColFix; i>-1; i--) {
// 			//grdObj.setFormatColProperty( i ,"Style","Null");
// 			var bAct = grdObj.setFormatColProperty( i ,"band",nFix);
// 			trace("bAct ==>"+bAct);
// 		}
// 		
// 		
// 	} else {
// 	   
// 		for (var i=0; i<=iColFix; i++) {
// 			var bAct = grdObj.setFormatColProperty( i ,"band",nFix);
// 			trace("bAct ==>"+bAct);
// 		}
// 	}
//	var startCol = 0;
//	var firstColSpanCell = 0;
	mergeStartCol = dsObj.getColumn(0,"START_COL");
	mergeEndCol = dsObj.getColumn(0,"END_COL");
	trace("mergeStartCol.."+mergeStartCol);
	trace("mergeEndCol.."+mergeEndCol);
	var rtn = grdObj.splitContentsCell("head",0,mergeStartCol,0,mergeEndCol,true);
	trace(rtn);
    for (var i=iColFix; i>-1; i--) {
		grdObj.setFormatColProperty( i ,"Style","Null");
		
		var bAct = grdObj.setFormatColProperty( i ,"band",nFix);
		
		//trace("bAct ==>"+bAct);
	}
trace("nCell.."+nCell);
	for(var i=0; i<grdObj.getCellCount("head"); i++){
		if(grdObj.getCellProperty( "head", i, "border")=="1px solid #e0e0e0,1px solid black,1px solid #e0e0e0,1px solid #e0e0e0")
			grdObj.setCellProperty( "Head", i, "border", "1px solid #e0e0e0");
			
	} 
	grdObj.mergeContentsCell("head",0,mergeStartCol,0,mergeEndCol,mergeStartCol,false);
	for(var i=0; i<grdObj.getCellCount("body"); i++){
		if(grdObj.getCellProperty( "body", i, "border")=="1px solid #f1f1f1,1px solid black,1px solid #f1f1f1,1px solid #f1f1f1")
			grdObj.setCellProperty( "body", i, "border", "1px solid #f1f1f1");
			
	} 
//	grdObj.setCellProperty( "Body", nCell, "border", "1px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1");

	grdObj.set_enableredraw(true);
	dsObj.setColumn(0,"COL_FIX_YN","");

};