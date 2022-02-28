var pForm = nexacro.Form.prototype;
/*
 ===============================================================================
 == 함수 목록....유틸리티성 함수들은 여기에 작성한다.
 ===============================================================================
 ● gfn_popupCalMonth                    : 년월 선택 팝업 띄우기
 ● gfn_createPopupDiv                   : PopupDiv를 동적 생성한 후 생성된 Object를 리턴
 ● gfn_setCookie                        : 쿠기 setting 함수
 ● gfn_getCookie                        : 쿠기 setting 가져오는 함수
 ● gfn_setSplitBtn                      :  프레임 화면을 변경한다
 ● _split_moveBtn_onClickEvent          :  프레임 화면을 변경한다
 ● gfn_commonKeyDownCheck               : 디버그용 데이터셋정보를 볼수 있는 팝업화면 오픈
 ● gfn_paramAdd                     : parameter 일괄 추가
 ● gfn_cpRequired                       : form 안의 컴퍼넌트 필수값을 체크한다.
 ● gfn_dsRequired                       : grid 안의 필수값을 체크한다.
 ● gfn_dsPrn                            : UXStudio툴(output창)에서 데이타셋 찍어보기.
 ● gfn_isNull                           :  입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
 ● gfn_isEmpty                          :  null 또는 undefined 를 "" 로 변환
 ● gfn_isNaNZero                        :  입력값이 Nan에 해당하는 경우 0을 리턴한다.
 ● gfn_decode                           :  decode함수
 ● gfn_iif                              :  iif함수
 ● gfn_gridColNm                        : 그리드 컬럼명 가져오기 함수
 ● gfn_existFunc                        :  해당 함수가 존재하는지 여부를 체크한다.
 ● gfn_getBindObjInfo                   :  컴포넌트의 바인딩 정보를 알아낸다
 ● gfn_checkFromTo                      : 시작값과 종료값의 크기 체크
 ● gfn_checkNationalNo                  : 주민등록번호를 체크한다.
 ● gfn_checkNationalNoForGrid           : 주민등록번호를 체크한다.(그리드용)
 ● gfn_checkFnationalNo             : 외국인번호를 체크한다.
 ● gfn_isNationalNo                 : 주민등록번호를 체크한다.
 ● gfn_isNationalNo2                    : 주민등록번호를 체크한다.
 ● gfn_isFnationalNo                    : 외국인번호를 체크한다.
 ● gfn_isEmail                          : 전자 메일 주소 체크
 ● gfn_formatTelNum                 : 유효한 전화번호 형태로 변환
 ● gfn_formatCellNum                    : 유효한 휴대전화번호 형태로 변환
 ● gfn_smartPosRow                      : 가장 적합한 row를 리턴
 ● gfn_dateCheck                        : 날짜에 대한 형식 체크
 ● gfn_isValidDay                       : 유효한(존재하는) 일(日)인지 체크
 ● gfn_isValidMonth                 : 유효한(존재하는) 월(月)인지 체크
 ● gfn_equalsOr                     : 구분자(콤마)로 된 문자열에대해  한꺼번에 비교할 경우 쓰임
 ● gfn_msieDownload                 : IE 다운로드창 열기
 ● gfn_Rand                         :  정수인 nStart ~ nEnd의 범위에 있는 숫자에 대하여 random값을 return한다.
 ● gfn_round                            : 주어진 수식을 반올림하여 가장 가까운 정수를 반환한다.
 ● gfn_transNullToEmpty             :  NULL 일 경우 빈 값을 리턴한다.
 ● gfn_transNullToNumber                :  NULL 일 경우 0을 리턴한다.
 ● gfn_transNullToChar                  :  NULL 일 경우 새로운 값을 리턴한다.
 ● gfn_isNum                            :  문자열이 숫자형식에 맞는지 여부 체크
 ● gfn_isDuplicationCheck               :  지정한 데이터셋 중복값 체트
 ● gfn_checkEmail                       : 입력값이 e-mail Type인지 체크하는 함수
 ● gfn_checkPhone                       :  입력값이 전화번호 format 인지 체크하는 함수
 ● gfn_htmlToChars                      :  html형식의 문자열에서 태그문자를 특수문자로 변형
 ● gfn_getObjFont                       :  입력값이 전화번호 format 인지 체크하는 함수
 ● gfn_getTextSize                      :  텍스트 사이즈 구하는 함수
 ● gfn_GetCmCdCombo                 : 공통 콤보코드 가져오기
 *@ paging library
 ● _gfn_searchPageDatasetCheck          : 데이터셋 페이징처리 부분 체크
 ● _gfn_postPageDataset             :  페이징 dataset 초기화
 ● gfn_setPagingInit                    :
 ● gfn_setPagingNext                    :
 ● gfn_setPagingBtn                 :
 ● gfn_setPaging                        : 페이징 값 셋팅
 ● gfn_messageBox                       : 메세지 팝업 오픈 실행 함수
 ● gfn_openMessage                      : 메세지 팝업 오픈 함수
 ● gfn_messageCallback                  : 메세지 팝업 공통콜백 함수
 */


/**
 * @class 년월 선택 팝업 띄우기
 * @param {string} sId - PopupDiv ID
 * @param {string} sYearMonth - 일자 (날짜타입 또는 String 타입)
 * @param {Number} nLeft - 팝업이 뜨는 위치 (왼쪽)
 * @param {Number} nTop - 팝업이 뜨는 위치 (상단)
 * @return {string} - 20151225
 */   
var monthCnts = 0; 
var gv_monthPops;
pForm.gfn_popupCalMonth = function(sColId, nLeft, nTop, sYearMonth)
{
	//PopupDiv 생성하기
	var objPopupDiv = this.gfn_createPopupDiv("pdivComCalMonth."+sColId+"."+monthCnts, nLeft, nTop, 190, 197);	
	this.gv_monthPops = "pdivComCalMonth."+sColId+"."+monthCnts;
	monthCnts++;
	objPopupDiv.parent._fv_yyyymm_inint_value = sYearMonth;
	objPopupDiv.parent._fv_callback_user_property = "fn_monthCallback";
 	var vRet = objPopupDiv.trackPopup(nLeft, nTop, null, null, "fn_monthCallback");
	//동적생성시 popupDiv 생성 이후 url 호출
	objPopupDiv.set_url("common::com_month.xfdl");

}


/**
 * @class PopupDiv를 동적 생성한 후 생성된 Object를 리턴
 * @param {string} sPopupDivID - PopupDiv ID
 * @param {string} sUrl - 연결할 화면 URL
 * @param {Number} nWidth - 넓이
 * @param {Number} nHeight - 높이
 * @return {object} PopupDiv Object
 */
pForm.gfn_createPopupDiv = function (sPopupDivId, nLeft, nTop, nWidth, nHeight)
{
    var objPopupDiv;
    if (this.gfn_isNull(this.components[sPopupDivId])) {
        objPopupDiv = new PopupDiv();
        objPopupDiv.init(sPopupDivId, nLeft, nTop, nWidth, nHeight, null, null);
        objPopupDiv.set_formscrolltype ("none");
        objPopupDiv.set_background ("#ffffff");
        this.addChild(sPopupDivId, objPopupDiv);
        objPopupDiv.show();

    } else {
        objPopupDiv = this.components[sPopupDivId];
    }

    return objPopupDiv;
}


/**
* 쿠기 setting 함수
* @param  {string} 쿠키설정이름
* @param  {string}   value
* @param   {date}  날짜
* @return N/A
* @example
* @memberOf public
*/
pForm.gfn_setCookie = function(name, value, days)
{
     nexacro._setCookie(name,value,days);
}


