(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GraphicExample");
            this.set_titletext("GraphicExample");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Graphic("Graphic00","19","27","469","464",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("Button00","576","80","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("선 그리기");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","576","27","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("모두 지우기");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","576","136","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("패스 그리기");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","576","184","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사각형 그리기");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","576","232","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사각형 채우기");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","576","280","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("둥근 사각형 그리기");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","576","328","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("둥근 사각형 채우기");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","576","376","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("원 그리기");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","576","424","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("원 채우기");
            this.addChild(obj.name, obj);

            obj = new Button("Button09","800","136","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("text 그리기");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","800","192","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("actor 모양 그리기");
            this.addChild(obj.name, obj);

            obj = new Button("Button11","800","248","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("연결선 그리기");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","781","348","195","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("actor에 drag 이벤트 처리");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","781","304","195","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("actor에 click 이벤트 연결 처리");
            this.addChild(obj.name, obj);

            obj = new Button("Button14","576","480","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("transform 적용하기");
            this.addChild(obj.name, obj);

            obj = new Button("Button15","795","32","188","48",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("image 그리기");
            this.addChild(obj.name, obj);

            obj = new Button("Button16","795","92","199","36",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("original image Size");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Sample02.xfdl", function() {
        var graphic = this.Graphic00;

        this.Button01_onclick = function (obj, e)
        {
        	var layer = graphic.getChildByIndex(0);
        	layer.removeChildren();
        	graphic.invalidate();
        };

        this.Button00_onclick = function (obj, e)
        {
        	var layer = graphic.getChildByIndex(0);
        	var line = new Eco.GraphicLine();
        	line.setStrokepen("1 solid #ff0000");

        	line.setX1(25);
        	line.setY1(5);
        	line.setX2(25);
        	line.setY2(5 + 40);
        	layer.addChild(line);
        	graphic.invalidate();
        };


        this.Button02_onclick = function (obj, e)
        {
        	var layer = graphic.getChildByIndex(0);
        	var path = new Eco.GraphicPath();
        	path.setStrokepen("1 solid #ff0000");

        	path.moveTo(55, 5);
        	path.lineTo(55 + 30, 5 + 5);
        	path.lineTo(55 + 10, 5 + 20);
        	path.lineTo(55 + 40, 5 + 25);
        	path.lineTo(55, 5 + 40);

        	layer.addChild(path);
        	graphic.invalidate();
        };

        this.Button03_onclick = function (obj, e)
        {
        	var layer = graphic.getChildByIndex(0);
        	var rect = new Eco.GraphicRect(5, 50, 40, 40);
        	rect.setStrokepen("1 solid #0000ff");

        	layer.addChild(rect);
        	graphic.invalidate();
        };

        this.Button04_onclick = function (obj, e)
        {
        	var layer = graphic.getChildByIndex(0);
        	var rect = new Eco.GraphicRect(55, 50, 40, 40);
        	rect.setFillbrush("solid #0000ff");

        	layer.addChild(rect);
        	graphic.invalidate();
        };

        this.Button05_onclick = function (obj, e)
        {
        	var layer = graphic.getChildByIndex(0);
        	var roundRect = new Eco.GraphicRect(5, 100, 40, 40, 10, 10);
        	roundRect.setStrokepen("1 solid #00ff00");

        	layer.addChild(roundRect);
        	graphic.invalidate();
        };

        this.Button06_onclick = function (obj, e)
        {
        	var layer = graphic.getChildByIndex(0);
        	var roundRect = new Eco.GraphicRect(55, 100, 40, 40, 10, 10);
        	roundRect.setFillbrush("solid #00ff00");

        	layer.addChild(roundRect);
        	graphic.invalidate();
        };

        this.Button07_onclick = function (obj, e)
        {
        	var layer = graphic.getChildByIndex(0);
        	var circle = new Eco.GraphicEllipse(25, 170, 40, 40);
        	circle.setStrokepen("1 solid #000000");

        	layer.addChild(circle);
        	graphic.invalidate();
        };

        this.Button08_onclick = function (obj, e)
        {
        	var layer = graphic.getChildByIndex(0);
        	var circle = new Eco.GraphicEllipse(75, 170, 40, 40);
        	circle.setFillbrush("solid #000000");

        	layer.addChild(circle);
        	graphic.invalidate();
        };


        this.Button14_onclick = function (obj, e)
        {
        	var layer = graphic.getChildByIndex(0);
        	var rect = new Eco.GraphicRect(75, 215, 100, 100);
        	rect.setStrokepen("1 solid #00000033");
        	rect.setFillbrush("solid #0086b233");
        	layer.addChild(rect);

        	rect = new Eco.GraphicRect(75, 215, 100, 100);
        	rect.setStrokepen("1 solid #000000");
        	rect.setFillbrush("solid #0086b2");
        	rect.setTransform("translate(30),rotate(45,75,215)");
        	layer.addChild(rect);

        	var text = new Eco.GraphicText(85, 270, "Hello nexacro!");
        	text.setFont("Verdana,-10,bold");
        	text.setFillbrush("solid black");
        	text.setTransform("translate(30),rotate(45,75,215)");
        	layer.addChild(text);

        	graphic.invalidate();
        };


        this.Button09_onclick = function (obj, e)
        {
        	var layer = graphic.getChildByIndex(0);

        	var paths = new Eco.GraphicPaths();

        	paths.setPathData("M160,15 L160,110 M130,40 L190,40 M130,75 L190,75 M130,110 L190,110");
        	paths.setStrokepen("1 solid grey");
        	layer.addChild(paths);

        	var text = new Eco.GraphicText(160, 40, "A");
        	text.setFont("Verdana,-36,bold");
        	text.setFillbrush("solid black");
        	layer.addChild(text);

        	text = new Eco.GraphicText(160, 75, "A");
        	text.setFont("Verdana,-36,bold");
        	text.setFillbrush("solid green");
        	text.setHalign("center");
        	// text.setValign("top");
        	// text.setDx(4);
        	// text.setDy(-4);
        	layer.addChild(text);

        	text = new Eco.GraphicText(160, 110, "A");
        	text.setFont("Verdana,-36,bold");
        	text.setFillbrush("solid black");
        	text.setHalign("right");
        	layer.addChild(text);

        	text = new Eco.GraphicText(220, 150, "Hello-World!");
        	text.setFont("Verdana,-36,bold");
        	text.setFillbrush("solid black");
        	text.setHalign("center");
        	text.setValign("middle");
        	text.setTransform("rotate(-90,220,150)");
        	layer.addChild(text);

        	var circle = new Eco.GraphicEllipse();
        	circle.setSize(6, 6);
        	circle.setCenter(160, 40);
        	circle.setFillbrush("solid red");
        	layer.addChild(circle);

        	circle = new Eco.GraphicEllipse();
        	circle.setSize(6, 6);
        	circle.setCenter(160, 75);
        	circle.setFillbrush("solid red");
        	layer.addChild(circle);

        	circle = new Eco.GraphicEllipse();
        	circle.setSize(6, 6);
        	circle.setCenter(160, 110);
        	circle.setFillbrush("solid red");
        	layer.addChild(circle);

        	graphic.invalidate();
        };


        this.Button10_onclick = function (obj, e)
        {
        	var layer = graphic.getChildByIndex(0);

        	var actor1 = makeActor(270, 5, 50, 80, "1 solid blue");
        	actor1.setId("actor1");
        	actor1.setFillbrush("solid coral");
        	layer.addChild(actor1);

        	var actor2 = makeActor(5, 350, 50, 80, "1 solid blue");
        	actor2.setId("actor2");
        	actor2.setFillbrush("solid chartreuse");
        	layer.addChild(actor2);

        	graphic.invalidate();
        };

        this.Button11_onclick = function (obj, e)
        {
        	var layer = graphic.getChildByIndex(0);
        	var actor1 = graphic.getElementById("actor1");
        	var actor2 = graphic.getElementById("actor2");
        	if (actor1 && actor2)
        	{
        		var startPt = actor1.getGlobalBounds().getRightCenter();
        		var endPt = actor2.getGlobalBounds().getTopCenter();

        		var pts = [];
        		pts.push(startPt);
        		pts.push(new Eco.Point(startPt.x + 40, startPt.y));
        		pts.push(new Eco.Point(startPt.x + 40, endPt.y - 40));
        		pts.push(new Eco.Point(endPt.x, endPt.y - 40));
        		pts.push(endPt);
        		var connector = graphic.getElementById("connector");
        		if (!connector)
        		{
        			connector = makeConnector(pts, "1 solid red", false, true, true);
        			connector.setId("connector");
        			layer.addChild(connector);
        		}
        		else
        		{
        			updateConnector(connector, pts, false, true, true);
        		}
        		graphic.invalidate();
        	}
        };


        this.Button13_onclick = function (obj, e)
        {
        	var actor1 = graphic.getElementById("actor1");
        	var actor2 = graphic.getElementById("actor2");
        	if (actor1 && actor2)
        	{
        		actor1.behavior = "";
        		actor2.behavior = "";
        		actor1.setCursor("hand");
        		actor2.setCursor("hand");
        		actor1.addEventHandler("onclick", actor_click);
        		actor2.addEventHandler("onclick", actor_click);
        	}
        };

        this.Button12_onclick = function (obj, e)
        {
        	var actor1 = graphic.getElementById("actor1");
        	var actor2 = graphic.getElementById("actor2");
        	if (actor1 && actor2)
        	{
        		actor1.clearEventHandler("onclick");
        		actor2.clearEventHandler("onclick");
        		actor1.behavior = "drag";
        		actor2.behavior = "drag";
        		actor1.setCursor("hand");
        		actor2.setCursor("hand");
        		actor1.addEventHandler("ondragstart", actor_dragstart);
        		actor1.addEventHandler("ondrag", actor_drag);
        		actor2.addEventHandler("ondragstart", actor_dragstart);
        		actor2.addEventHandler("ondrag", actor_drag);
        	}
        };

        function actor_click (obj, e)
        {
        	alert(obj.getId() + " clicked !!");
        }

        var startX;
        var startY;

        function actor_dragstart (obj, e)
        {
        	var bounds = obj.getGlobalBounds(),centerPt = bounds.getCenter();
        	startX = centerPt.x;
        	startY = centerPt.y;
        	return true;
        }

        function actor_drag (obj, e)
        {
        	obj.setCx(startX + e.distanceX);
        	obj.setCy(startY + e.distanceY);
        	graphic.invalidate();
        }

        function makeActor (x, y, w, h, strokepen)
        {
        	var actor = new Eco.GraphicPath(x, y);
        	actor.setStrokepen(strokepen);
        	var strokewidth = actor.getStrokeWidth();

        	x = 1;
        	y = 1;
        	w = w - strokewidth * 2;
        	h = h - strokewidth * 2;
        	var width = w / 3;
        	var x0,y0,x1,y1,x2,y2;
        	x2 = x;
        	y2 = h;

        	actor.moveTo(x2, y2);

        	x0 = x;
        	x1 = x;
        	x2 = w / 2;

        	y0 = 3 * h / 5;
        	y1 = 2 * h / 5;
        	y2 = 2 * h / 5;
        	actor.cubicCurveTo(x0, y0, x1, y1, x2, y2);
        	// arr[0] = [{x:x, y:h}, {x:x, y:(3 * h / 5)}, {x:x, y:(2 * h / 5)}, {x:(w / 2), y:(2 * h / 5)}];

        	x2 = w / 2;
        	y2 = 2 * h / 5;

        	x0 = (w / 2 - width);
        	x1 = (w / 2 - width);
        	x2 = (w / 2);

        	y0 = (2 * h / 5);
        	y1 = y;
        	y2 = y;
        	actor.cubicCurveTo(x0, y0, x1, y1, x2, y2);

        	x2 = (w / 2);
        	y2 = y;

        	x0 = (w / 2 + width);
        	x1 = (w / 2 + width);
        	x2 = (w / 2);

        	y0 = y;
        	y1 = (2 * h / 5);
        	y2 = (2 * h / 5);

        	actor.cubicCurveTo(x0, y0, x1, y1, x2, y2);

        	x2 = (w / 2);
        	y2 = (2 * h / 5);

        	x0 = w;
        	x1 = w;
        	x2 = w;

        	y0 = (2 * h / 5);
        	y1 = (3 * h / 5);
        	y2 = h;

        	actor.cubicCurveTo(x0, y0, x1, y1, x2, y2);
        	actor.closePath();
        	return actor;
        }

        function makeConnector (pts, strokepen, isRounded, start, end)
        {
        	var paths = new Eco.GraphicPaths();
        	paths.setStrokepen(strokepen);
        	updateConnector(paths, pts, isRounded, start, end);
        	return paths;
        }

        function updateConnector (paths, pts, isRounded, start, end)
        {
        	var strokewidth = paths.getStrokeWidth();

        	paths.removeChildren();

        	var startOffset,endOffset;
        	if (start)
        	{
        		var p0 = pts[1];
        		var pe = pts[0];
        		var dx = pe.x - p0.x;
        		var dy = pe.y - p0.y;
        		var dist = Math.max(1, Math.sqrt(dx * dx + dy * dy));
        		var nx = dx / dist;
        		var ny = dy / dist;
        		startOffset = makeArrowClassic(paths, pe, nx, ny, strokewidth, 10);
        	}
        	if (end)
        	{
        		var n = pts.length;

        		var p0 = pts[n - 2];
        		var pe = pts[n - 1];
        		var dx = pe.x - p0.x;
        		var dy = pe.y - p0.y;
        		var dist = Math.max(1, Math.sqrt(dx * dx + dy * dy));
        		var nx = dx / dist;
        		var ny = dy / dist;
        		endOffset = makeArrowClassic(paths, pe, nx, ny, strokewidth, 10);
        	}
        	var p0 = pts[0];
        	if (startOffset)
        	{
        		p0 = p0.clone();
        		p0.x += startOffset.x;
        		p0.y += startOffset.y;
        	}
        	paths.moveTo(p0.x, p0.y);
        	for (var i = 1; i < pts.length; i++)
        	{
        		p0 = pts[i - 1];
        		var pt = pts[i];

        		if (isNaN(pt.x) || isNaN(pt.y))
        		{
        			return null;
        		}

        		if (i == pts.length - 1 && endOffset != null)
        		{
        			pt = pt.clone();
        			pt.x += endOffset.x;
        			pt.y += endOffset.y;
        		}

        		var dx = p0.x - pt.x;
        		var dy = p0.y - pt.y;

        		if ((isRounded && i < pts.length - 1) &&
        			(dx != 0 || dy != 0))
        		{
        			// Draws a line from the last point to the current point with a spacing
        			// of size off the current point into direction of the last point
        			var dist = Math.sqrt(dx * dx + dy * dy);
        			var nx1 = dx * Math.min(size, dist / 2) / dist;
        			var ny1 = dy * Math.min(size, dist / 2) / dist;
        			paths.lineTo(Math.round(pt.x + nx1), Math.round(pt.y + ny1));

        			// Draws a curve from the last point to the current point with a spacing
        			// of size off the current point into direction of the next point
        			var pe = pts[i + 1];
        			dx = pe.x - pt.x;
        			dy = pe.y - pt.y;

        			dist = Math.max(1, Math.sqrt(dx * dx + dy * dy));

        			if (dist != 0)
        			{
        				var nx2 = dx * Math.min(size, dist / 2) / dist;
        				var ny2 = dy * Math.min(size, dist / 2) / dist;
        				paths.cubicCurveTo(pt.x, pt.y, pt.x, pt.y, Math.round(pt.x + nx2), Math.round(pt.y + ny2));
        			}
        		}
        		else
        		{
        			paths.lineTo(pt.x, pt.y);
        		}
        	}
        }

        function makeArrowClassic (paths, pe, nx, ny, strokeWidth, size)
        {
        	// The angle of the forward facing arrow sides against the x axis is
        	// 26.565 degrees, 1/sin(26.565) = 2.236 / 2 = 1.118 ( / 2 allows for
        	// only half the strokewidth is processed ).
        	var endOffsetX = nx * strokeWidth * 1.118;
        	var endOffsetY = ny * strokeWidth * 1.118;
        	pe.x -= endOffsetX;
        	pe.y -= endOffsetY;

        	nx = nx * (size + strokeWidth);
        	ny = ny * (size + strokeWidth);
        	paths.moveTo(pe.x, pe.y);
        	paths.lineTo((pe.x - nx - ny / 2), (pe.y - ny + nx / 2));
        	paths.lineTo((pe.x - nx * 3 / 4), (pe.y - ny * 3 / 4));
        	paths.lineTo((pe.x + ny / 2 - nx), (pe.y - ny - nx / 2));
        	paths.closePath();
        	var f = 3 / 4;
        	return new Eco.Point(-nx * f - endOffsetX, -ny * f - endOffsetY);
        }

        this.Button15_onclick = function (obj, e)
        {
        	var layer = graphic.getChildByIndex(0);
        	var img = new Eco.GraphicImage(5, 200);
        	img.setSrc("Images::bike.png");
        	// img.setWidth(10);
        	// img.setHeight(10);
        	layer.addChild(img);
        	graphic.invalidate();
        };

        this.Button16_onclick = function (obj, e)
        {
        	var layer = graphic.getChildByIndex(0);
        	var img = layer.getElementsByTagName("Image")[0];

        	var orgSize = img.getOriginalImageSize();
        	trace(orgSize[0] + "," + orgSize[1]);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
            this.Button07.addEventHandler("onclick",this.Button07_onclick,this);
            this.Button08.addEventHandler("onclick",this.Button08_onclick,this);
            this.Button09.addEventHandler("onclick",this.Button09_onclick,this);
            this.Button10.addEventHandler("onclick",this.Button10_onclick,this);
            this.Button11.addEventHandler("onclick",this.Button11_onclick,this);
            this.Button12.addEventHandler("onclick",this.Button12_onclick,this);
            this.Button13.addEventHandler("onclick",this.Button13_onclick,this);
            this.Button14.addEventHandler("onclick",this.Button14_onclick,this);
            this.Button15.addEventHandler("onclick",this.Button15_onclick,this);
            this.Button16.addEventHandler("onclick",this.Button16_onclick,this);
        };
        this.loadIncludeScript("Sample02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
