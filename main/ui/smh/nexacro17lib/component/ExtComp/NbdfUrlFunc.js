var efn_setUrl = function()
{
	
	return sUrl =	'<ColumnInfo> '+
					'	<Column id="RUN_MODE" type="STRING" size="256"/> '+
					'	<Column id="IFC" type="STRING" size="256"/> '+
					'	<Column id="REPORT" type="STRING" size="256"/> '+
					'	<Column id="MRDURL" type="STRING" size="256"/> '+
					'	<Column id="RDPARAM" type="STRING" size="256"/> '+
					' </ColumnInfo> '+
					'	<Rows> '+
					'		<Row> '+
					'			<Col id="RUN_MODE">local</Col>  '+
					'			<Col id="IFC">http://localhost:8080</Col> '+
					'			<Col id="REPORT">http://203.246.154.112:8283/ReportingServer</Col> '+
					'			<Col id="MRDURL">http://203.246.154.112:8283/ReportingServer</Col> '+
					'			<Col id="RDPARAM">/rwait /rprncenteropt [2] /riprnmargin /rregtrulocoffice</Col> '+
					'		</Row> '+
					'		<Row> '+
					'			<Col id="RUN_MODE">dev</Col> '+
					'			<Col id="IFC">http://localhost:8080</Col> '+
					'			<Col id="REPORT">http://203.246.154.112:8283/ReportingServer</Col> '+
					'			<Col id="MRDURL">http://203.246.154.112:8283/ReportingServer</Col> '+
					'			<Col id="RDPARAM">/rwait /rprncenteropt [2] /riprnmargin /rregtrulocoffice</Col> '+
					'		</Row> '+
					'		<Row> '+
					'			<Col id="RUN_MODE">prod</Col> '+
					'			<Col id="IFC">http://localhost:8080</Col> '+
					'			<Col id="REPORT">http://203.246.154.112:8283/ReportingServer</Col> '+
					'			<Col id="MRDURL">http://203.246.154.112:8283/ReportingServer</Col> '+
					'			<Col id="RDPARAM">/rwait /rprncenteropt [2] /riprnmargin /rregtrulocoffice</Col> '+
					'		</Row> '+
					'	</Rows>';
};