/**
* 쿠기 setting 가져오는 함수
* @param  {string} name
* @return {string} 쿠키값
* @example
* @memberOf public
*/
pForm.gfn_getCookie = function(name)
{
    return nexacro._getCookie(name);
}


/**
* 스플릿트 버튼 적용 스크립트
* @param  {object} 스플릿트 버튼 위에 오브젝트 대상은 1개만 설정
* @param  {array}   스플릿트 버튼 하단에 오브젝트 대상은 Arrary로 설정
* @param   {object}  스플릿트 버튼 오브젝트
* @param    {number}   nMove - 이동해야할 크기
* @param    {boolen}    bDefaultStatus - 기본상태 (펼침상태 : true , 접힌상태 : false)
* @return N/A
* @example
* @memberOf public
*/
pForm.gfn_setSplitBtn = function(oUpObject,aDownObject,oActBtn,nMove,bDefaultStatus)
{
    oActBtn.targetUpObject = oUpObject;
    oActBtn.targetDownObject = aDownObject;
    oActBtn.splitMove = nMove;
    oActBtn.splitStatus = bDefaultStatus;
    oActBtn.setEventHandler("onclick",this._split_moveBtn_onClickEvent,this);
}


pForm._split_moveBtn_onClickEvent = function(obj,e)
{
    var nMove = (obj.splitStatus) ? -obj.splitMove : +obj.splitMove;
    var sText = (obj.splitStatus) ? "▼" : "▲";


    obj.targetUpObject.setOffsetBottom(obj.targetUpObject.getOffsetBottom()+nMove);

    obj.move(obj.getOffsetLeft(),obj.getOffsetTop()+nMove,obj.getOffsetWidth(),obj.getOffsetHeight(),obj.getOffsetRight(),obj.getOffsetBottom()+nMove);

    for(var i=0; i<obj.targetDownObject.length; i++)
    {
        var oTarget = obj.targetDownObject[i];
        oTarget.move(oTarget.getOffsetLeft(),oTarget.getOffsetTop()+nMove,oTarget.getOffsetWidth(),oTarget.getOffsetHeight(),oTarget.getOffsetRight(),oTarget.getOffsetBottom()+nMove);
    }

    obj.splitStatus = (obj.splitStatus) ? false : true;
    obj.set_text(sText);
}


/**
* 디버그용 데이터셋정보를 볼수 있는 팝업화면 오픈
* @param
* @return N/A
* @example
* @memberOf public
*/
pForm.gfn_commonKeyDownCheck = function(obj,e)
{
    //trace("e.keycode ==>"+e.keycode);
    //Ctrl + M  :: Debug 화면 호출
    if(e.ctrlKey == true && e.keycode == 77)
    {
        //var sOption = "autosize=true";

        this.gfn_openPopup("poOrdNumSelji","frame::debugView.xfdl","","","");
    }
}


/******************************************************************************
 * Function명 : gfn_paramAdd
 * 설명       : 컴퍼넌트 입력 값 일괄 argument 추가
 * Params     : form object
 * Return     :
 * 사용법 : 해당 id를 키로 설정해준다.
 *******************************************************************************/
// parameter
pForm.gfn_paramAdd = function (form)
{
    var param = "";
    for (var i = 0; i < form.components.length; i++)
    {
        if (form.components[i] instanceof Combo || form.components[i] instanceof CheckBox
             || form.components[i] instanceof ListBox || form.components[i] instanceof Edit
             || form.components[i] instanceof MaskEdit || form.components[i] instanceof TextArea
             || form.components[i] instanceof Radio || form.components[i] instanceof Spin
             || form.components[i] instanceof Calendar)
        {
            param += form.components[i].name + "='" + gfn_blankStr(form.components[i].value) + "' ";
        }
    }
    return param;
}

/******************************************************************************
 * Function명 : gfn_cpRequired
 * 설명       : 컴퍼넌트 필수 체크
 * Params     : form object
 * Return     : 체크 여부
 * 사용법 : 필수체크가 필요한 컴퍼넌트에 user property를 추가하여 체크
 user property name : required     value : true
 필수 경고 메시지를 위해 해당 static id 값을 수정한다.
 Ex) Edit id : name      Static id : name_desc
 *******************************************************************************/
pForm.gfn_cpRequired = function (form)
{
    var requiredBoolean = true;
    for (var i = 0; i < form.components.length; i++)
    {
        //gfn_cpRequired(this.tab_Base.tabpage1)
        if (form.components[i] instanceof Combo || form.components[i] instanceof CheckBox
             || form.components[i] instanceof ListBox || form.components[i] instanceof Edit
             || form.components[i] instanceof MaskEdit || form.components[i] instanceof TextArea
             || form.components[i] instanceof Radio || form.components[i] instanceof Spin
             || form.components[i] instanceof Calendar)
        {
            if (form.components[i].chkValue != null)
            {
                if (form.components[i].chkValue == true || form.components[i].chkValue == "true")
                {
                    if (this.gfn_blankStr(form.components[i].value) == "")
                    {
                        alert( form.components[i].chkValueTxt+" 의 값을 넣으세요."  );
                        form.components[i].setFocus();
                        return false;
                    }
                }
            }
        }
    }
    return requiredBoolean;
}

/******************************************************************************
 * Function명 : gfn_dsRequired
 * 설명       : 그리드 필수 체크
 * Params     : grid object, dataset object, 필수 id Array
 * Return     : 체크 여부
 * 사용법 : 필수체크가 필요한 그리드 id, dataset id, dataset cell id를 배열로 넘겨준다.
 *******************************************************************************/
pForm.gfn_dsRequired = function (grid, dataset, arrayId)
{
    var requiredBoolean = true;
    for (var i = 0; i < dataset.getRowCount(); i++)
    {
        if (dataset.getRowLevel(i) != 1 && dataset.getRowType(i) != Dataset.ROWTYPE_NORMAL)
        {
            for (var j = 0; j < arrayId.length; j++)
            {
                if (this.gfn_isNull(dataset.getColumn(i, arrayId[j])))
                {
                    dataset.set_rowposition(i);
                    grid.setCellPos(grid.getBindCellIndex("body", arrayId[j]));
                    grid.setFocus();
                    gfn_alert(gfn_GetMessTxt("common.required.msg", grid.getCellText(-1, grid.getCellPos())), "I");
                    requiredBoolean = false;
                    return requiredBoolean;
                }
            }
        }
    }
    return requiredBoolean;
}

/**
* 20150414 주석처리
* 사용안함. UI공통
*/
// /******************************************************************************
//  * Function명 :  gfn_showModal
//  * 설명       :  Modal Dialog실행 함수
//  * Params     :  sUrl - 공통코드
//  *               objParam - 팝업창에 넘어갈 파라미터.
//  * Return     : 성공 = variant ( Dialog창에서 close()에 의해 Return된 값 )
//  *              실패 = ""
//  * 사용법 : returnObj = gfn_showModal("common_pop::PopStudent.xfdl", sParam);
//  *******************************************************************************/
// this.gfn_showModal = function (sUrl, objParam, bTitlebar, sStyle)
// {
//  var objDate = new Date();
//  var sStamp = objDate.getTime();
//
//  // Create Object
//  var objChildFrame = new ChildFrame();
//
//  // alert(grect_window);
//  var crect_window = this.canvas.getClientRect(Canvas.COORD_SCREEN);
//  objChildFrame.init("dialog_" + sStamp, crect_window.left, crect_window.top, crect_window.right, crect_window.bottom, sUrl);
//
//  if (gfn_isNull(bTitlebar))
//  {
//      bTitlebar = true;
//  }
//  if (gfn_isNull(sStyle))
//  {
//      sStyle = "background:#ffffffff;";
//  }
//  // "background:#ffffff60;"; - 약간 불투명
//
//  objChildFrame.set_showtitlebar(bTitlebar);
//  objChildFrame.set_layered("true");
//  objChildFrame.set_style(sStyle);
//
//  // objChildFrame.autosize = false;
//  // objChildFrame.titletext  = "다이얼로그 설정";
//  objChildFrame.set_openalign("center middle");
//
//  // Show Object
//  var objRslt = objChildFrame.showModal(this.getOwnerFrame(), objParam);
//
//  // Destroy Object
//  this.removeChild(objChildFrame.name);
//  objChildFrame.destroy();
//  objChildFrame = null;
//
//  return objRslt;
// }


