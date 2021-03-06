//XJS=lib_pcm.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /***************************************************************************************
        * 시스템명 	: IFC MES시스템
        * 업무명 		: 입수등록
        * 파일명 		: lib_pcm.xjs
        * 작성자 		: 김성현
        * 작성일 		: 2021.3.26
        *
        * 설  명		:
        *---------------------------------------------------------------------------------------
        * 변경일		변경자		변경내역
        *---------------------------------------------------------------------------------------
        * 2021.3.26	김성현   	최초작성
        *---------------------------------------------------------------------------------------
        ****************************************************************************************/

        const _EnterPrise_InterFlex = "INTERFLEX";
        var _ProcessType = -1;

        this.getEnterPrise_InterFlex = function()
        {
        	return _EnterPrise_InterFlex;
        };

        this.getProcessType = function()
        {
        	return _ProcessType;
        };

        this.setProcessType = function(v)
        {
        	_ProcessType = v;
        };

        this.ProcessType = {
        	// 인수 등록
        	LotAccept : 0,
        	// 작업 시작
        	StartWork : 1,
        	// 작업 완료
        	WorkCompletion : 2,
        	// 인계 등록
        	TransitRegist : 3
        };

        this.LotCardType = {
        	// 양산(샘플)
        	Normal : 0,
        	// 분할
        	Split : 1,
        	//병합
        	Merge : 2,
        	//R/C 변경
        	RCChange : 3,
        	//재작업
        	Rework : 4,
        	//재검(반품)
        	Return : 5
        };

        this.Constants = {
        	/// 인수 대기
        	WaitForReceive : "WaitForReceive",
        	/// 인수
        	Wait : "Wait",
        	/// 작업
        	Run : "Run",
        	/// 인계 대기
        	WaitForSend : "WaitForSend"
        };

        this.MessageBoxType = {
        	Information : 0,
        	Warning : 1,
        	Error : 2,
        	Question : 3
        };

        this.LanguageMessageItem = {
        	Title : "",
        	Message : ""
        };



        /// 화면의 작업 구분에 따라 해당 화면에서 사용되는 Process State 정보를 반환한다. |
        /// <summary>
        /// 화면의 작업 구분에 따라 해당 화면에서 사용되는 Process State 정보를 반환한다.
        /// </summary>
        /// <param name="processType">현재 화면의 작업 구분</param>
        /// <returns>작업 구분에 따라 Lot이 가져야하는 Process State 문자열</returns>
        this.getProcessStateByProcessType = function (_processType)
        {
        	switch (_processType)
        	{
        		case this.ProcessType.LotAccept:
        			return this.Constants.WaitForReceive;
        		case this.ProcessType.StartWork:
        			return this.Constants.Wait;
        		case this.ProcessType.WorkCompletion:
        			return this.Constants.Run;
        		case this.ProcessType.TransitRegist:
        			return this.Constants.WaitForSend;
        		default:
        			return "";
        	}
        }


        this.pfn_DatasetAddColumnExt = function (objDataset, strColumnInfo, type)
        {
        	var arrColumn = strColumnInfo.split(",");
        	var setEnable = objDataset.enableevent;

        	objDataset.set_enableevent(false);

        	var i;
        	for (i=0; i<arrColumn.length; i++) {
        		if(objDataset.getConstColIndex(arrColumn[i]) < 0) objDataset.addColumn(arrColumn[i], type,"256");
        	}

        	if(objDataset.rowcount == 0) objDataset.addRow();

        	objDataset.set_enableevent(setEnable);

        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
