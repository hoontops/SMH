package com.nbdf.commons.web.support;

import com.nbdf.commons.ui.UiConstant;
import com.nbdf.commons.ui.view.BigDataView;
import com.nbdf.commons.ui.view.UiView;
import com.nbdf.commons.ui.vo.UiMapDto;

import java.net.URL;
import java.util.Locale;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.MessageSource;
import org.springframework.context.NoSuchMessageException;
import org.springframework.ui.Model;
import org.springframework.web.servlet.View;

/**
 * @Class AbstractWebController
 * @Description 컨트롤러가 상속받는 추상클래스 <br />
 *              또한 AbstractWebController 를 상속받는 클래스는 Logger 클래스 선언 없이 protected로 선언된 logger를 사용할 수 있다.
 * @Modification
 *
 * @author
 * @version 1.0
 * @see
 *
 *      (c) Copyright Built1 2014. All rights reserved.
 */
public abstract class AbstractWebController {

    @Autowired
    protected MessageSource messageSource;

    @Autowired(required=false)
    @Qualifier("uiView")
    protected UiView uiView;
    
    @Autowired(required=false)
    @Qualifier("bigDataView")
    protected BigDataView bigDataView;

    @Autowired(required=false)
    @Qualifier("commonsProp")
    protected Properties commonsProp;

    @Autowired(required=false)
    @Qualifier("Props")
    protected Properties Props;

    @Autowired(required=false)
    @Qualifier("drmProps")
    protected Properties drmProps;

    /**
     * @Class AbstractComponent
     * @Description AbstractComponent 를 상속받는 클래스는 Logger 클래스 선언 없이 protected로 선언된 logger를 사용할 수 있다.
     */
    protected Logger logger = LoggerFactory.getLogger(this.getClass());

    /**
     * <code>code</code>를 이용하여 프로퍼티로부터 메세지 가져오기
     *
     * @param code
     *            코드
     * @return 문자열
     */
    public final String getMessage(String code) {
        return getMessage(code, null, Locale.getDefault());
    }

    /**
     * Try to resolve the message. Treat as an error if the message can't be found.
     *
     * @param code
     *            the code to lookup up, such as 'calculator.noRateSet'
     * @param args
     *            Array of arguments that will be filled in for params within the message (params look like "{0}", "{1,date}", "{2,time}" within a message), or {@code null} if
     *            none.
     * @return the resolved message
     * @throws NoSuchMessageException
     *             if the message wasn't found
     * @see java.text.MessageFormat
     */
    public String getMessage(String code, Object[] args) {
        return getMessage(code, args, code, Locale.getDefault());
    }

    /**
     * 로케일에 해당하는 메세지 가져오기
     *
     * @param code
     * @param args
     * @param locale
     * @return
     */
    public final String getMessage(String code, Object[] args, Locale locale) {
        return getMessage(code, args, code, locale);
    }

    /**
     * Try to resolve the message. Return default message if no message was found.
     *
     * @param code
     *            the code to lookup up, such as 'calculator.noRateSet'. Users of this class are encouraged to base message names on the relevant fully qualified class name, thus
     *            avoiding conflict and ensuring maximum clarity.
     * @param args
     *            array of arguments that will be filled in for params within the message (params look like "{0}", "{1,date}", "{2,time}" within a message), or {@code null} if
     *            none.
     * @param defaultMessage
     *            String to return if the lookup fails
     * @param locale
     *            the Locale in which to do the lookup
     * @return the resolved message if the lookup was successful; otherwise the default message passed as a parameter
     * @see java.text.MessageFormat
     */
    public final String getMessage(String code, Object[] args, String defaultMessage, Locale locale) {
        return messageSource.getMessage(code, args, defaultMessage, locale);
    }

    /**
     * 다음페이지를 uri로 redirect 시키기
     *
     * @param uri
     * @return
     */
    protected String redirectPage(String uri) {
        return redirectPage(uri, getUriPathExtension());
    }

    /**
     * 다음페이지를 uri + ext 로 redirect 시키기
     *
     * @param uri
     * @param ext
     * @return
     */
    protected String redirectPage(String uri, String ext) {
        if (uri != null && uri.endsWith(ext))
            ext = "";
        return "redirect:" + uri + ext;
    }