/******************************************************************************
 * Function명 :  gfn_dsPrn
 * 설명       :  화면(UXStudio)에서 데이타셋 찍어보기
 * Params     : objDS  -  UXStudio에서 찍어볼 데이타셋
 * Return     : 데이타셋의 내용을 보여준다.
 * 사용법 : gfn_dsPrint(ds_master)
 *******************************************************************************/
pForm.gfn_dsPrn = function (objDS)
{
    var intColCnt = objDS.getColCount();
    var intRowCnt = objDS.getRowCount();
    var i;

    // ------------------------------------------------
    // Header를 출력한다.
    // ------------------------------------------------
    var strHeadStr = "";
    var strDsName = "UnKnown Dataset";

    strDsName = objDS.name;
    trace(">>>>    Dataset (" + strDsName + ") Tracing   ");
    trace(">>>> " + "Col Cnt:" + intColCnt + " /  Row Cnt:" + intRowCnt);

    for (var j=0; j < intColCnt; j += 1)
    {
        strHeadStr += "[" + objDS.getColID(j) + "] ";
    }
    trace(">>>> COL ID : " + strHeadStr);
    trace(">>>> " + "-------------------------Row Cnt:" + intRowCnt);

    // ------------------------------------------------
    // 내용을 출력한다.
    // ------------------------------------------------
    var strRow = "";
    for (i = 0; i < intRowCnt; i++)
    {
        strRow = objDS.getRowType(i) + "::";
        for (var j=0; j < intColCnt; j += 1)
        {
            strRow += objDS.getColID(j);
            strRow += "[" + gfn_blankStr(objDS.getColumn(i, objDS.getColID(j))) + "] ";
        }

        trace(">>>> " + strRow);
    }
    trace(">>>> ---------------------------------------------------");
}


/**
* 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
* @param {object} sValue object
* @return {Boolean] sValue가 undefined, null, NaN, "", Array.length = 0인 경우 = true, 이외의 경우 = false
* @example
* @memberOf global
*/
pForm.gfn_isNull = function (sValue)
{
    if (new String(sValue).valueOf() == "undefined")
    {
        return true;
    }
    if (sValue == null)
    {
        return true;
    }
    if ((sValue == "NaN") && (new String(sValue.length).valueOf() == "undefined"))
    {
        return true;
    }
    if (sValue.length == 0)
    {
        return true;
    }
    if (sValue.toString() == "")
    {
        return true;
    }
    if (new String(sValue).trim(' ') == "")
    {
        return true;
    }

    return false;
}

/**
* 공백으로치환
* @param {string} 체크할  파리미터명
* @return {string] String
* @example
*     paramStr += gfn_SetParam("sql_xml", "gspl_sql_common");
* @memberOf global
*/
pForm.gfn_isEmpty = function(strArg)
{
   // 2015.08.28 ExtNx -> Eco로 전환
   if( this.gfn_isNull(strArg)) return "";
   else
   return strArg;

}



/******************************************************************************
 * Function명 :  gfn_isNaNZero
 * 설명       :  입력값이 Nan에 해당하는 경우 0을 리턴한다.
 * Params     :  sValue : 체크할 문자열
 * Return     :
 *      - sValue가 NaN이면 0, 아니면 sValue를 그대로 넘긴다.
 * 사용법 : gfn_isNaNZero(fChul)
 *******************************************************************************/
pForm.gfn_isNaNZero = function (sValue)
{
    if (isNaN(sValue))
    {
        return 0;
    }
    else
    {
        return parseFloat(sValue);
    }
}


/******************************************************************************
 * Function명 :  gfn_decode
 * 설명       :  삼항연산자 대신 사용하는 decode함수
 * Params     :
 * Return     : 비교 대상 변수가 같을 경우 값 리턴
 * 사용법 : gfn_decode(ds_aaa.getRowType(ds_aaa.roposition), 'insert','combo','none')
 *           gfn_decode(Column1,'1','○','2','/','3','◐','')
 *******************************************************************************/
pForm.gfn_decode = function ()
{
    var varRtnValue = null;

    var arrArgument = this.gfn_decode.arguments;
    var varValue = arrArgument[0];
    var bIsDefault = false;
    var nCount = 0;

    if ((arrArgument.length % 2) == 0)
    {
        nCount = arrArgument.length - 1;
        bIsDefault = true;
    }
    else
    {
        nCount = arrArgument.length;
        bIsDefault = false;
    }

    for (var i = 1; i < nCount; i += 2)
    {
        if (varValue == arrArgument[i])
        {
            varRtnValue = arrArgument[i + 1];
            i = nCount;
        }
    }

    if (varRtnValue == null && bIsDefault)
    {
        varRtnValue = arrArgument[arrArgument.length - 1];
    }

    return varRtnValue;
}


/******************************************************************************
 * Function명 :  gfn_iif
 * 설명       : 삼항연산자 대신 사용하는  if함수
 * Params     :
 * Return     : 비교 대상 변수가 같을 경우 값 리턴
 * 사용법 : gfn_iif(rowlevel>0,'text','combo')
 *           gfn_iif(Column0 == '1','○',gfn_iif(Column0 == '2','/',gfn_iif(Column0 == '3','◐', '')))
 *******************************************************************************/
pForm.gfn_iif = function ()
{
    var varRtnValue = null;

    var arrArgument = gfn_iif.arguments;

    if (arrArgument[0])
    {
        return arrArgument[1];
    }
    else
    {
        return arrArgument[2];
    }
}


/******************************************************************************
 * Function명 :  gfn_gridColNm
 * 설명       : 그리드 컬럼명 가져오기 함수
 * Params     :  _NewChildFrame()참조
 * Return     : 성공 = 컬럼명 / 실패 = ""
 * 사용법 :
 *******************************************************************************/
pForm.gfn_gridColNm = function (obj, col)
{
    var colNm;

    colNm = String(obj.getCellProperty("body", col, "text")).split("bind:").join("");

    return colNm;
}

/******************************************************************************
 * Function명 :  gfn_existFunc
 * 설명       :  해당 함수가 존재하는지 여부를 체크한다.
 * Params     : argFunc - "체크할 함수명".
 * Return     : true - 함수가 존재함 / false - 함수가 존재하지 않음.
 * 사용법    : gf_existFunc("gridBtnClick_BeforeCheck")
 *******************************************************************************/
pForm.gfn_existFunc = function (argFunc)
{
    if (typeof eval(argFunc) == "undefined")
    {
        return false;
    }
    return true;
}

/******************************************************************************
 * Function명 :  gfn_getBindObjInfo
 * 설명       :  컴포넌트의 바인딩 정보를 알아낸다
 * Params     : objComp - component obj
 * Return     : obj
 * 사용법    : var obj = gfn_getBindObjInfo(Combo00);
 *******************************************************************************/
