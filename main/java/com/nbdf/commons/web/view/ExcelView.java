package com.nbdf.commons.web.view;

import com.nbdf.commons.vo.BaseVo;
import com.nbdf.commons.web.view.vo.ExcelViewVo;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFDataFormat;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.web.servlet.view.document.AbstractExcelView;

/**
 * @Class ExcelView
 * @Description ExcelView 클래스
 * @Modification
 * 
 * @author
 * @version 1.0
 * @see
 */
public class ExcelView extends AbstractExcelView {

    private static final String SIMPLE_FORMAT = "yyyy-MM-dd";

    private String modelKey;

    private String dateFormat;

    private String emptyMessage = "EMPTY EXCEL";

    /**
     * Subclasses must implement this method to create an Excel HSSFWorkbook document, given the model.
     * 
     * @param model
     *            the model Map
     * @param workbook
     *            the Excel workbook to complete
     * @param request
     *            in case we need locale etc. Shouldn't look at attributes.
     * @param response
     *            in case we need to set cookies. Shouldn't write to it.
     */
    @Override
    @SuppressWarnings("unchecked")
    protected void buildExcelDocument(Map<String, Object> model, HSSFWorkbook workbook, HttpServletRequest request, HttpServletResponse response) throws Exception {
        ExcelViewVo xlsViewVo = (ExcelViewVo) model.get(modelKey);
        if (xlsViewVo == null) {
            xlsViewVo = new ExcelViewVo();
        }
        String fileName = xlsViewVo.getFileName();
        response.setHeader("Content-Disposition", "attachment; filename=" + fileName);
        HSSFSheet sheet = workbook.createSheet(xlsViewVo.getSheetName());

        List<String> headers = xlsViewVo.getHeaders();
        List<String> keyList = xlsViewVo.getModelKey();
        // Headers
        for (int i = 0, n = headers.size(); i < n; i++) {
            HSSFCell cell = getCell(sheet, 0, i);
            setText(cell, headers.get(i));
        }

        List<?> entries = (List<?>) xlsViewVo.getEntries();
        Object tmp = entries != null && entries.size() > 0 ? entries.get(0) : null;
        HSSFCellStyle style = getDateStyle(workbook);
        if (tmp instanceof Map) {
            List<Map<String, Object>> list = (List<Map<String, Object>>) entries;
            makeEntryMap(sheet, style, headers, keyList, list);
        } else if (tmp != null) {
            List<BaseVo> list = (List<BaseVo>) entries;
            makeEntryVo(sheet, style, headers, keyList, list);
        } else {
            HSSFCell cell = getCell(sheet, 1, 0);
            setText(cell, emptyMessage);
        }
    }

    /**
     * 모델키 설정
     * 
     * @param modelKey
     */
    public void setModelKey(String modelKey) {
        this.modelKey = modelKey;
    }

    /**
     * 데이트포맷 설정
     * 
     * @param dateFormat
     */
    public void setDateFormat(String dateFormat) {
        this.dateFormat = dateFormat;
    }

    private void makeEntryVo(HSSFSheet sheet, HSSFCellStyle dateStyle, List<String> headers, List<String> modelKey, List<BaseVo> list) throws Exception {
        for (int i = 1, n = list.size(); i <= n; i++) {
            BaseVo data = list.get(i - 1);
            for (int j = 0; j < headers.size(); j++) {
                String key = StringUtils.capitalize(modelKey.get(j));
                Object v = data.getClass().getMethod("get" + key, null).invoke(data, null);
                addCell(sheet, dateStyle, i, j, v);
            }
        }
    }

    private void makeEntryMap(HSSFSheet sheet, HSSFCellStyle dateStyle, List<String> headers, List<String> modelKey, List<Map<String, Object>> list) {
        for (int i = 1, n = list.size(); i <= n; i++) {
            Map<String, Object> data = list.get(i - 1);
            for (int j = 0; j < headers.size(); j++) {
                Object v = data.get(modelKey.get(j));
                addCell(sheet, dateStyle, i, j, v);
            }
        }
    }

    private final void addCell(HSSFSheet sheet, HSSFCellStyle dateStyle, int i, int j, Object v) {
        HSSFCell cell = getCell(sheet, i, j);
        if (v instanceof Integer) {
            cell.setCellValue((Integer) v);
            cell.setCellType(HSSFCell.CELL_TYPE_NUMERIC);
        } else if (v instanceof Double) {
            cell.setCellValue((Double) v);
            cell.setCellType(HSSFCell.CELL_TYPE_NUMERIC);
        } else if (v instanceof Date) {
            cell.setCellValue((Date) v);
            cell.setCellType(HSSFCell.CELL_TYPE_NUMERIC);
            cell.setCellStyle(dateStyle);
        } else {
            setText(cell, (String) v);
        }
    }

    private final HSSFCellStyle getDateStyle(HSSFWorkbook workbook) {
        HSSFCellStyle style = workbook.createCellStyle();
        HSSFDataFormat dataFormat = workbook.createDataFormat();
        if (dateFormat == null) {
            dateFormat = SIMPLE_FORMAT;
        }
        short styleDateFormat = dataFormat.getFormat(dateFormat);
        style.setDataFormat(styleDateFormat);
        return style;
    }

}
