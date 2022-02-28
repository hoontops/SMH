<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<script type="text/javascript">
	$(document).ready(function() {
		//공통 페이징 처리
		fn_page('j_page_div', '');
	});
</script>

<div id="trTableDiv" class="popcont">
	<table class="list_t01">
		<caption>메모 목록</caption>
		<colgroup>
			<col width="11%">
			<col width="11%">
			<col width="*">
			<col width="18%">
		</colgroup>
		<thead>
			<tr>
                <th scope="col"><input name="MY_MEMO_CHKALL" type="checkbox" title="전체선택" onClick="fn_chkAll();"></th>
				<th scope="col">번호</th>
				<th scope="col">내용</th>
				<th scope="col">등록일</th>
			</tr>
		</thead>
		<tbody>
			<c:set var="listCnt" value="${fn:length(memoList) }" />
			<c:if test="${listCnt == 0 }">
				<tr>
					<td colspan="4">메모목록이 존재하지 않습니다.</td>
				</tr>
			</c:if>
                    <c:if test="${listCnt > 0 }">
                       <c:forEach var="target" items="${memoList}" varStatus="status">
                       <c:set var="j_tot" value="${target.TOT_CNT}" />
                        <tr>
                            <td><input name="MY_MEMO_CHK" type="checkbox" value="${target.MY_MEMO_ID}" /></td>
                            <td>${target.RN}</td>
                            <td class="left">
                               <a href="/pes/pemm00010/selectPemm00030List.scr?MY_MEMO_ID=${target.MY_MEMO_ID}">
                                   <span style="display: inline-block;width: 280px;height: 15px;overflow: hidden;text-overflow: ellipsis;">${target.MEMO_COMMENTS}</span>
                               </a>
                           </td>
                            <td>${target.CREATION_DATE}</td>
                        </tr>
                        </c:forEach>
                    </c:if>
		</tbody>
	</table>
	<div class="j_page_div">
		<input type="hidden" name="j_now" value="${R_PAGE_NUM }" />
		<input type="hidden" name="J_tot" value="${j_tot }" />
		<input type="hidden" name="j_row" value="${R_ROW_SIZE }" />
		<input type="hidden" name="j_page" value="${R_PAGE_SIZE }" />
		<input type="hidden" name="j_event" value="fn_selectList" />
	</div>
	<div class="btn_area btn_pg_mt">
        <button class="btn_pop_basic fl" onClick="fn_delete();">삭제</button>
		<span class="fr">
		    <a href="/pes/pemm00010/selectPemm00020List.scr" class="btn_pop_primary">등록</a>
			<button class="btn_pop_basic" onClick="fn_close(); return false;">닫기</button>
		</span>
	</div>
</div>