pForm.gfn_getBindObjInfo = function (objComp)
{
    var obj = {
    };
    var bindObj = this.binds;
    for (var i = 0; i < bindObj.length; i++)
    {
        if (objComp.name != bindObj[i].compid)
        {
            continue;
        }

        obj.datasetid = bindObj[i].datasetid;
        obj.columnid = bindObj[i].columnid;
    }

    return obj;
}


/******************************************************************************
 * Function명 :  gfn_checkFromTo
 * 설명       : 시작값과 종료값의 크기 체크
 * Params     : from - 종료값, to   - 시작값
 * Return     : true/false(시작값이 종료값보다 크면 false)
 * 사용법    : gfn_checkFromTo(234, 345);
 *******************************************************************************/
pForm.gfn_checkFromTo = function (from, to)
{
    if (this.gfn_isNull(from) || this.gfn_isNull(to))
    {
        return true;
    }
    if (nexacro.toNumber(from) > nexacro.toNumber(to))
    {
        return false;
    }

    return true;
}

/******************************************************************************
 * Function명 : gfn_checkNationalNo
 * 설명       : 주민등록번호를 체크한다.
 * Params     : 주민등록번호 입력하는 Object
 * Return     : boolean - true 또는 false
 * 사용법    : var bRtn = gfn_checkNationalNo(msk_juminNo);
 ******************************************************************************/
pForm.gfn_checkNationalNo = function (obj)
{
    if (this.gfn_isNationalNo(obj.value))
    {
        return true;
    }
    else
    {
        obj.set_value("");
        obj.setFocus();
        return false;
    }
}

/******************************************************************************
 * Function명 : gfn_checkNationalNoForGrid
 * 설명       : 주민등록번호를 체크한다.(그리드용)
 * Params     : 주민등록번호 입력하는 Object
 * Return     : boolean - true 또는 false
 * 사용법    : var bRtn = gfn_checkNationalNoForGrid(obj,"realresno");
 ******************************************************************************/
pForm.gfn_checkNationalNoForGrid = function (obj, columnId)
{
    if (this.gfn_isNationalNo(obj.getColumn(obj.rowposition, columnId)))
    {
        // return true;
    }
    else
    {
        // obj.setColumn(obj.rowposition, columnId, "");
        return false;
    }
}
/******************************************************************************
 * Function명 : gfn_checkFnationalNoForGrid
 * 설명       : 외국인등록번호를 체크한다.(그리드용)
 * Params     : 외국인등록번호 입력하는 Object
 * Return     : boolean - true 또는 false
 * 사용법    : var bRtn = gfn_checkFnationalNoForGrid(obj,"realresno");
 ******************************************************************************/
pForm.gfn_checkFnationalNoForGrid = function (obj, columnId)
{
    if (this.gfn_isFnationalNo(obj.getColumn(obj.rowposition, columnId)))
    {
        return true;
    }
    else
    {
        obj.setColumn(obj.rowposition, columnId, "");
        return false;
    }
}
/******************************************************************************
 * Function명 : gfn_checkFnationalNo
 * 설명       : 외국인번호를 체크한다.
 * Params     : 외국인번호 입력하는 Object
 * Return     : boolean - true 또는 false
 * 사용법    : var bRtn = gfn_checkFnationalNo(msk_fNo);
 ******************************************************************************/
pForm.gfn_checkFnationalNo = function (obj)
{
    if (this.gfn_isFnationalNo(obj.value))
    {
        return true;
    }
    else
    {
        obj.set_value("");
        obj.setFocus();
        return false;
    }
}


/******************************************************************************
 * Function명 : gfn_isNationalNo
 * 설명       : 주민등록번호를 체크한다.
 * Params     : 주민등록번호 13자리
 * Return     : boolean - true 또는 false
 * 사용법    :
 ******************************************************************************/
pForm.gfn_isNationalNo = function (nationalNo)
{
//  var errMsg = "유효하지 않은 주민등록번호 입니다.";
//  if (this.gfn_blankStr(nationalNo).length != 13)
//  {
//      this.alert(errMsg);
//      return false;
//  }
//
//  var sum = 0;
//
//  for (var i = 0; i < 12; i++)
//  {
//      this.lookupSetter("m", "set_m").set((i + 2) % 10);
//      if (i > 7)
//      {
//          this.lookupSetter("m", "set_m").addset(2);
//      }
//
//      sum += eval(nationalNo.charAt(i)) * this.lookup("m");
//  }
//
//  var chkNum = (11 - sum % 11) % 10;
//
//  if (chkNum != eval(nationalNo.charAt(12)))
//  {
//      this.alert(errMsg);
//      return false;
//  }
//
//  return true;
    {
    var errMsg = "유효하지 않은 주민등록번호 입니다.";
    if (this.gfn_blankStr(nationalNo).length != 13)
    {
        this.alert(errMsg);
        return false;
    }

    var sum = 0;

    for (var i = 0; i < 12; i++)
    {
        this.lookupSetter("m", "set_m").set((i + 2) % 10);
        if (i > 7)
        {
            this.lookupSetter("m", "set_m").addset(2);
        }

        sum += eval(nationalNo.charAt(i)) * this.lookup("m");
    }

    var chkNum = (11 - sum % 11) % 10;

    if (chkNum != eval(nationalNo.charAt(12)))
    {
        this.alert(errMsg);
        return false;
    }

    return true;
}
}

/******************************************************************************
 * Function명 : gfn_isNationalNo2
 * 설명       : 주민등록번호를 체크한다.
 * Params     : 주민등록번호 13자리
 * Return     : boolean - true 또는 false
 * 사용법    :
 ******************************************************************************/
pForm.gfn_isNationalNo2 = function (nationalNo)
{
    if (this.gfn_blankStr(nationalNo).length != 13)
    {
        return false;
    }

    var sum = 0;

    for (var i = 0; i < 12; i++)
    {
        this.lookupSetter("m", "set_m").set((i + 2) % 10);
        if (i > 7)
        {
            this.lookupSetter("m", "set_m").addset(2);
        }

        sum += eval(nationalNo.charAt(i)) * this.lookup("m");
    }

    var chkNum = (11 - sum % 11) % 10;

    if (chkNum != eval(nationalNo.charAt(12)))
    {
        return false;
    }

    return true;
}

/******************************************************************************
 * Function명 : gfn_isFnationalNo
 * 설명       : 외국인번호를 체크한다.
 * Params     : 외국인번호 13자리
 * Return     : boolean - true 또는 false
 * 사용법    :
 ******************************************************************************/