    /**
     * 다음페이지를 uri로 forward 시키기
     *
     * @param uri
     * @return
     */
    protected String forwardPage(String uri) {
        return redirectPage(uri, getUriPathExtension());
    }

    /**
     * 다음페이지를 uri + ext 로 forward 시키기
     *
     * @param uri
     * @param ext
     * @return
     */
    protected String forwardPage(String uri, String ext) {
        if (uri != null && uri.endsWith(ext))
            ext = "";
        return "forward:" + uri + ext;
    }

    /**
     * model에 객체 추가하기
     *
     * @param model
     * @param clazz
     * @throws Exception
     */
    protected <T> void attachModel(Model model, Class<T> clazz) throws Exception {
        attachModel(model, clazz, null);
    }

    /**
     * model에 객체 추가하기
     *
     * @param model
     * @param clazz
     * @param key
     * @throws Exception
     */
    protected <T> void attachModel(Model model, Class<T> clazz, String key) throws Exception {
        if (key == null || "".equals(key))
            key = "form";
        if (!model.containsAttribute(key)) {
            model.addAttribute(key, clazz.newInstance());
        }
    }

    /**
     * uri 의 확장자
     *
     * @return
     */
    protected String getUriPathExtension() {
        return ".do";
    }

    public String getProperty(String key) {
        return commonsProp.getProperty(key);
    }

    public String getPropertyPros(String key) {
        return Props.getProperty(key);
    }

    public String getPropertyDrmPros(String key) {
        return drmProps.getProperty(key);
    }

    public String getPropertiesFilePath(String propertieFileName) {
        String propertiesPath = "";
        ClassLoader cl = Thread.currentThread().getContextClassLoader();
        URL url = cl.getResource("properties/"+propertieFileName);
        if(url != null){
            propertiesPath = url.getPath();
        }
        return propertiesPath;
    }

    /**
    * @fn : getServerMode
    * @brief : SERVER_MODE를 통해 시스템 명을 전달
    * @Method Name : getSystemNm
    * @Create Date: 2015. 6. 16. 오후 5:23:43
    * @Author: JIn Sung Ha
    * @param: null
    * @return: String
    * @throws : Exception
    */
    public String getServerMode() {
        return System.getProperty("SERVER_MODE", "local");
    }

    protected View apply(UiMapDto dto, Model model) throws Exception {
        model.addAttribute(UiConstant.OUT_VARIABLES_ATT_NAME, dto.getOutVariableMap());
        model.addAttribute(UiConstant.OUT_DATASET_ATT_NAME, dto.getOutDataSetMap());
        logger.debug("UiConstant.OUT_VARIABLES_ATT_NAME-->"+UiConstant.OUT_VARIABLES_ATT_NAME);
        logger.debug("UiConstant.OUT_DATASET_ATT_NAME-->"+UiConstant.OUT_DATASET_ATT_NAME);
        logger.debug("dto.getOutVariableMap()-->"+dto.getOutVariableMap());
        logger.debug("dto.getOutDataSetMap()-->"+dto.getOutDataSetMap());
        return uiView;
    }
    
    //add for bigdata excel
    protected View bigDataApply(UiMapDto dto, Model model) throws Exception {
        model.addAttribute(UiConstant.OUT_VARIABLES_ATT_NAME, dto.getOutVariableMap());
        model.addAttribute(UiConstant.OUT_DATASET_ATT_NAME, dto.getOutDataSetMap());
        logger.debug("UiConstant.OUT_VARIABLES_ATT_NAME-->"+UiConstant.OUT_VARIABLES_ATT_NAME);
        logger.debug("UiConstant.OUT_DATASET_ATT_NAME-->"+UiConstant.OUT_DATASET_ATT_NAME);
        logger.debug("dto.getOutVariableMap()-->"+dto.getOutVariableMap());
        logger.debug("dto.getOutDataSetMap()-->"+dto.getOutDataSetMap());
        return bigDataView;
    }

}
