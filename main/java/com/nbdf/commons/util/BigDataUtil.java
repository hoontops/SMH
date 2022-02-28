package com.nbdf.commons.util;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xeni.export.impl.*;


/**
* @file: BigDataUtil.java
* @Package: com.nbdf.commons.util
* @Project name: IFC MES시스템 구축
* @Type name: BigDataUtil
* @Company: Built1
* @Create Date: 2016. 1. 09. 오전 03:20:41
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2016. 1. 09.  진성하   최초 생성
 *   2016. 3. 30.  진성하  loop 안에서 선언 DataSetMap dsMap = new DataSetMap();
 *
*/
public class BigDataUtil extends AbstractNbdfService{

	protected static Logger logger = LoggerFactory.getLogger(BigDataUtil.class);

	private static Object pEnd =   "10000";

	public static GridExportExcel bigDataExporter(UiMapDto dto, String jobSysCd){
		DataSetList datasetList = dto.getDataSetList();
	    GridExportExcel exporter = new GridExportExcel();

	    exporter.receiveExportData(datasetList);
	    exporter.setExportFilePath(SessionUtil.getExportPath(), BizUtil.dnUrl(jobSysCd), true);
	    if (exporter.isLastExportData(datasetList)) {
	     	 exporter.createWorkbook();
	     	 return exporter;
	    }
	    return null;
	 }

	 public static void selectBigCellDown(UiMapDto dto, GeneralDao generalDao, String sql,  Map<String, Object> param , Object pCount ){
		 selectBigCellDown(dto, generalDao, sql,  param , pCount, pEnd);
	 }

	  public static void selectBigCellDown(UiMapDto dto, GeneralDao generalDao, String sql,  Map<String, Object> param , Object pCount, Object pEnd ){
		  List<Map<String, Object>> list = null;

		  Map<String, DataSetMap> outDataset = dto.getOutDataSetMap();

		  double totalRows     = Double.parseDouble(String.valueOf(pCount));
	      double rowsPerPage = Double.parseDouble(String.valueOf(pEnd));
	      int loopCount    =  (int) Math.ceil(totalRows/rowsPerPage);

	      logger.debug("##########################################");
	      logger.debug("          전체 데이터 갯수    ["+totalRows+"]");
	      logger.debug("          페이징당 데이터 수 ["+rowsPerPage+"]");
	      logger.debug("          반복횟수                ["+loopCount+"]");
	      logger.debug("##########################################");

	      for(int idx = 0; idx < loopCount; idx++) {
	          int startIndex = (int)(idx*rowsPerPage);
	          int endIndex  =  (int)((idx*rowsPerPage)+(int)rowsPerPage)-1;

	          param.put("P_START", startIndex);
	          param.put("P_END", endIndex);
	          list = generalDao.addSelect(true, sql, param);
	          DataSetMap dsMap = new DataSetMap();
	          dsMap.setRowMaps(list);
	          outDataset.put( "ds_result"+idx, dsMap);
	        }
		}
}