pForm.gfn_isFnationalNo = function (fNationalNo)
{
    var errMsg = "유효하지 않은 외국인번호 입니다.";
    if (this.gfn_blankStr(fNationalNo).length != 13)
    {
        this.alert(errMsg);
        return false;
    }

    var birthYear = "";
    if ((fNationalNo.charAt(6) == "5") || (fNationalNo.charAt(6) == "6"))
    {
        birthYear = "19";
    }
    else if ((fNationalNo.charAt(6) == "7") || (fNationalNo.charAt(6) == "8"))
    {
        birthYear = "20";
    }
    else if ((fNationalNo.charAt(6) == "9") || (fNationalNo.charAt(6) == "0"))
    {
        birthYear = "18";
    }
    else
    {
        this.alert(errMsg);
        return false;
    }

    birthYear += fNationalNo.substr(0, 2);
    this.lookupSetter("birthMonth", "set_birthMonth").set(fNationalNo.substr(2, 2) - 1);
    this.lookupSetter("birthDate", "set_birthDate").set(fNationalNo.substr(4, 2));
    this.lookupSetter("birth", "set_birth").set(new Date(birthYear, this.lookup("birthMonth"), this.lookup("birthDate")));

    if (this.lookup("birth").getYear() % 100 != fNationalNo.substr(0, 2) || this.lookup("birth").getMonth() != this.lookup("birthMonth") || this.lookup("birth").getDate() != this.lookup("birthDate"))
    {
        this.alert(errMsg);
        return false;
    }

    var sum = 0;
    var odd = 0;
    this.lookupSetter("buf", "set_buf").set(new Array(13));
    for (i = 0; i < 13; i++)
    {
        this.lookup("buf").getSetter(i).set(parseInt(fNationalNo.charAt(i)));
    }
    odd = this.lookup("buf")[7] * 10 + this.lookup("buf")[8];

    if (odd % 2 != 0)
    {
        this.alert(errMsg);
        return false;
    }

    if ((this.lookup("buf")[11] != 6) && (this.lookup("buf")[11] != 7) && (this.lookup("buf")[11] != 8) && (this.lookup("buf")[11] != 9))
    {
        this.alert(errMsg);
        return false;
    }

    var multipliers = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];

    for (var i = 0,sum = 0; i < 12; i++)
    {
        sum += (this.lookup("buf")[i].mulset(multipliers[i]));
    }

    sum = 11 - (sum % 11);

    if (sum >= 10)
    {
        sum -= 10;
    }
    sum += 2;

    if (sum >= 10)
    {
        sum -= 10;
    }

    if (sum != this.lookup("buf")[12])
    {
        this.alert(errMsg);
        return false;
    }
    else
    {
        return true;
    }
}

/******************************************************************************
 * Function명 : gfn_isEmail
 * 설명       : 전자 메일 주소 체크
 * Params     : sEmail: 입력값
 * Return     : boolean - true 또는 false
 * 사용법    : var bRtn = gfn_isEmail(Edit00.value);
 ******************************************************************************/
pForm.gfn_isEmail = function (sEmail)
{
    var arrMatch = sEmail.match(/^(\".*\"|[A-Za-z0-9_-]([A-Za-z0-9_-]|[\+\.])*)@(\[\d{1,3}(\.\d{1,3}){3}]|[A-Za-z0-9][A-Za-z0-9_-]*(\.[A-Za-z0-9][A-Za-z0-9_-]*)+)$/);
    if (arrMatch == null)
    {
        return false;
    }
    else
    {
        return true;
    }
}

/******************************************************************************
 * Function명 : gfn_formatTelNum
 * 설명       : 유효한 전화번호 형태로 변환
 * Params     : value: 입력값
 * Return     : boolean - true 또는 false
 * 사용법    :
 ******************************************************************************/
pForm.gfn_formatTelNum = function (value)
{
    // 전화번호 규칙
    var reTel = /^(02|031|032|033|041|042|043|051|052|053|054|055|061|062|063|064|070)([0-9]{3,4})([0-9]{4})$/;
    return value.split(reTel).join('$1-$2-$3');
}

/******************************************************************************
 * Function명 : gfn_formatCellNum
 * 설명       : 유효한 휴대전화번호 형태로 변환
 * Params     : value: 입력값
 * Return     : boolean - true 또는 false
 * 사용법    :
 ******************************************************************************/
pForm.gfn_formatCellNum = function (value)
{
    // 핸드폰번호 규칙
    var reSel = /^(010|011|016|017|018|019)([0-9]{3,4})([0-9]{4})$/;
    return value.split(reSel).join('$1-$2-$3');
}

/******************************************************************************
 * Function명 : gfn_smartPosRow
 * 설명       : 가장 적합한 row를 리턴한다.
 * Params     : ds : Dataset
 *              nUpRow : 위 row
 *              nDownRow : 아래 row
 * Return     : integer 가장 적합한 row
 * 사용법    :
 ******************************************************************************/
pForm.gfn_smartPosRow = function (ds, nUpRow, nDownRow)
{
    var isModifyUpRow = ds.getRowType(nUpRow);
    var isModifyDownRow = ds.getRowType(nDownRow);

    if (isModifyDownRow == Dataset.ROWTYPE_INSERT)
    {
        return nDownRow;
    }
    if (isModifyUpRow == Dataset.ROWTYPE_INSERT)
    {
        return nUpRow;
    }

    if (isModifyDownRow == Dataset.ROWTYPE_UPDATE)
    {
        return nDownRow;
    }
    if (isModifyUpRow == Dataset.ROWTYPE_UPDATE)
    {
        return nUpRow;
    }

    return nDownRow;
}


/******************************************************************************
 * Function명 : gfn_dateCheck
 * 설명       : 날짜에 대한 형식 체크
 * Params     : sFdate   검사일자
 * Return     : 유효성반환 (날짜형식이 아닐경우 FLASE)
 ******************************************************************************/
pForm.gfn_dateCheck = function (sDate)
{
    if (typeof (sDate) != "string")
    {
        sDate = String(sDate).valueOf();
    }

    sDate = sDate.split(" ").join("").split("-").join("").split("/").join("");

    if (sDate == undefined || sDate == "")
    {
        return false;
    }
    if (sDate.length == 4)
    {
        sDate = sDate + "0101";
    }
    else if (sDate.length == 6)
    {
        sDate = sDate + "01";
    }

    if (nexacro.isNumeric(sDate) == false)
    {
        return false;
    }

    var nYear = parseInt(String(sDate).substr(0, 4));
    var nMonth = parseInt(String(sDate).substr(4, 2));
    var nDate = parseInt(String(sDate).substr(6, 2));

    if (!this.gfn_isValidMonth(nMonth))
    {
        return false;
    }

    if (!this.gfn_isValidDay(nYear, nMonth, nDate))
    {
        return false;
    }

    return true;
}


/******************************************************************************
 * Function명 : gfn_isValidDay
 * 설명       : 유효한(존재하는) 일(日)인지 체크
 * Params     : 월, 년, 일
 * Return     : 유효성반환 (날짜형식이 아닐경우 FLASE)
 ******************************************************************************/
pForm.gfn_isValidDay = function (sYyyy, sMm, sDd)
{
    var _mm = parseInt(sMm, 10) - 1;
    var _dd = parseInt(sDd, 10);

    var _end = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((sYyyy % 4 == 0 && sYyyy % 100 != 0) || sYyyy % 400 == 0)
    {
        _end[1] = 29;
    }

    return (_dd >= 1 && _dd <= _end[_mm]);
}

/******************************************************************************
 * Function명 : gfn_isValidMonth
 * 설명       : 유효한(존재하는) 월(月)인지 체크
 * Params     : 검사월
 * Return     : 유효성반환 (날짜형식이 아닐경우 FLASE)
 ******************************************************************************/
pForm.gfn_isValidMonth = function (sMm)
{
    var _v_m = parseInt(sMm, 10);
    return (_v_m >= 1 && _v_m <= 12);
}

/******************************************************************************
 * Function명 : gfn_equalsOr
 * 설명       : 구분자(콤마)로 여러값을 한꺼번에 비교할 경우 쓰임
 * Params     : src: 구분자로 묶여진 비교대상데이터
 trg: 원데이터
 * Return     : 같은값이 하나라도 있을경우 true, 없을경우 false
 ******************************************************************************/
pForm.gfn_equalsOr = function (src, trg)
{
    var arr = src.split(",");
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] == trg)
        {
            return true;
        }
    }
    return false;
}


