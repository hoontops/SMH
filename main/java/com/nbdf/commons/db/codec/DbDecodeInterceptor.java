package com.nbdf.commons.db.codec;

import com.nbdf.commons.ui.UiConstant;
import com.nbdf.commons.ui.util.UiUtil;
import com.nbdf.commons.ui.view.UiView;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.ui.vo.UiObjectDto;
import com.nbdf.commons.util.TxUtil;

import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StopWatch;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;
import com.nexacro17.xapi.tx.PlatformType;

public class DbDecodeInterceptor extends HandlerInterceptorAdapter {

	protected Logger logger = LoggerFactory.getLogger(getClass());


	@Override
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		return true;
	}

	public void postHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler, ModelAndView mav)
			throws Exception {
	}

	@Override
	public void afterCompletion(HttpServletRequest request,
			HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
        if (handler instanceof HandlerMethod == false)
			return;
		HandlerMethod hm = (HandlerMethod) handler;

		if (request.getAttribute("uiViewModel") == null)
			return;

		Map<String, Object> model = (Map<String, Object>) request.getAttribute("uiViewModel");
/*
		if (StringUtils.contains(this.decodeControllerMethod, (StringUtils.split(hm.getBean()
				.getClass().getSimpleName(), "$"))[0]
		+ "." + hm.getMethod().getName()))
			decode(model);
*/
		try {
			VariableList variableList = UiUtil.setVariableList(model);
			if (model.get(UiConstant.RESULT_CODE) == null) {
				variableList.add(UiConstant.ERROR_CODE, "0");
				variableList.add(UiConstant.ERROR_MSG, "");
			} else {
				variableList.add(UiConstant.ERROR_CODE,
						model.get(UiConstant.RESULT_CODE));
				variableList.add(UiConstant.ERROR_MSG,
						model.get(UiConstant.ERROR_MSG));
			}

			Class<?> dataSetType = (Class<?>) model
					.get(UiConstant.OUT_DATASET_TYPE);
			Object obj = model.get(UiConstant.OUT_DATASET_ATT_NAME);
			DataSetList datasetList = null;
			if (dataSetType == null
					|| UiMapDto.class.isAssignableFrom(obj.getClass())) {
				datasetList = new UiView().makeDataSetList(obj);
			} else if (DataSet.class.isAssignableFrom(obj.getClass())) {
				datasetList = new UiView().getDataSetList(model);
			} else if (UiObjectDto.class.isAssignableFrom(dataSetType)) {
				datasetList = new UiView().makeDataSetListByObject(obj);
			}

			PlatformData data = new PlatformData();
			data.setVariableList(variableList);
			data.setDataSetList(datasetList);

			HttpPlatformResponse httpPlatformResponse = new HttpPlatformResponse(
					response, PlatformType.CONTENT_TYPE_SSV, "UTF-8");
			httpPlatformResponse.setCharset(PlatformType.DEFAULT_CHAR_SET);
			httpPlatformResponse.setData(data);
			httpPlatformResponse.sendData();
		} catch (PlatformException e) {
			logger.error("Exception <{}>", e.getMessage(), e);
			throw e;
		}

        TxUtil.setEndTxLogId(logger);
    }
/*
	private void decode(Map<String, Object> model) {
		StopWatch stopWatch = new StopWatch("decode");
		stopWatch.start("decode");

		Map m = (Map) model.get(UiConstant.OUT_VARIABLES_ATT_NAME);
		if (m != null) {
			for (int i = 0; decodeTarget != null && i < decodeTarget.length; i++) {
				if (StringUtils.isEmpty((String) m.get(decodeTarget[i])))
					continue;
				// logger.debug("{}: {}=>{}", decodeTarget[i],
				// m.get(decodeTarget[i]), imcsDbEncoder.decode((String)
				// m.get(decodeTarget[i])));
				if (!decodeOption)
					continue;
				m.put(decodeTarget[i], imcsDbEncoder.decode((String) m
						.get(decodeTarget[i])));
			}
			for (int i = 0; decodeTarget13 != null
					&& i < decodeTarget13.length; i++) {
				if (StringUtils.isEmpty((String) m.get(decodeTarget13[i])))
					continue;
				// logger.debug("{}: {}=>{}", decodeTarget13[i],
				// m.get(decodeTarget13[i]), imcsDbEncoder13.decode((String)
				// m.get(decodeTarget13[i])));
				if (!decodeOption)
					continue;
				m.put(decodeTarget13[i], imcsDbEncoder13.decode((String) m
						.get(decodeTarget13[i])));
			}
		}
		m = (Map) model.get(UiConstant.OUT_DATASET_ATT_NAME);
		logger.debug("outDataSets:{}", m);
		if (m == null) {
			stopWatch.stop();
			logger.trace(stopWatch.shortSummary());
			return;
		}
		// logger.debug("{}", decodeTarget);
		Set keys = m.keySet();
		logger.debug("keys:{}", keys);
		for (Iterator i = keys.iterator(); i.hasNext();) {
			String key = (String) i.next();
			DataSetMap ds = (DataSetMap) m.get(key);
			logger.debug("DataSetMap:{}", ds);
			// for (int j = 0, n = ds.size(); j < n; j++) {
			for (Iterator j = ds.getRowMaps().iterator(); j.hasNext();) {
				Map row = (Map) j.next();
				// logger.debug("row:{}", row);
				for (int k = 0; decodeTarget != null
						&& k < decodeTarget.length; k++) {
					// logger.debug("{}", decodeTarget[k]);
					// logger.debug("{}", row.get(decodeTarget[k]));
					if (StringUtils.isEmpty((String) row
							.get(decodeTarget[k])))
						continue;
					if (!decodeOption)
						continue;
					row.put(decodeTarget[k], imcsDbEncoder
							.decode((String) row.get(decodeTarget[k])));
				}
				for (int k = 0; decodeTarget13 != null
						&& k < decodeTarget13.length; k++) {
					// logger.debug("{}", decodeTarget13[k]);
					// logger.debug("{}", row.get(decodeTarget13[k]));
					if (StringUtils.isEmpty((String) row
							.get(decodeTarget13[k])))
						continue;
					if (!decodeOption)
						continue;
					row.put(decodeTarget13[k], imcsDbEncoder13
							.decode((String) row.get(decodeTarget13[k])));
				}
			}
		}
		stopWatch.stop();
		logger.trace(stopWatch.shortSummary());
	}
*/
}
