(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gridMultiRowCopyPaste");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\">4</Col><Col id=\"Column4\">5</Col><Col id=\"Column5\">6</Col><Col id=\"Column6\">7</Col><Col id=\"Column7\">8</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">10</Col><Col id=\"Column2\">11</Col><Col id=\"Column3\">12</Col><Col id=\"Column4\">13</Col><Col id=\"Column5\">14</Col><Col id=\"Column6\">15</Col><Col id=\"Column7\">16</Col></Row><Row><Col id=\"Column0\">17</Col><Col id=\"Column1\">18</Col><Col id=\"Column2\">19</Col><Col id=\"Column3\">20</Col><Col id=\"Column4\">21</Col><Col id=\"Column5\">22</Col><Col id=\"Column6\">23</Col><Col id=\"Column7\">24</Col></Row><Row><Col id=\"Column0\">25</Col><Col id=\"Column1\">26</Col><Col id=\"Column2\">27</Col><Col id=\"Column3\">28</Col><Col id=\"Column4\">29</Col><Col id=\"Column5\">30</Col><Col id=\"Column6\">31</Col><Col id=\"Column7\">32</Col></Row><Row><Col id=\"Column0\">33</Col><Col id=\"Column1\">34</Col><Col id=\"Column2\">35</Col><Col id=\"Column3\">36</Col><Col id=\"Column4\">37</Col><Col id=\"Column5\">38</Col><Col id=\"Column6\">39</Col><Col id=\"Column7\">40</Col></Row><Row><Col id=\"Column0\">41</Col><Col id=\"Column1\">42</Col><Col id=\"Column2\">43</Col><Col id=\"Column3\">44</Col><Col id=\"Column4\">45</Col><Col id=\"Column5\">46</Col><Col id=\"Column6\">47</Col><Col id=\"Column7\">48</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","10","482","380",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_selecttype("multiarea");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"헤더0\"/><Cell col=\"1\" text=\"헤더1\"/><Cell col=\"2\" text=\"헤더2\"/><Cell col=\"3\" text=\"헤더3\"/><Cell col=\"4\" text=\"헤더4\"/><Cell col=\"5\" text=\"헤더5\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:Column0\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:Column1\" edittype=\"text\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:Column2\" edittype=\"text\"/><Cell col=\"3\" colspan=\"2\" text=\"bind:Column3\" edittype=\"text\"/><Cell col=\"5\" rowspan=\"2\" text=\"bind:Column4\"/><Cell row=\"1\" col=\"1\" text=\"bind:Column5\" edittype=\"text\"/><Cell row=\"1\" col=\"3\" text=\"bind:Column6\" edittype=\"text\"/><Cell row=\"1\" col=\"4\" text=\"bind:Column7\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gridMultiRowCopyPaste.xfdl", function() {

        this.gridMultiRowCopyPaste_onload = function(obj,e)
        {
        	this.fnSetGridCopyPaste(this.Grid00);
        };

        this.fnGetGridSelectedData = function(objGrid)
        {
        	//그리드에 선택된 영역에 대한 정보
        	var arrStartRow = objGrid.selectstartrow;
        	var arrEndRow = objGrid.selectendrow;
        	var arrStartSubRow = objGrid.selectstartsubrow;
        	var arrEndSubRow = objGrid.selectendsubrow;
        	var arrStartCol = objGrid.selectstartcol;
        	var arrEndCol = objGrid.selectendcol;

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

        this.fnSetGridSeletedData =  function(objGrid,copyData)
        {
        	//현재 선택된 Cell의 Dataset 기준 Row, 그리드 기준 Col/Row 위치값 가져오기
        	var nSelectedRow = nexacro.toNumber(this.Grid00.selectstartrow);
        	var nSelectedColIdx = nexacro.toNumber(this.Grid00.getCellProperty("body", this.Grid00.getCellPos(), "col"));
        	var nSelectedRowIdx = nexacro.toNumber(this.Grid00.getCellProperty("body", this.Grid00.getCellPos(), "row"));

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
        	ds.set_enableevent(false);

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
        	ds.set_enableevent(true);

        	//붙여넣기된 Cell들을 선택된 상태로 만들기
        	objGrid.selectArea(nSelectedRow, objGrid.getCellPos(), nTargetDatasetRowIdx, nEndCellPos);
        }

        this.fnSetGridCopyPaste = function (objGrid)
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

        this.grdCopyPasteStateChk = function(obj,e)
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

        this.grdCopyPaste = function(obj,e)
        {
        	var sCopyData;

        	if(obj.bGridCopy == true)
        	{
        		obj.bGridCopy = false;

        		//복사할 데이터 가져오기
        		sCopyData = this.fnGetGridSelectedData(obj);

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
        		this.fnSetGridSeletedData(obj, sCopyData);
        	}
        };

        this.grdCopyPasteEtc = function(obj,e)
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
        			sCopyData = this.fnGetGridSelectedData(objGrid);

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

        this.grdCopyPasteTimerHandler = function(obj,e)
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
        		this.fnSetGridSeletedData(objGrid, sCopyData);
        	}
        }

        this.createElementTextarea = function(sText)
        {
        	var objTxtArea = document.createElement('textarea');
        	objTxtArea.style.position = 'absolute';
        	objTxtArea.style.left = '-1000px';
        	objTxtArea.style.top = document.body.scrollTop + 'px';
        	objTxtArea.value = innerText;
        	document.body.appendChild(objTxtArea);
        	objTxtArea.select();

        	return objTxtArea;
        }

        /**
         * Function Name : gfnIsNull
         * Description   : 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
         * Arguments     : sValue - 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
         * Return        : Boolean sValue이 undefined, null, NaN, "", Array.length = 0인 경우 true
        */
        this.gfnIsNull = function (sValue)
        {
        	if (new String(sValue).valueOf() == "undefined")
        	{
        		return true;
        	}
        	if (sValue == null)
        	{
        		return true;
        	}

        	var v_ChkStr = new String(sValue);

        	if (v_ChkStr == null)
        	{
        		return true;
        	}
        	if (v_ChkStr.toString().length == 0)
        	{
        		return true;
        	}

        	return false;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gridMultiRowCopyPaste_onload,this);
        };
        this.loadIncludeScript("gridMultiRowCopyPaste.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();