/**
 * IE 다운로드창 열기
 * @param {String} v_sFullFileName        파일명
 * @example gfn_msieDownload("http://10.222.36.25:8080/kpichrm/DOWN/PW/PWUA/PWUA00200_P2_HELP.hwp");
 */
pForm.gfn_msieDownload = function (vFileName, v_sFullFileName)
{
    this.setWaitCursor(true);

    vFileName = encodeURI(encodeURIComponent(vFileName));
    var strUrl = "http://" + nexacro.getApplication().gv_serverName + "/kpichrm/xplatform/FileDownload.jsp?fileName=" + vFileName + "&realfileName=" + v_sFullFileName;
    var axID = this.components["ActivexMSIE00"];


    var ActivexMSIE;
    if (axID == null)
    {
        ActivexMSIE = new Plugin("ActivexMSIE00", "absolute", 0, 0, 0 - 0, 0 - 0);
        ActivexMSIE.set_progid("shell.explorer.2");
        ActivexMSIE.windowed = true;
        this.addChild("ActivexMSIE00", ActivexMSIE);

        ActivexMSIE.set_visible(true);
        ActivexMSIE.show();
        ActivexMSIE.Navigate2(strUrl);

        this.setWaitCursor(false);
    }
    else
    {
        axID.Navigate2(strUrl);

        this.setWaitCursor(false);
    }
}


 /**
 * 정수인 nStart ~ nEnd의 범위에 있는 숫자에 대하여 random값을 return한다.
 * @param {String} nStart : 시작숫자 ( 단, 정수, 만일 정수가 아니면 Math.floor(nStart)를 적용함)
 * @param {String} nEnd   : 끝숫자 ( 단, 정수, 만일 정수가 아니면 Math.floor(nStart)를 적용함)
 * @param {Number} nStart : 검색 시작위치 (옵션 : Default=0) ( 예 : 1 )
 * @return - 성공 = nStart ~ nEnd범위 중 random숫자 (단, nStart, nEnd도 포함됨)
           - 실패 = -1
 */
pForm.gfn_rand = function (nStart, nEnd)
{
    var range_unit, rand, tmp;

    if( this.gfn_isNull(nStart) || this.gfn_isNull(nEnd) )  return -1;

    nStart = nexacro.floor(nStart);
    nEnd = nexacro.floor(nEnd);
    if( nStart > nEnd )
    {
        tmp = nStart;
        nStart = nEnd;
        nEnd = tmp;
    }
    range_unit = nEnd-nStart+1;

    var dt = new Date();
    rand = (dt.getMilliseconds()+(Math.random()*2000))/3000;

    return nexacro.floor(rand*range_unit*2)%range_unit+nStart;
}

 /**
 * 주어진 수식을 반올림하여 가장 가까운 정수를 반환한다.
 * @param {String} nValue 문자열
 * @param {Number} nDigit 문자열
 * @return {Number}
 */
pForm.gfn_round = function (nValue, nDigit)
{
    var nRound = 1;
    for ( var i = 0; i < nDigit; i++) {
        nRound = nRound * 10;
    }

    var nRetValue = nValue * nRound;
    nRetValue = nexacro.round(nRetValue);
    nRetValue = nRetValue / nRound;
    return nRetValue;
}

 /**
 * NULL 일 경우 빈 값을 리턴한다.
 * @param {String} sValue (문자열)
 * @return String
 */
pForm.gfn_transNullToEmpty = function (sValue)
{
    if( this.gfn_isNull(sValue) )
    {
        return "";
    }
    return sValue;
}

/**
 * NULL 일 경우 0을 리턴한다.
 * @param {String} sValue (문자열)
 * @return Int
 */
pForm.gfn_transNullToNumber = function (sValue1)
{
    if( this.gfn_isNull(sValue1) )
    {
        return 0;
    }
    return sValue1;
}

/**
 * NULL 일 경우 새로운 값을 리턴한다.
 * @param {String} sNewVal (바뀔 문자열)
 * @return String
 */
pForm.gfn_transNullToChar = function (sValue, sNewVal)
{
    if( this.gfn_isNull(sValue) )
    {
        return sNewVal;
    }
    return sValue;
}


/*******************************************************************************
 ★ 설명
    문자열이 숫자형식에 맞는지 여부 체크
 ★ Parameter
    1. sNum   : 체크할 문자열숫자 ( 예 : "-1234.56" ) (단, ","가 들어있으면 안 됨)
 ★ return
    - 숫자형식에 맞는경우 = true
    - 숫자형식에 맞지않는 경우 = false
 ******************************************************************************/
pForm.gfn_isNum = function (sNum)
{
    var c;
    var point_cnt=0;
    var ret=true;

    if( this.gfn_isNull(sNum) )     return false;

    for( i = 0 ; i < sNum.length ; i++ )
    {
        c = sNum.charAt(i);
        if( i == 0 && ( c == "+" || c == "-" ) );
        else if( c >= "0" && c <= "9" );
        else if( c == "." )
        {
            point_cnt++;
            if( point_cnt > 1 )
            {
                ret = false;
                break;
            }
        }
        else
        {
            ret = false;
            break;
        }
    }

    return ret;
}


/**
 * @class 지정한 데이터셋 중복값 체트
 * @param objDs         - 데이터셋명
 * @param strColumnId   - 컬럼명
 * @return N/A
 */
pForm.gfn_isDuplicationCheck = function(objDs,strColumnId)
{
    var nRow;

    //중복 값 체크...find row 사용
    for (var i=0; i<=objDs.rowcount-1; i++){
        var strColumnVal = objDs.getColumn(i,strColumnId);
        nRow = objDs.findRowExpr(strColumnId+" == '"+ strColumnVal +"'",i+1,objDs.rowcount);
        if (nRow >= 0){
            alert("중복된 자료가 존재합니다.");
            objDs.set_rowposition(nRow); // set
            return false;
        }
    }
    return true;
}


/**
* 입력값이 e-mail Type인지 체크하는 함수
* @param {string} strValue
* @return true = 입력값이 email형태일 경우
* @example
* @memberOf global
*/
pForm.gfn_checkEmail = function (strValue)
{
    if (this.gfn_isNull(strValue))
    {
        return false;
    }

    var nIndexOfAt = strValue.indexOf("@");
    var nIndexOfDot = strValue.indexOf(".");
    var nLength = strValue.length;

    // "@" 이 하나도 없거나 맨 끝에 위치한  경우
    if (nIndexOfAt <= 0 || nIndexOfAt == nLength)
    {
        return false;
    }

    // "." 이 하나도 없거나 맨 끝에 위치한 경우
    if (nIndexOfDot <= 0 || nIndexOfDot == nLength)
    {
        return false;
    }

    // "@"이 두개 이상 존재하는 경우
    if (strValue.indexOf("@", nIndexOfAt + 1) != -1)
    {
        return false;
    }

    // ".@" 인 경우 또는 "@."인 경우
    if (strValue.substr(nIndexOfAt - 1, 1) == "." || strValue.substr(nIndexOfAt + 1, 1) == ".")
    {
        return false;
    }

    // "@" 이후에 "."이 존재하지 않는 경우
    if (strValue.indexOf(".", (nIndexOfAt + 2)) == -1)
    {
        return false;
    }

    // 공백문자가 존재하는 경우
    if (strValue.indexOf(" ") != -1)
    {
        return false;
    }

    return true;
}

