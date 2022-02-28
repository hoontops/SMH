<%@ page language="java" contentType="text/html; charset=UTF-8" 
 pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="org.json.simple.JSONArray"%>
<%@page import="org.json.simple.parser.JSONParser"%>

<%
String arg = request.getParameter("arg");
System.out.println("arg : " + arg);


JSONParser jsonparser = new JSONParser();
JSONObject jsonObject = (JSONObject)jsonparser.parse(arg);
JSONArray jsonArray = (JSONArray) jsonObject.get("arg");

System.out.println("jsonsize : " + jsonArray.size());

String arg_year = "";

 for(int i=0; i<jsonArray.size(); i++){
	JSONObject jsonobj = (JSONObject)jsonArray.get(i);
	String yymm = (String)jsonobj.get("arg2");
//	System.out.println("print-yymm : " + yymm);
	
//	arg_year = yymm.substring(0, 4);
} 

 StringBuffer sb   =   new StringBuffer();

 
 sb.append("<chart labelDisplay='wrap' rotateYAxisName='0' showPrintMenuItem='0' PYAxisName='' SYAxisName=''  useRoundEdges='1'  canvasBgColor='FFFFFF,CCCCCC' showBorder='1' showLegend='1'  baseFontSize ='12' anchorRadius='6'  showValues='0' formatNumberScale='0'>");
 sb.append("<categories>");
 
 String arg_month;
 String yymm1 = "";
 
 for(int i=0; i<jsonArray.size(); i++){
		JSONObject jsonobj = (JSONObject)jsonArray.get(i);
		String yymm = (String)jsonobj.get("arg1");
		yymm1 = (String)jsonobj.get("arg5");
		
		arg_month = yymm;
		
		sb.append("<category label='" + arg_month + "월' />");
	}
 
 
 sb.append("</categories>");
 
 
 sb.append("<dataset seriesName='" + String.valueOf(Integer.parseInt(yymm1)-2) + "년' color='8BBA00'>");
 
  for(int i=0; i<jsonArray.size(); i++){
		JSONObject jsonobj = (JSONObject)jsonArray.get(i);
		
		String strYM = (String)jsonobj.get("arg1");
		String strPlanMonth = (String)jsonobj.get("arg2");
		String yymm = (String)jsonobj.get("arg5");
		
		
		sb.append("<set value='" + String.valueOf(Integer.parseInt(strPlanMonth)/1000) + "' toolText = '" + String.valueOf(Integer.parseInt(yymm)-2) + "년 {br}" + String.format("%,d", Integer.parseInt(strPlanMonth)/1000) + " 천㎥' link='javascript:Search2(&quot;" + strYM + "&quot;)' />");
	} 
 
 sb.append("</dataset>");
 
 sb.append("<dataset seriesName='" + String.valueOf(Integer.parseInt(yymm1)-1) + "년' >");
 
 for(int i=0; i<jsonArray.size(); i++){
		JSONObject jsonobj = (JSONObject)jsonArray.get(i);
		
		String strYM = (String)jsonobj.get("arg1");
		String strPlanMonth = (String)jsonobj.get("arg3");
		String yymm = (String)jsonobj.get("arg5");
		
		sb.append("<set value='" + String.valueOf(Integer.parseInt(strPlanMonth)/1000) + "' toolText = '" + String.valueOf(Integer.parseInt(yymm)-1) + "년 {br}" + String.format("%,d", Integer.parseInt(strPlanMonth)/1000) + " 천㎥' link='javascript:Search2(&quot;" + strYM + "&quot;)' />");
	} 

sb.append("</dataset>");

sb.append("<dataset seriesName='" + String.valueOf(Integer.parseInt(yymm1)) + "년' color='0358B5' >");

for(int i=0; i<jsonArray.size(); i++){
		JSONObject jsonobj = (JSONObject)jsonArray.get(i);
		
		String strYM = (String)jsonobj.get("arg1");
		String strPlanMonth = (String)jsonobj.get("arg4");
		String yymm = (String)jsonobj.get("arg5");
		
		sb.append("<set value='" + String.valueOf(Integer.parseInt(strPlanMonth)/1000) + "' toolText = '" + String.valueOf(Integer.parseInt(yymm)) + "년 {br}" + String.format("%,d", Integer.parseInt(strPlanMonth)/1000) + " 천㎥' link='javascript:Search2(&quot;" + strYM + "&quot;)' />");
	} 

sb.append("</dataset>");


  sb.append("<styles>");
 sb.append("<definition>");
 sb.append("<style name='myLabelsFont' type='font' size='11' color='666666' bold='1'/>");
 sb.append("<style name='myValueFont' type='font' size='11' color='FF0000' bold='0'/>");
 sb.append("<style name='myToolTipFont' type='font' size='11'/>");
 sb.append("</definition>");
 sb.append("<application>");
 sb.append("<apply toObject='DataLabels' styles='myLabelsFont' />");
 sb.append("<apply toObject='ToolTip' styles='myToolTipFont' />");
 sb.append("<apply toObject='DataValues' styles='myValueFont' />");
 sb.append("</application>");
 sb.append("</styles>"); 
 sb.append("</chart>");
 
 String xml = sb.toString();
 //xml = xml.replace("&", "and");
 //System.out.println("xml : " + xml);
%>
 <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
 <html>
 <head>
 <META http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
 <title>Daeryun ens</title>
<script src="./js/FusionCharts.js"></script>
 </head>
 <body>
 <div id="chart2div"></div>
 <script type="text/javascript">
	 <!--
	var chart1 = new FusionCharts("MSColumn3D.swf","Business", "960", "290");
	// var chart1 = new FusionCharts("Pie3D.swf", "식단", "700", "550", "0", "1");
	 chart1.setDataXML("<%=xml%>");    
     chart1.render("chart2div");
      //chart1.render();
     -->
 </script>

</body>
 </html>
