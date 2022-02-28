//F5, 백스페이스, Ctrl+R, Ctrl+N 키 페이지 초기화 방지 - start
if (typeof window.event != 'undefined')
{
	document.onkeydown = function()
	{
		if((event.ctrlKey == true && (event.keyCode==78 || event.keyCode == 82)) || (event.keyCode == 116) || (event.keyCode == 123))
		{
			event.keyCode = 0;
			event.cancelBubble = true;
			event.returnValue = false;
		}
	}
	/*
	document.oncontextmenu = function(e)	//마우스 우클릭 차단
    {
        	event.keyCode=0;
        	event.returnValue = false;
    }
    */

} else {
	window.onkeydown = function(e)
	{
		if((e.ctrlKey == true && (e.keyCode==78 || e.keyCode == 82)) || (e.keyCode == 116) || (e.keyCode == 123))
		{
			return false;
		}
	}
	/*
	window.oncontextmenu = function(e)	//마우스 우클릭 차단
    {
		return false;
    }
    */
}
//F5, 백스페이스, Ctrl+R, Ctrl+N 키 페이지 초기화 방지 - end