/**
* 입력값이 전화번호 format 인지 체크하는 함수
* @param {string} strValue
* @return true = 입력값이 전화번호 형태일 경우
* @example
* @memberOf global
*/
pForm.gfn_checkPhone = function (strValue)
{
    // null 이거나 "-"이 존재하지 않는 경우
    if (this.gfn_isNull(strValue) || (!this.gfn_isNull(strValue) && strValue.indexOf("-") == -1))
    {
        return false;
    }
    else if (strValue.indexOf(".") >= 0)
    {
        return false;
    }
    else
    {
        // "-" 사이의 값이 숫자가 아닌 경우
        var arrNumbers = strValue.split("-");
        for (var i = 0; i < arrNumbers.length; i++)
        {
            if (!TOBE.isNumeric(arrNumbers[i]))
            {
                return false;
            }
        }
    }
    return true;
}

/**
* html형식의 문자열에서 태그문자를 특수문자로 변형
* @param {string} html형식 문자열
* @return String, 변형문자열
* @example
* @memberOf global
*/
pForm.gfn_htmlToChars = function (str)
{
    // 2015.08.28 ExtNx -> Eco로 전환
    return Eco.string.escapeXML(str);
}


/**
* Font Object 생성 반환.
* @param {object} obj
* @param {number} iFontSize
* @param {string} 폰트명
* @param {string} sType
* @return {array] 변형문자열
* @example
* @memberOf global
*/
pForm.gfn_getObjFont = function (obj,iFontSize, sFontName, sType)
{
    //var objFont = obj.currentstyle.font;
	var objFont = new nexacro.Style_font();
     sType = (this.gfn_isNull(sType)) ? "normal" : sType;
     objFont.set_size(iFontSize);
     objFont.set_face(sFontName);
     objFont.set_type(sType);
//

//  var strFont = sFontName + "," + iFontSize;
//  if (bBold == true)
//  {
//      strFont += ",bold";
//  }
    return objFont;
}


/**
* Font 생성.
* @param {string} sText
* @param {stirng} 폰트명
* @return {array] width,height
* @example
* @memberOf global
*/
pForm.gfn_getTextSize = function(sText,oFont)
{
//return nexacro._getTextSize2(sText,oFont);

//2016.03.14 getTextSize 로 변경
    var objFont = new nexacro.Style_font("11 Dotum");
    return nexacro.getTextSize(sText,objFont).nx;
}



/**
*  공통 콤보코드 가져오기
* @param {string} sSvcId 서비스명
* @param {object} dsId Dataset
* @param {object} cbId Combo
* @param {string} sArg 파라메터
* @param {string} sCallBackFunc 문자열
* @param {string} sType 'ALL', 'PK', 'NONE', 'BLANK'
* @return N/A
* @example
* @memberOf global
*/
pForm.gfn_GetCmCdCombo = function (sSvcId, dsId, cbId, sArg, sCallBackFunc, sType)
{
    dsId.clearData();
    var sArgument     = "";
    sArgument += this.gfn_setParam("method","selectCmCode");
    sArgument += this.gfn_setParam("GRP_CD",sArg);
    sArgument += this.gfn_setParam("CM_CD","");

    var sController   = "/cmcm01100/selectCmCode.do";
    var sInDatasets   = "";
    var sOutDatasets  =  dsId.name + "=ds_output";
    //alert(sOutDatasets);
    this.gfn_transaction(sSvcId, sController, sInDatasets, sOutDatasets, sArgument, sCallBackFunc, false, false);

    if (!this.gfn_isNull(cbId)){
        this.gfn_SetFirstRow( dsId, sType );
        cbId.set_index(0);
    }else{
        this.gfn_SetFirstRow( dsId, sType );
    }

}

/**
*  데이터셋 페이징처리 부분 체크
* @param {string} outputDataset
* @return {string} return outputdataset
* @example
* @memberOf global
*/
pForm._gfn_searchPageDatasetCheck = function(sOutDs)
{
    if(this.gfn_isNull(sOutDs))
    {
        return sOutDs;
    }

    var aOutDsList = sOutDs.split(" ");
    var aOutDsInfo = "";
    var sPageDsSpare = "";
    var sOutDataset = "";
    var oOutDataset;
    var oPageDs;
    var oPageDsSpare;
    var oPageDsTarget;
    var nPage = (this.gfn_isNull(nexacro.getApplication().gds_pageInfo.getColumn(0,"CURR_PAGE"))) ? 1 : parseInt(nexacro.getApplication().gds_pageInfo.getColumn(0,"CURR_PAGE"));
    var sAppendDataset = (nPage > 1) ? "Y" : "N";
    var rtnVal = new Array(2);

    for(var i=0; i<aOutDsList.length; i++)
    {
        aOutDsInfo = aOutDsList[i].split("=");
        oOutDataset = this.gfn_getDataset(aOutDsInfo[0]);

        if(sAppendDataset == "Y")
        {
            sPageDsSpare = aOutDsInfo[0]+"_Spare";
            oPageDsSpare = this.gfn_getDataset(sPageDsSpare);
            oPageDsTarget = this.gfn_getDataset(aOutDsInfo[0]);

            if(this.gfn_isNull(oPageDsSpare))
            {
                oPageDsSpare = new Dataset;
                oPageDsSpare.loadXML(oPageDsTarget.saveXML());
                oPageDsSpare.name = sPageDsSpare;
                oPageDsSpare.useclientlayout = true;
                this.addChild(sPageDsSpare,oPageDsSpare);
            }

            if(sOutDataset.length == 0)
            {
               sOutDataset = sPageDsSpare+"="+aOutDsInfo[1];
            }
            else
            {
               sOutDataset += " "+sPageDsSpare+"="+aOutDsInfo[1];
            }
        }
        else
        {
            if(sOutDataset.length == 0)
            {
               sOutDataset = aOutDsInfo[0]+"="+aOutDsInfo[1];
            }
            else
            {
               sOutDataset += " "+aOutDsInfo[0]+"="+aOutDsInfo[1];
            }
        }
    }

    return sOutDataset;
}

/**
* 페이징 dataset 초기화
* @param {string} outputDataset
* @return N/A
* @example
* @memberOf global
*/
pForm._gfn_postPageDataset = function(sOutDs)
{
    if(this.gfn_isNull(sOutDs))
    {
        return sOutDs;
    }

    var aOutDsList = sOutDs.split(" ");
    var aOutDsInfo = "";
    var sPageDs = "";
    var sPageDsSpare = "";
    var sPageDsTarget = "";
    var nRow = 0;
    var oPageDsSpare;
    var oPageDsTarget;

    for(var i=0; i<aOutDsList.length; i++)
    {
        sOutDsInfo = aOutDsList[i].split("=");
        sTargetDs = sOutDsInfo[0];

         if(sTargetDs.search(/_Spare/g) > -1)
         {
             sPageDsTarget = sTargetDs.replace(/_Spare/g,"");
             oPageDsTarget = this.gfn_getDataset(sPageDsTarget);
             oPageDsSpare = this.gfn_getDataset(sTargetDs);


             oPageDsTarget.appendData(oPageDsSpare);
             nRow = oPageDsTarget.rowcount;
             oPageDsTarget.set_rowposition(nRow-1);
         }
    }
}


pForm.gfn_setPagingInit = function(obj)
{

    nexacro.getApplication().gds_pageInfo.clearData();
    nexacro.getApplication().gds_pageInfo.addRow();

    if(!this.gfn_isNulll(obj.value))
    {
        nexacro.getApplication().gds_pageInfo.setColumn(0, "CURR_PAGE", 1);
        nexacro.getApplication().gds_pageInfo.setColumn(0, "PAGE_LINE", obj.value);
    }
}

