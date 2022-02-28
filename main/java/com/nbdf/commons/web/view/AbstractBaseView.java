package com.nbdf.commons.web.view;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.view.AbstractView;

/**
 * @Class AbstractBaseView
 * @Description AbstractBaseView 클래스
 * @Modification
 * 
 * @author
 * @version 1.0
 * @see
 */
public abstract class AbstractBaseView extends AbstractView {

    public static final String MODEL_RESULT = "result";

    protected Logger logger = LoggerFactory.getLogger(getClass());

    protected String modelKey = MODEL_RESULT;

    /**
     * 모델키 가져오기
     * 
     * @return
     */
    public String getModelKey() {
        return modelKey;
    }

    /**
     * 모델키 설정하기
     * 
     * @param modelKey
     */
    public void setModelKey(String modelKey) {
        this.modelKey = modelKey;
    }

    /**
     * model 가져오기
     * 
     * @param model
     * @param key
     * @return
     */
    public Object getModel(Map<String, Object> model, String key) {
        return model.get(key);
    }

}
