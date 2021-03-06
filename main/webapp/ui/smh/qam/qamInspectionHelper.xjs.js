//XJS=qamInspectionHelper.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 품질관리
         * 파일명         : qamInspectionHelper.xjs
         * 작성자         : yanghee.kim
         * 작성일         : 2021.04.02
         *
         * 설  명         : 검사 액션관련 함수 정의
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.02   yanghee.kim   최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/
        this.qamRtnResult;

        this.qfn_commCallBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        	}
        };

        /*
         * 판정기준 : NCRDecisionDegree 시
         * OK/NG 판정이나 Spec에 의한 판정
         */
        this.qfn_getQcGradeAndSequenceNCRAndSpecType = function(ds_OUTPUT, inspectionClassId, decisionDegree)
        {
        	ds_OUTPUT.clearData();

        	var sSvcID        = "selectNCRSpecType";
        	var sController   = "/qam00600/selectNCRCheckBasisInfo.do";
        	var sInDatasets   = "";
        	var sOutDatasets  = ds_OUTPUT.name + "=output";
        	var sArgs         = "";
        		sArgs        += this.gfn_setParam("ENTERPRISEID",         this.gf_getEnterpriseId()); //
        		sArgs        += this.gfn_setParam("PLANTID",              this.gf_getSiteType() ); //
        		sArgs        += this.gfn_setParam("INSPECTIONCLASSID",    inspectionClassId); //
        		sArgs        += this.gfn_setParam("NCRDECISIONDEGREE",    decisionDegree);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");

            this.qamRtnResult = {};
        	this.qamRtnResult.sequence= "";
        	this.qamRtnResult.result= "";

        	if (ds_OUTPUT.rowcount > 0)
        	{
        		var qcGrade = ds_OUTPUT.getColumn(0, "QCGRADE");
        		var sequence = ds_OUTPUT.getColumn(0, "PRIORITY");

        		this.qamRtnResult.sequence =  sequence;
        		this.qamRtnResult.result = qcGrade;
        	}
        	else
        	{
        		this.qamRtnResult.sequence =  "";
        		this.qamRtnResult.result = "";
        	}

        	return JSON.stringify(this.qamRtnResult);
        };

        /*
         * 판정기준 : NCRDecisionDegree / DecisionDegree 시
         * 수량이나 불량율로 판정
         * 판정 기준이 없을 때 메세지 아이디를 반환한다.
         */
        this.qfn_setQcGradeAndResultNCRQtyRateType = function (ds_INPUT, ds_OUTPUT, inspectionClassId, decisionDegree, isDefectQty)
        {
        	ds_OUTPUT.clearData();

        	var sSvcID        = "selectNCRQtyRateType";
        	var sController   = "/qam00600/selectNCRCheckBasisInfo.do";
        	var sInDatasets   = "";
        	var sOutDatasets  = ds_OUTPUT.name + "=output";
        	var sArgs         = "";
        		sArgs        += this.gfn_setParam("ENTERPRISEID",         this.gf_getEnterpriseId()); //
        		sArgs        += this.gfn_setParam("PLANTID",              this.gf_getSiteType() ); //
        		sArgs        += this.gfn_setParam("INSPECTIONCLASSID",    inspectionClassId); //
        		sArgs        += this.gfn_setParam("NCRDECISIONDEGREE",    decisionDegree);

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");

            this.qamRtnResult = {};
        	this.qamRtnResult.messageId= "";
        	this.qamRtnResult.result= "";

        	if (ds_OUTPUT.rowcount == 0 )
        	{
        		this.qamRtnResult.messageId = "NoStandardData";
        	}
        	else
        	{
                var qcGrade = "";
        	    var sequence = "";
        	    var isMatching = false;// NG기준에 맞는지 여부 ( true => result "NG", false => result "OK")

        		for (var i=0; i < ds_OUTPUT.rowcount; i++)
        		{
        			if (!this.nfn_isNull(ds_OUTPUT.getColumn(i, "QTYORRATE")) && !this.nfn_isNull(ds_OUTPUT.getColumn(i, "QCGRADE"))) //수량/불량율 기준이 있는것만
        			{
        				ds_OUTPUT.set_rowposition(i);
        				qcGrade = ds_OUTPUT.getColumn(i, "QCGRADE");
        				sequence = ds_OUTPUT.getColumn(i, "PRIORITY");

        				if (ds_OUTPUT.getColumn(i, "QTYORRATE") == "QTY") //수량으로 판정하는 경우
        				{
        					isMatching = this.qfn_getMatchingResultQTY(ds_INPUT, ds_OUTPUT, isDefectQty);    //수정 by 20210603 이용국
        				}
        				else if (ds_OUTPUT.getColumn(i, "QTYORRATE") == "RATE") //불량율로 판정하는 경우
        				{
        					isMatching = this.qfn_getMatchingResultRate(ds_INPUT, ds_OUTPUT);
        				}

        				if (isMatching == true)
        				{
        					this.qamRtnResult.result = "NG";
        					ds_INPUT.setColumn(ds_INPUT.rowposition, "QCGRADE", qcGrade);
        					ds_INPUT.setColumn(ds_INPUT.rowposition, "PRIORITY", sequence);
        					break;
        				}
        				else
        				{
        					this.qamRtnResult.result = "OK";
        				}
        			}//if 수량/불량율 기준이 있는것만
        		}//for ds_OUTPUT
        	} //if ds_OUTPUT.rowcount

        	return JSON.stringify(this.qamRtnResult);
        };

        /*
         * QTY 판정일 경우
         * Row별로 입력값이 기준에 해당되는지 판정하는 함수
         * true => 판정범위안에 속함 result => "NG"
         * flase => 판정범위에 속하지 않음 result => "OK"
         */
        this.qfn_getMatchingResultQTY = function(ds_INPUT, ds_INPUT1, isDefectQty)
        {
        	var isMatching = false;
        	var condition = ds_INPUT1.getColumn(ds_INPUT1.rowposition, "NGCONDITION");
        	var ngQuantity = ds_INPUT1.getColumn(ds_INPUT1.rowposition,"NGQUANTITY"); //int
        	var specOutQty = 0;	                                                      //int

        	if (isDefectQty == true)  //수정 by 20210603 이용국
        	{
        		specOutQty = ds_INPUT.getColumn(ds_INPUT.rowposition, "DEFECTQTY");
        	}
        	else
        	{
        		specOutQty = ds_INPUT.getColumn(ds_INPUT.rowposition, "SPECOUTQTY");
        	}

        	switch (condition)
        	{
        		case "EQ"://동일
        			if (ngQuantity == specOutQty)
        			{
        				isMatching = true;
        			}
        			else
        			{
        				isMatching = false;
        			}
        			break;

        		case "GE"://이상
        			if (ngQuantity <= specOutQty)
        			{
        				isMatching = true;

        			} else
        			{
        				isMatching = false;
        			}
        			break;

        		case "GT"://초과
        			if (ngQuantity < specOutQty)
        			{
        				isMatching = true;

        			}
        			else
        			{
        				isMatching = false;
        			}
        			break;

        		case "LE"://이하
        			if (ngQuantity >= specOutQty)
        			{
        				isMatching = true;

        			}
        			else
        			{
        				isMatching = false;
        			}
        			break;

        		case "LT"://미만
        			if (ngQuantity > specOutQty)
        			{
        				isMatching = true;

        			}
        			else
        			{
        				isMatching = false;
        			}
        			break;
        	}

        	return isMatching;
        };

        /*
         * RATE 판정일 경우
         * Row별로 입력값이 기준에 해당되는지 판정하는 함수
         * true => 판정범위안에 속함 result => "NG"
         * flase => 판정범위에 속하지 않음 result => "OK"
         */
        this.qfn_getMatchingResultRate = function(ds_INPUT, ds_INPUT1)
        {
        	var isMatching = false;
        	var condition  = ds_INPUT1.getColumn(ds_INPUT1.rowposition, "NGCONDITION");
        	var fromNGRate = ds_INPUT1.getColumn(ds_INPUT1.rowposition, "FROMNGRATE"); //decimal
        	var toNGRate   = ds_INPUT1.getColumn(ds_INPUT1.rowposition, "TONGRATE");   //decimal
        	var defectRate = ds_INPUT.getColumn(ds_INPUT.rowposition, "DEFECTRATE");   //decimal

        	switch (condition)
        	{
        		case "BT"://사이 (초과, 미만)
        			if ((fromNGRate <= defectRate) && (defectRate < toNGRate))
        			{
        				isMatching = true;
        			}
        			else
        			{
        				isMatching = false;
        			}
        			break;

        		case "EQ"://동일  ******from / to 정해지면 수정 가능성 있음
        			if (toNGRate == defectRate)
        			{
        				isMatching = true;
        			}
        			else
        			{
        				isMatching = false;
        			}
        			break;

        		case "GE"://이상  ******from / to 정해지면 수정 가능성 있음
        			if (toNGRate <= defectRate)
        			{
        				isMatching = true;

        			}
        			else
        			{
        				isMatching = false;
        			}
        			break;

        		case "GT"://초과  ******from / to 정해지면 수정 가능성 있음
        			if (toNGRate < defectRate)
        			{
        				isMatching = true;
        			}
        			else
        			{
        				isMatching = false;
        			}
        			break;

        		case "LE"://이하  ******from / to 정해지면 수정 가능성 있음
        			if (toNGRate >= defectRate)
        			{
        				isMatching = true;
        			}
        			else
        			{
        				isMatching = false;
        			}
        			break;

        		case "LT"://미만  ******from / to 정해지면 수정 가능성 있음
        			if (toNGRate > defectRate)
        			{
        				isMatching = true;
        			}
        			else
        			{
        				isMatching = false;
        			}
        			break;
        	}

        	return isMatching;
        };

        /*
         * 판정기준 : AQLDecisionDegree 시
         */
        this.qfn_setQcGradeAndResultAQLType = function(ds_INPUT, ds_OUTPUT, ds_OUTPUT1, inspectionClassId, decisionDegree, lotQty, isDefect)
        {
        	this.qamRtnResult = {};
        	this.qamRtnResult.messageId= "";
        	this.qamRtnResult.result= "";

        	var aqlInspectionLevel = ds_INPUT.getColumn(ds_INPUT.rowposition, "AQLINSPECTIONLEVEL");
        	var aqlDefectLevel     = ds_INPUT.getColumn(ds_INPUT.rowposition, "AQLDEFECTLEVEL");

        	if (this.nfn_isNull(aqlInspectionLevel) ||this.nfn_isNull(aqlDefectLevel) || this.nfn_isNull(lotQty))
        	{
        		this.qamRtnResult.messageId = "NoStandardData";//판정 기준이 없습니다.
        		this.qamRtnResult.result = "NG";

        		this.fv_rtnValue = JSON.stringify(rtn);
        		return;
        	}

        	ds_OUTPUT.clearData();
        	ds_OUTPUT1.clearData();

        	//AQL의 판정기준, 액션 등급을 구하는 쿼리
        	var sSvcID        = "selectQcGradeAndResultAQLTypeInfo";
        	var sController   = "/qam00600/selectQcGradeAndResultAQLTypeInfo.do";
        	var sInDatasets   = "";
        	var sOutDatasets  = ds_OUTPUT.name + "=output " + ds_OUTPUT1.name+ "=output1";
        	var sArgs         = "";
        		sArgs        += this.gfn_setParam("INSPECTIONLEVEL",   aqlInspectionLevel); //
        		sArgs        += this.gfn_setParam("LOTQTY",            lotQty);
        		sArgs        += this.gfn_setParam("DEFECTLEVEL",       aqlDefectLevel);
        		sArgs        += this.gfn_setParam("INSPECTIONCLASSID", inspectionClassId);
        		sArgs        += this.gfn_setParam("DECISIONDEGREE",    decisionDegree);
        		sArgs        += this.gfn_setParam("ENTERPRISEID",      this.gf_getEnterpriseId() );
        		sArgs        += this.gfn_setParam("PLANTID",           this.gf_getSiteType());
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");

            this.qamRtnResult = {};
        	this.qamRtnResult.messageId= "";
        	this.qamRtnResult.result= "";

        	if (ds_OUTPUT.rowcount > 0)
        	{
        		//측정기준 값
        		var standardDefectQty = ds_OUTPUT.getColumn(0, "DEFECTRATE");
        		var inputedSpecOutQty = 0;   //decimal

        		if (isDefect == true)
        		{
        			inputedSpecOutQty = ds_INPUT.getColumn(ds_INPUT.rowposition, "DEFECTQTY");
        		}
        		else
        		{
        			inputedSpecOutQty = ds_INPUT.getColumn(ds_INPUT.rowposition, "SPECOUTQTY");
        		}

        		if (!this.nfn_isNull(standardDefectQty))
        		{
        			//불량수량이 기준을 벗어났을 경우(초과 -> 이상으로 기준변경)
        			if (inputedSpecOutQty >= standardDefectQty)
        			{
        				this.qamRtnResult.result = "NG";
        			}
        			else
        			{
        				this.qamRtnResult.result = "OK";
        			}
        		}
        	}

        	//AQL의 액션 등급을 구하는 쿼리
        	if (ds_OUTPUT1.rowcount > 0)
        	{
                var qcGrade = ds_OUTPUT1.getColumn(0, "QCGRADE");
        		var priority = ds_OUTPUT1.getColumn(0, "PRIORITY");
        		ds_INPUT.set_enableevent(false);
        		ds_INPUT.setColumn(ds_INPUT.rowposition, "QCGRADE", qcGrade);
        		ds_INPUT.setColumn(ds_INPUT.rowposition, "PRIORITY", priority);
        		ds_INPUT.set_enableevent(true);
        	}
        	else
        	{
        		this.qamRtnResult.messageId = "NoActionStandardData";//판정 등급이 없습니다.
        	}

        	return JSON.stringify(this.qamRtnResult);
        };

        /*
         * 판정기준 : AQLDecisionDegree 시 ==>미호출
         */
        this.qfn_setQcGradeAndResultAQLType2 = function(ds_INPUT, ds_OUTPUT, ds_OUTPUT1, aqlinspectionLevel, aqldefectLevel, inspectionClassId, decisionDegree, lotQty, isDefect)
        {
            this.qamRtnResult = {};
        	this.qamRtnResult.messageId= "";
        	this.qamRtnResult.result= "";

        	if (this.nfn_isNull(aqlinspectionLevel) || this.nfn_isNull(aqldefectLevel) || this.nfn_isNull(lotQty))
        	{
        		this.qamRtnResult.messageId = "NoStandardData";//판정 기준이 없습니다.
        		this.qamRtnResult.result = "NG";

        		return JSON.stringify(this.qamRtnResult);
        	}

        	ds_OUTPUT.clearData();
        	ds_OUTPUT1.clearData();

        	//AQL의 판정기준, 액션 등급을 구하는 쿼리
        	var sSvcID        = "selectQcGradeAndResultAQLTypeInfo";
        	var sController   = "/qam00600/selectQcGradeAndResultAQLTypeInfo.do";
        	var sInDatasets   = "";
        	var sOutDatasets  = ds_OUTPUT.name + "=output " + ds_OUTPUT1.name + "=output1";
            var sArgs         = "";
        		sArgs        += this.gfn_setParam("INSPECTIONLEVEL",  aqlinspectionLevel); //
        		sArgs        += this.gfn_setParam("LOTQTY",           lotQty);
        		sArgs        += this.gfn_setParam("DEFECTLEVEL",      aqldefectLevel);
        		sArgs        += this.gfn_setParam("INSPECTIONCLASSID", inspectionClassId);
        		sArgs        += this.gfn_setParam("DECISIONDEGREE",    decisionDegree);
        		sArgs        += this.gfn_setParam("ENTERPRISEID",      this.gf_getEnterpriseId() );
        		sArgs        += this.gfn_setParam("PLANTID",           this.gf_getSiteType());

            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");

            this.qamRtnResult = {};
        	this.qamRtnResult.messageId= "";
        	this.qamRtnResult.result= "";

        	if (ds_OUTPUT.rowcount > 0)
        	{
        		//측정기준 값
        		var standardDefectQty = ds_OUPUT.getColumn(0, "DEFECTRATE");
        		var inputedSpecOutQty = 0; //decimal

        		if (isDefect == true)
        		{
        			inputedSpecOutQty = s_INPUT.getColumn(ds_INPUT.rowposition, "DEFECTQTY");
        		}
        		else
        		{
        			inputedSpecOutQty = ds_INPUT.getColumn(ds_INPUT.rowposition, "SPECOUTQTY");
        		}

        		if (!this.nfn_isNull(standardDefectQty))
        		{
        			var defectQty = standardDefectQty; //decimal

        			//불량수량이 기준을 벗어났을 경우
        			//초과 -> 이상으로 기준변경
        			if (inputedSpecOutQty >= defectQty)
        			{
        				result = "NG";
        			}
        			else
        			{
        				result = "OK";
        			}
        		}
        	} //if ds_OUTPUT.rowcount

        	if (ds_OUTPUT1.rowcount > 0)
        	{
                var qcGrade = ds_OUTPUT1.getColumn(0, "QCGRADE");
        		var priority = ds_OUTPUT1.getColumn(0, "PRIORITY");

        		ds_INPUT.setColumn(ds_INPUT.rowposition, "QCGRADE", qcGrade);
        		ds_INPUT.setColumn(ds_INPUT.rowposition, "PRIORITY", priority);
        	}
        	else
        	{
        		this.qamRtnResult.messageId = "NoActionStandardData";//판정 등급이 없습니다.
        	}

        	return JSON.stringify(this.qamRtnResult);
        }

        /*
         * 판정기준 : NCRDecisionDegree 시
         * 외관 검사, 측정 검사의 결과 중 가장 높은 등급의 조치등급을 반환하는 함수
         */
        this.qfn_getPriorityQCGrade = function(exteriorGrid, measureGrid, exDecisionType)
        {
        	var exteriorDataset = exteriorGrid.getBindDataset();
        	var measureDataset = measureGrid.getBindDataset();

        	if ( !this.qfn_checkHasPriority(exteriorDataset, measureDataset)) return false;  // 외관, 측정검사 데이터에 우선순위 데이터 존재여부

        	var priorityQCGrade = "";
        	var exRow  = null;
        	var specRow = null;
        	var exDegree = "";
        	var exQCGrade = "";
        	var exSequence = 99; //int
        	var specDegree = "";
        	var specQCGrade = "";
        	var specSequence = 99; //int
        	var exGradeDataset = this.qfn_createTempDataset(exteriorDataset); //외관검사 temp Dataset

        	if (exDecisionType == "AQL")
        	{
        		//exGradeDataset = this.qfn_createTempDataset(exteriorDataset); //Create Dataset and col information copy

        		var exprQcGrade = "!(QCGRADE == '' || QCGRADE == null || QCGRADE == undefined)";
        		var exprPriority = "!(PRIORITY == ''|| PRIORITY == null || PRIORITY == undefined)";
        		var exprInspectionResult = "(INSPECTIONRESULT == 'NG')";

        		exGradeDataset.set_loadfiltermode( "reset" );
        		exGradeDataset.set_filterstr( exprQcGrade+ " && "+ exprPriority + " && " + exprInspectionResult );
        		exGradeDataset.set_keystring("S:+AQLDECISIONDEGREE+PRIORITY");

        		exDecisionType = "AQLDECISIONDEGREE";
        	}
        	else if (exDecisionType == "NCR")
        	{
        		//exGradeDataset = this.qfn_createTempDataset(exteriorDataset); //Create Dataset and col information copy

        		var exprQcGrade = "!(QCGRADE == '' || QCGRADE == null || QCGRADE == undefined)";
        		var exprPriority = "!(PRIORITY == ''|| PRIORITY == null || PRIORITY == undefined)";
        		var exprInspectionResult = "(INSPECTIONRESULT == 'NG')";

        		exGradeDataset.set_loadfiltermode( "reset" );
        		exGradeDataset.set_filterstr( exprQcGrade+ " && "+ exprPriority + " && " + exprInspectionResult );
        		exGradeDataset.set_keystring("S:+NCRDECISIONDEGREE+PRIORITY");

        		exDecisionType = "NCRDECISIONDEGREE";
        	}

        	var specGradeDataset = this.qfn_createTempDataset(measureDataset); //Create Dataset and col information copy

        	var exprQcGrade = "!(QCGRADE == '' || QCGRADE == null || QCGRADE == undefined)";
        	var exprPriority = "!(PRIORITY == ''|| PRIORITY == null || PRIORITY == undefined)";
        	var exprInspectionResult = "(INSPECTIONRESULT == 'NG')";

        	specGradeDataset.set_loadfiltermode( "reset" );
        	specGradeDataset.set_filterstr( exprQcGrade+ " && "+ exprPriority + " && " + exprInspectionResult );
        	specGradeDataset.set_keystring("S:+NCRDECISIONDEGREE+PRIORITY");

        	if (exGradeDataset.rowcount > 0)
        	{
        		exRow      = 0;
        		exDegree   = exGradeDataset.getColumn(exRow, exDecisionType);
        		exQCGrade  = exGradeDataset.getColumn(exRow, "QCGRADE");
        		exSequence = exGradeDataset.getColumn(exRow, "PRIORITY");
        	}

        	if (specGradeDataset.rowcount > 0)
        	{
        		specRow      = 0;
        		specDegree   = specGradeDataset.getColumn(specRow, "NCRDECISIONDEGREE");
        		specQCGrade  = specGradeDataset.getColumn(specRow, "QCGRADE");
        		specSequence = specGradeDataset.getColumn(specRow, "PRIORITY");
        	}

        	if (exRow != null && specRow != null)
        	{
        		var exDegreeAscii   = nexacro.toNumber(exDegree.charCodeAt(0));
        		var specDegreeAscii = nexacro.toNumber(specDegree.charCodeAt(0));

        		if (exDegreeAscii < specDegreeAscii)
        		{//외관의 판정기준이 높은 경우 (ex: 외관 : A 측정 : B)
        			priorityQCGrade = exQCGrade;
        		}
        		else if (exDegreeAscii > specDegreeAscii)
        		{//측정의 판정기준이 높은 경우 (ex: 외관 : B 측정 : A)
        			priorityQCGrade = specQCGrade;
        		}
        		else if (exDegreeAscii == specDegreeAscii)
        		{//판정기준이 같은 경우 (ex: 외관 : A 측정 : A)

        			if (exSequence < specSequence)
        			{//외관의 판정기준 순서가 높은 경우 (ex: 외관 : 1 측정 : 4)
        				priorityQCGrade = exQCGrade;
        			}
        			else
        			{// 측정의 판정기준 순서가 높거나 같은경우
        				priorityQCGrade = specQCGrade;
        			}
        		}
        	}
        	else if (exRow != null && specRow == null)
        	{
        		priorityQCGrade = exQCGrade;
        	}
        	else if (exRow == null && specRow != null)
        	{
        		priorityQCGrade = specQCGrade;
        	}

        	return priorityQCGrade;
        };


        /*
         * 판정기준 : NCRDecisionDegree 시
         * 외관 검사, 측정 검사의 결과 중 가장 높은 등급의 조치등급을 반환하는 함수
         */
        this.qfn_getPriorityQCGradeOSP = function(exteriorGrid, measureDataset, exDecisionType)
        {
        	var exteriorDataset = exteriorGrid.getBindDataset();
        	if (!this.qfn_checkHasPriority(exteriorDataset, measureDataset)) return false; // 외관, 측정검사 데이터에 우선순위 데이터 존재여부

        	var priorityQCGrade = "";
        	var exRow  = null;
        	var specRow = null;
        	var exDegree = "";
        	var exQCGrade = "";
        	var exSequence = 99; //int
        	var specDegree = "";
        	var specQCGrade = "";
        	var specSequence = 99;	//int
        	var exGradeDataset = this.qfn_createTempDataset(exteriorDataset); //외관검사 temp Dataset

        	if (exDecisionType == "AQL")
        	{
        		var exprQcGrade = "!(QCGRADE == '' || QCGRADE == null || QCGRADE == undefined)";
        		var exprPriority = "!(PRIORITY == ''|| PRIORITY == null || PRIORITY == undefined)";
        		var exprInspectionResult = "(INSPECTIONRESULT == 'NG')";

        		exGradeDataset.set_loadfiltermode( "reset" );
        		exGradeDataset.set_filterstr( exprQcGrade+ " && "+ exprPriority + " && " + exprInspectionResult );
        		exGradeDataset.set_keystring("S:+AQLDECISIONDEGREE+PRIORITY");

        		exDecisionType = "AQLDECISIONDEGREE";
        	}
        	else if (exDecisionType == "NCR")
        	{
        		var exprQcGrade = "!(QCGRADE == '' || QCGRADE == null || QCGRADE == undefined)";
        		var exprPriority = "!(PRIORITY == ''|| PRIORITY == null || PRIORITY == undefined)";
        		var exprInspectionResult = "(INSPECTIONRESULT == 'NG')";

        		exGradeDataset.set_loadfiltermode( "reset" );
        		exGradeDataset.set_filterstr( exprQcGrade+ " && "+ exprPriority + " && " + exprInspectionResult );
        		exGradeDataset.set_keystring("S:+DECISIONDEGREE+PRIORITY");

        		exDecisionType = "DECISIONDEGREE";
        	}

        	var specGradeDataset = this.qfn_createTempDataset(measureDataset); //Create Dataset and col information copy
        	var exprQcGrade = "!(QCGRADE == '' || QCGRADE == null || QCGRADE == undefined)";
        	var exprPriority = "!(PRIORITY == ''|| PRIORITY == null || PRIORITY == undefined)";
        	var exprInspectionResult = "(INSPECTIONRESULT == 'NG')";

        	specGradeDataset.set_loadfiltermode( "reset" );
        	specGradeDataset.set_filterstr( exprQcGrade+ " && "+ exprPriority + " && " + exprInspectionResult );
        	specGradeDataset.set_keystring("S:+NCRDECISIONDEGREE+PRIORITY");

        	if (exGradeDataset.rowcount > 0)
        	{
        		exRow      = 0;
        		exDegree   = exGradeDataset.getColumn(exRow, exDecisionType);
        		exQCGrade  = exGradeDataset.getColumn(exRow, "QCGRADE");
        		exSequence = exGradeDataset.getColumn(exRow, "PRIORITY");
        	}

        	if (specGradeDataset.rowcount > 0)
        	{
        		specRow      = 0;
        		specDegree   = specGradeDataset.getColumn(specRow, "NCRDECISIONDEGREE");
        		specQCGrade  = specGradeDataset.getColumn(specRow, "QCGRADE");
        		specSequence = specGradeDataset.getColumn(specRow, "PRIORITY");
        	}

        	if (exRow != null && specRow != null)
        	{
        		var exDegreeAscii   = nexacro.toNumber(exDegree.charCodeAt(0));
        		var specDegreeAscii = nexacro.toNumber(specDegree.charCodeAt(0));

        		if (exDegreeAscii < specDegreeAscii)
        		{//외관의 판정기준이 높은 경우 (ex: 외관 : A 측정 : B)
        			priorityQCGrade = exQCGrade;
        		}
        		else if (exDegreeAscii > specDegreeAscii)
        		{//측정의 판정기준이 높은 경우 (ex: 외관 : B 측정 : A)
        			priorityQCGrade = specQCGrade;
        		}
        		else if (exDegreeAscii == specDegreeAscii)
        		{//판정기준이 같은 경우 (ex: 외관 : A 측정 : A)

        			if (exSequence < specSequence)
        			{//외관의 판정기준 순서가 높은 경우 (ex: 외관 : 1 측정 : 4)
        				priorityQCGrade = exQCGrade;
        			}
        			else
        			{// 측정의 판정기준 순서가 높거나 같은경우
        				priorityQCGrade = specQCGrade;
        			}
        		}
        	}
        	else if (exRow != null && specRow == null)
        	{
        		priorityQCGrade = exQCGrade;
        	}
        	else if (exRow == null && specRow != null)
        	{
        		priorityQCGrade = specQCGrade;
        	}

        	return priorityQCGrade;
        };

        /*
         * 검사항목의 PROCESSRELNO을 세팅하는 함수
         */
        this.qfn_setProcessRelNo = function(processRelNo, table)
        {
        	for (var i=0; i < table.rowcount; i++)
        	{
        		table.setColumn(i, "PROCESSRELNO", processRelNo);
        	}

        	return table;
        };

        /*
         * 외관, 측정검사 데이터에 우선순위 데이터 존재여부
         */
        this.qfn_checkHasPriority = function(exteriorDataset, measureDataset)
        {
            var exprQcGrade = "!(QCGRADE == '' || QCGRADE == null || QCGRADE == undefined)";
        	var exprPriority = "(PRIORITY == ''|| PRIORITY == null || PRIORITY == undefined)";

        	var exCount = exteriorDataset.getCaseCountNF(exprQcGrade+ " && "+ exprPriority );
        	var specCount = measureDataset.getCaseCountNF(exprQcGrade+ " && "+ exprPriority );

        	if (exCount > 0 || specCount > 0)
        	{
        		this.gfn_Message("NoPriorityStandard", null, "warning", "ok");
        		return false;
        	}
        	return true;
        }

        //Create Dataset and col information copy
        this.qfn_createTempDataset = function(objDs)
        {
        	var sDatasetId = "dsQamTemp" + nexacro.floor(Math.random(),4) * 10000;	// 0 ~ 9999

        	//create Dataset
        	var objTempDs = new Dataset;
        	objTempDs.set_name(sDatasetId);

        	var nColCnt = objDs.getColCount();

        	objTempDs.set_enableevent(false);
        	var nColId, sColInfo,sColSize,sColType;

        	//col information copy
        	for(var i=0; i<nColCnt; i++)
        	{
        		nColId	 = objDs.getColID(i);
        		sColInfo = objDs.getColumnInfo(i);
        		sColSize = sColInfo.size;
        		sColType = sColInfo.type;
        		objTempDs.addColumn(nColId,sColType,sColSize);
        	}

        	objTempDs.copyData(objDs);
        	objTempDs.set_enableevent(true);

        	return objTempDs;
        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
