
/********************************************************
	팝업 오픈 공통함수 // <a href="faq.html" onclick="win_pop(this.href, 'faq', '550', '350', 'yes');return false">
********************************************************/
function win_pop(path, win_name, width, height, scroll)
{window.open(path,win_name,'width=' + width + ', height=' + height + ', resizable=no, scrollbars=' + scroll + ', status=no, toolbar=no');}


// 브라우저 종류에 따라 <html> 에 class 설정 [ CSS 핵 대신 활용 ]
var setBrowserClass = function() {
	var ua = navigator.userAgent.toLowerCase();
	is = function(t) { return ua.indexOf(t) > -1 };
	var browserClass = {
		"msie 7"  : "ie7",
		"msie 8"  : "ie8",
		"msie 9"  : "ie9",
		"msie 10" : "ie10",
		"chrome"  : "cr",
		"safari"  : "sf",
		"firefox" : "ff"
	}
	for (var b in browserClass) {
		if (is(b)) { jQuery("html").addClass(browserClass[b]); /* document.title = browserClass[b]; */ break; }
	}
}
setBrowserClass();




$(document).ready(function(){
	// ie9 용 placeholder
	$('input, textarea').placeholder();

	//nav 영역
	$("#nav>ul>li").mouseenter(function(){
		$("header .line").css({'height':'211px', 'top':'90px'});
	}).mouseleave(function() {
		$("header .line").css({'height':'0', 'top':'89px'});
	});
	//side nav 펼침,숨김 영역
	$(".cls_aside").click(function(){
		$("aside").css({"width":"0","height":"0"});
		$("section").css('width','1120px');
		$(this).hide();
		$(".open_aside").show();
	});
	$(".open_aside").click(function(){
		$("aside").css({"width":"230px","height":"auto"});
		$("section").css('width','910px');
		$(this).hide();
		$(".cls_aside").show();
	});
	// side 3depth 펼침, 숨김
	$(".snb>li>a").click(function(){
		if ($(this).parent("li").children("ul").length > 0)
		{
			$(".snb li ul").hide();
			$(this).parent("li").children("ul").show();
			return false;
		} else {
			$(".snb li ul").hide();
		}
	});

	//main banner 이동버튼
	$(".work_prev").click(function(){
		var $ul=$(".work_list");
		var $fstchild=$ul.find( "li:eq(0)" );
		$ul.append($fstchild);
	});
	$(".work_next").click(function(){
		var $ul=$(".work_list");
		var $lastchild=$ul.children().last();
		$ul.prepend($lastchild);
	});

	// 메인 결재 탭
	$(".bbs_app .mc_tit").click(function(){
		$(".bbs_app .mc_tit").removeClass("on").addClass("off");
		$(".bbs_app .tab_box").hide();
		$(this).removeClass("off").addClass("on");
		$(this).next(".tab_box").show();
	});
	$(".bbs_app .mc_tab_s").click(function(){
		$(".bbs_app .mc_tab_s").removeClass("on").addClass("off");
		$(".bbs_app .tab_box_s").hide();
		$(this).removeClass("off").addClass("on");
		$(this).next(".tab_box_s").show();
	});
	// 메인 질문과 답변 탭
	$(".bbs_qna .mc_tit").click(function(){
		$(".bbs_qna .mc_tit").removeClass("on").addClass("off");
		$(".bbs_qna .tab_box").hide();
		$(this).removeClass("off").addClass("on");
		$(this).next(".tab_box").show();
	});
	// 메인 업무화면 바로가기 or 회계일정 클릭시
	$(".links_system a").click(function() {
		$(".schedule").hide();
		$(".work_list").show();
		$(".work_control").show();
		$(".links_schedule").removeClass("current");
		$(this).parent("li").addClass("current");
	});
	$(".links_schedule a").click(function() {
		$(".work_list").hide();
		$(".work_control").hide();
		$(".schedule").show();
		$(".links_system").removeClass("current");
		$(this).parent("li").addClass("current");
	});
	// 메인 일 select
	$(".tb_schedule td").click(function() {
		$(".tb_schedule td").removeClass("select_date");
		$(this).addClass("select_date");
	});
	$(".schedule_print").click(function(){
		pagePrint('print_cal');
	});
});