pForm.gfn_setPagingNext = function()
{
    var sCurPage = nexacro.getApplication().gds_pageInfo.getColumn(0, "CURR_PAGE");
    var nCurPage;

    if(!this.gfn_isNulll(sCurPage))
    {
        nCurPage = parseInt(sCurPage) + 1;
        nexacro.getApplication().gds_pageInfo.setColumn(0, "CURR_PAGE", nCurPage);
    }
}

pForm.gfn_setPagingBtn = function(obj,nTotalCnt,nRowCnt)
{
   if(this.gfn_isNulll(obj)) return;
   if(this.gfn_isNulll(nTotalCnt)) return;
   if(this.gfn_isNull(nRowCnt)) return;

   if(nRowCnt < 1)
   {
       //obj.set_visible(false);
       obj.set_enable(false);
       return;
   }

   if(parseInt(nRowCnt) < parseInt(nTotalCnt))
   {
       obj.set_enable(true);
   }
   else
   {
       obj.set_enable(false);
   }
}



/**
* 페이징 값 셋팅
* @param  {string} PAGE_LINE 컬럼값
* @param  {string} currPage
* @return N/A
* @example
* @memberOf public
*/
pForm.gfn_setPaging = function(pageLine, currPage)
{
    nexacro.getApplication().gds_pageInfo.clearData();
    nexacro.getApplication().gds_pageInfo.addRow();

    nexacro.getApplication().gds_pageInfo.setColumn(0, "PAGE_LINE", pageLine);
    nexacro.getApplication().gds_pageInfo.setColumn(0, "CURR_PAGE", currPage);
}


/**
* 메세지 팝업 오픈 실행 함수
* @param {string}  sMsg - 메세지 문자
* @param {string}  sCallBack - callback 함수명
* @return  N/A
* @example this.gfn_messageBox(sMsg);
* @memberOf public
*/
/*
pForm.gfn_messageBox = function(sPopupId, sMsg, sType, sCallback, sOption)
{
    var strMsg = this.gfn_GetMessTxt(sPopupId, sMsg);
    if(this.gfn_isNull(strMsg)){
        strMsg = sMsg;
    }

    var lineSplit = strMsg.split("\n");

    var commonCallback = "gfn_messageCallback";
    sCallback = (this.gfn_isNull(sCallback)) ? "_gfn_messageNullCallback" : sCallback;

    //폰트 사이즈 가져오기 위한 임시 static component
    var objStatic;
    if(this.components["_sta_com_messageBox"])
    {
        objStatic = this.components["_sta_com_messageBox"];
        objStatic.set_text(strMsg);

    }else{
        objStatic = new Static();
        objStatic.init("_sta_com_messageBox", "absolute", 0, 0, 357, 500, null, null);
        this.addChild("_sta_com_messageBox", objStatic);
        objStatic.set_visible(false);
        objStatic.set_text(strMsg);
        //objStatic.show();
    }

    //폰트 사이즈 정보
    var objFont     = this.gfn_getObjFont(objStatic, 9,"Dotum");
    var objTextSize = this.gfn_getTextSize(strMsg, objFont);

    //var nTxtRow = nexacro.ceil(objTextSize[0] / 355) ;//'355' => common::com_msgBox.xfdl 내 sta_text 박스 width값

    var nTxtRow = lineSplit.length;

    for(var i=0 ; i<lineSplit.length ; i++)
    {
        var rowTextSize = this.gfn_getTextSize(lineSplit[i], objFont);
        var splitCnt = nexacro.ceil(rowTextSize[0] / 355);
        if(splitCnt != 0)
        {
            splitCnt = splitCnt - 1;
        }
        nTxtRow = nTxtRow + splitCnt;
    }

    var nHeight = nTxtRow*objTextSize[1] + 150;//'150'  common::com_msgBox.xfdl 내 sta_text 박스 제외한 messageBox default 높이
    nHeight = nHeight + nTxtRow;//nTxtRow 보정높이 추가
    nWidth = 385;

    if(this.gfn_isNull(sType))
    {
        sType = "info";
    }

    if(this.gfn_isNull(sOption))
    {
        sOption = "height="+nHeight+",width="+nWidth+",callback="+commonCallback;//option 처리
    }

    var oArg = {message:strMsg,type:sType,callFunc:sCallback};

    if(this.gfn_isNull(sPopupId))
    {
        sPopupId = "commonMessage";
    }

    this.gfn_openMessageBox(sPopupId, "common::com_msgBox.xfdl", oArg, sOption);

    return false;
}
*/

/**
* 메세지 팝업 오픈 함수
* @param {string}  sPopupId - Popup Form의 ID
* @param {string}  sUrl - Popup Form  URL
* @param {object}  oArg - Popup Form으로 전달될 Argument
* @param {string}  sOption - Popup Form으로 전달될 Argument
* @return  N/A
* @example this.gfn_openMessage("commonMessage","common::com_msgBox.xfdl", oArg, sOption);
* @memberOf public
*/
pForm.gfn_openMessageBox = function (sPopupId, sUrl, oArg, sOption)
{
    var nLeft = -1;
    var nTop = -1;
    var nWidth = 1;
    var nHeight = 1;
    var sOpenalign = "center top";
    var bShowStatus = false;
    var bLayered = true;
    var sPopupCallback = "";


    var aVal = sOption.split(",");
    for (var i=0; i<aVal.length; i++)
    {
        var aVal2 = aVal[i].trim().split("=");
        switch (aVal2[0])
        {
            case "top":
                nTop = parseInt(aVal2[1]);
                break;
            case "left":
                nLeft = parseInt(aVal2[1]);
                break;
            case "width":
                nWidth = parseInt(aVal2[1]);
                break;
            case "height":
                nHeight = parseInt(aVal2[1]);
                break;
            case "openalign":
                sOpenalign = parseInt(aVal2[1]);
                break;
            case "callback":
                sPopupCallback = aVal2[1];
                break;
        }
    }

    if (nLeft == -1 && nTop == -1)
    {
        nLeft   =  (nexacro.getApplication().mainframe.width / 2) - Math.round(nWidth / 2);
        nTop    = (nexacro.getApplication().mainframe.height / 2) - Math.round(nHeight / 2) ;
    }

    var objParentFrame = this.getOwnerFrame();

    newChild = new nexacro.ChildFrame;
    newChild.init(sPopupId,"absolute",nLeft, nTop, nWidth, nHeight, null, null, sUrl);

    newChild.style.set_bordertype("round 2 2");
    newChild.set_dragmovetype("normal");
    newChild.set_showtitlebar(false);
    newChild.set_autosize(false);
    newChild.set_titletext("messageBox");
    newChild.set_showstatusbar(bShowStatus);
    newChild.set_openalign(sOpenalign);
    newChild.set_layered(bLayered);
    //newChild.style.set_background("transparent");
    newChild.style.set_overlaycolor("transparent");
    newChild.style.set_border("0 solid #5a5a63ff ");

    newChild.showModal(objParentFrame, oArg, this, sPopupCallback);

}


/**
* 메시지 팝업 공통 콜백 함수
* @return  true/false
* @memberOf public
*/
pForm.gfn_messageCallback = function ()
{
    var rtnArr = this.gfn_getPopupRtn();
    var rtn = rtnArr[0];
    var callFunc = rtnArr[1];

    if(rtn == true)
    {
        callFunc = "this." + callFunc + "()";
        eval(callFunc);
    }

    return rtn;
}

/**
* 메시지 팝업 null 콜백 함수
* @return N/A
* @memberOf public
*/
pForm._gfn_messageNullCallback = function()
{
    trace("콜백함수가 없습니다.");
}
