//XJS=lib_mfm.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		:
         * 파일명 		: lib_mfm.xjs
         * 작성자 		: 박현우
         * 작성일 		: 2021.05.10
         *
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자			변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.10	박현우			최초작성 (//MES/ifc_doc/ifc_ui/ifc/nexacro17lib/component/extPrototype/comConstants.js)
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /*===============================================================================
        == 기준관리(TOM) 공통함수 목록
        ===============================================================================
        ● mfmfn_setCustomQueryCmb               : Custom Query를 이용한 Combo Data Binding
        */

        this.pfn_allTrim = function(sValue)
        {
        	if(sValue==null)		return "";
        	if (new String(sValue).valueOf() == "undefined") return "";

            var objValue = new String(sValue);
            var sRtnValue="";
            var i;

            return nexacro.trim( objValue );
        };

        /*******************************************************************************
         * tomfn_setCustomQueryCmb
         * 기능 : Custom Query를 이용한 Combo Data Binding
         * 박현우
         * Parameter  : obj - 콤보 Object
         *				 strCmbInfo - SQLID,콤보유형,수정가부,코드명표현식
         *			     oArgs	- 추가 파라미터
        *******************************************************************************/
        this.mfmfn_setCustomQueryCmb = function(obj, strCmbInfo, oArgs, sCallBackFunc, bAsync)
        {
        	if (strCmbInfo.indexOf(",") < 1)
        		return;

        	if(this.nfn_isNull(strCmbInfo)) return;

        	var strDs;
        	var arrCmbInfo = strCmbInfo.split(",");
        	var pBAsync = this.gfn_isNull(bAsync) ? true : bAsync;
        	var sqlId = arrCmbInfo[0];			//SQLID
        	var strCmbType = arrCmbInfo[1];		//ALL:전체, SEL:선택
        	var strEditable = arrCmbInfo[2];	//Y:수정가능, N:수정불가능
        	var strAB = arrCmbInfo[3];			//A:코드명만,B:코드+코드명

        	strDs = "ds_"+sqlId+strCmbType;
        	strDs = strDs.replace(" ","_");

        	var tmpDs ;
        	this.mfmfn_setCustomQueryCmbDS(strDs, sqlId, strCmbType, oArgs, sCallBackFunc, pBAsync);

        	obj.set_innerdataset(strDs);
        	obj.set_codecolumn("CODE");
        	obj.set_datacolumn("NAME");

        	if(strAB=="B"){ // 코드+코드명 표시인 경우
        		obj.set_datacolumn("DESCRIPTION");
        	}

        	if(strEditable=="Y"){
        		obj.set_enable(true);
        	}else if(strEditable=="N"){
        		obj.set_enable(false);
        	}
        	obj.set_index(0);
        }


        /*******************************************************************************
         * tomfn_setCustomQueryCmbDS
         * 기능 : Custom Query용 Combo Data Binding 동적생성 함수
         * 박현우
         * Parameter  : strDs, sqlId, strCmbType, pArgs, bAsync
        *******************************************************************************/
        this.mfmfn_setCustomQueryCmbDS = function(strDs, sqlId, strCmbType, pArgs, sCallBackFunc, bAsync)
        {
        	//DataSet 미존재시 동적생성
        	if(this.objects[strDs]==null ){
        		tmpDs = new Dataset();
        		tmpDs.set_name(strDs);
        		tmpDs.set_id(strDs);
        		this.addChild(strDs,tmpDs);
        	}

        	var strSearchDs = "ds_searchTomCode";
        	var colNm = "";

        	//다국어 및 기본옵션 선택 관련
        	if(strCmbType=="SEL"){
        		colNm = this.nfn_nvl(this.nfn_getDictionaryname("SELECT"),"선택"); //선택
        	} else if(strCmbType=="ALL"){
        		colNm = this.nfn_nvl(this.nfn_getDictionaryname("YPE_TOTAL"),"전체"); //전체
        	}

        	//데이터 셋으로 보내지 않고 아규먼트로 보낸다.
        	pArgs += this.gfn_setParam("SQL_ID", sqlId);
        	pArgs += this.gfn_setParam("CMB_TYPE", colNm);

        	//콜백함수
        	if(this.gfn_isNull(sCallBackFunc)){
        		sCallBackFunc = "mfmfn_callBack";
        	}

        	var sSvcID 			= sqlId;
        	var sController 	= "/mfmCommon/selectMfmCustomQuery.do";
        	//var sInDatasets   	= "INPUT="+strSearchDs;
        	var sInDatasets   	= "";
        	var sOutDatasets  	= strDs + "=output";
        	var sArgs 		  	= pArgs;
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, sCallBackFunc, true, bAsync);
        }

        /*******************************************************************************
         * mfmfn_callBack
         * 기능 : Custom Query Callback Function
         * 박현우
         * Parameter  : trId, errCD, errMsg
        *******************************************************************************/
        this.mfmfn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "selectTomCustomQuery")
        		{
        		}
        	}
        };



        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