/*$(window).load(function(){
	// footer banner
	$('.bxslider').bxSlider({
		minSlides: 5,
		maxSlides: 5,
		slideWidth: 100,
		slideMargin: 15,
		auto: true,
		autoControls: false,
		autoControlsCombine:true,
		pager:false
	});
});*/

function pagePrint(Obj) {
	var features = "menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,width=" + 1100 + ",height=" + 700 + ",left=0,top=0";
	var PrintPage = window.open("/html/print_pop.html","print_pop",features);
}






/////////////////////////////////////// 이하 개발자가 추가 생성 ////////////////////////////////////////

//공통 팝업창닫기
function fn_close(){
	self.opener = self;
	self.close();
}

//공통 페이지처리
function fn_page(paging_div_class, ctx){
	if(!paging_div_class)
	{
		paging_div_class = "j_page_div";
	}
	if(ctx == null){
		ctx = "";
	}
	$("."+paging_div_class).each(function(){
		var now = Number($(this).find("input[name='j_now']").val());
		var tot = Number($(this).find("input[name='J_tot']").val());
		var row = Number($(this).find("input[name='j_row']").val());
		var page = Number($(this).find("input[name='j_page']").val());
		var event = $(this).find("input[name='j_event']").val();

		/*console.log("now : " + now);
		console.log("tot : " + tot);
		console.log("row : " + row);
		console.log("page : " + page);
		console.log("event : " + event); */

		if(tot > 0){
			if(now == ""){
				now = 1;
			}

			var pageCount = Math.ceil(tot/row);
			if( now > pageCount){
				now = pageCount;
			}

//			var start = (now - 1) * row + 1;
//			var end = now * row;
//
//			var number = tot - (now - 1) * row;

			var startPage = Math.floor(now/page) *  page +  1;

			if(now%page == 0) {
				startPage -= page;
			}

			var endPage = startPage + page - 1;

			if(endPage > pageCount){
				endPage = pageCount;
			}


			var str = "<div class='paging'>";
			str += "<span class='paging_btn'>";

			if( 1 < now){
				str += "<a href='javascript:" + event + "(" + 1 + ")' class='fst' title='처음'><em class='blind'>맨앞</em></a>";
				str += "<a href='javascript:" + event + "(" + (now - 1) + ")'  class='prev' title='이전'><em class='blind'>앞</em></a>";
			} else {
				//맨앞일때 표시 영역
				str += "<a href='#' onclick=\"alert('맨앞입니다.'); return false;\" class='fst' title='처음'>처음</a>";
				str += "<a href='#' onclick=\"alert('맨앞입니다.'); return false;\" class='prev' title='이전'>이전</a>";
			}
			str += "</span>";
			str += "<span class='paging_num'>";
			for(var i = startPage; i <= endPage; i++){
				if(i == now){
					str += "<a class='current' href='javascript:" + event + "(" + i + ")' >" + i + "</a>";
				} else {
					str += "<a href='javascript:" + event + "(" + i + ")'>" + i + "</a>";
				}
			}
			str += "</span>";
			str += "<span class='paging_btn'>";

//			if(endPage < pageCount){
			if(now < endPage){
//				str += "<a href='javascript:"+ event + "(" + (endPage + 1) + ")' class='next' title='뒤목록'><em class='blind'>뒤</em></a>";
//				str += "<a href='javascript:"+ event + "(" + pageCount + ")' class='last' title='맨뒤목록'><em class='blind'>맨뒤</em></a>";
				str += "<a href='javascript:"+ event + "(" + (now + 1) + ")' class='next' title='다음'><em class='blind'>다음</em></a>";
				str += "<a href='javascript:"+ event + "(" + pageCount + ")' class='last' title='끝'><em class='blind'>끝</em></a>";
			} else {
				//맨뒤일때 표시 영역
				str += "<a href='#' onclick=\"alert('맨뒤입니다.'); return false;\" class='next' title='다음'>다음</a>";
				str += "<a href='#' onclick=\"alert('맨뒤입니다.'); return false;\" class='last' title='끝'>끝</a>";
			}
			str += "</span>";
			str += "</div>";

			$(this).html(str);

		}
	});
}