package com.nbdf.commons.web.support;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.UiConstant;
import com.nbdf.commons.ui.view.UiView;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.ui.vo.UiObjectDto;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.ApplicationContextException;
import org.springframework.context.ApplicationEventPublisherAware;
import org.springframework.context.MessageSourceAware;
import org.springframework.context.ResourceLoaderAware;
import org.springframework.ui.Model;
import org.springframework.web.servlet.View;

/**
 * @Class AbstractXWebController
 * @Description 넥사크로를 사용하는 컨트롤러가 상속받는 추상클래스 <br />
 *              또한 AbstractXWebController 를 상속받는 클래스는 Logger 클래스 선언 없이 protected로 선언된 logger를 사용할 수 있다.
 * @Modification
 *
 * @author
 * @version 1.0
 * @see
 *
 *      (c) Copyright Built1 2014. All rights reserved.
 */
public abstract class AbstractXWebController extends AbstractWebController implements ApplicationContextAware {

    @Autowired
    protected UiView uiView;

    protected final String SERVICE = "service";

    protected final String METHOD = "method";

    protected ApplicationContext context;

    /**
     * Set the ApplicationContext that this object runs in. Normally this call will be used to initialize the object.
     * <p>
     * Invoked after population of normal bean properties but before an init callback such as {@link org.springframework.beans.factory.InitializingBean#afterPropertiesSet()} or a
     * custom init-method. Invoked after {@link ResourceLoaderAware#setResourceLoader}, {@link ApplicationEventPublisherAware#setApplicationEventPublisher} and
     * {@link MessageSourceAware}, if applicable.
     *
     * @param applicationContext
     *            the ApplicationContext object to be used by this object
     * @throws ApplicationContextException
     *             in case of context initialization errors
     * @throws BeansException
     *             if thrown by application context methods
     * @see org.springframework.beans.factory.BeanInitializationException
     * @see org.springframework.context.ApplicationContextAware#setApplicationContext(org.springframework.context.ApplicationContext)
     */
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.context = applicationContext;
    }

    /**
     * 이름을 이용하여 서비스 객체 가져오기
     *
     * @param name
     * @return
     * @throws BizException
     */
    public Object getServiceByName(String name) throws BizException {
        if (name == null || "".equals(name))
            throw new BizException("service name is empty");
        return context.getBean(name);
    }

    /**
     * Client 에서 받은 파라미터 정보에서 key 에 해당하는 정보를 추출하기
     *
     * @param dto
     *            UI 툴로부터 받은 파라미터 정보
     * @param key
     *            키
     * @return
     */
    public Object getVariable(UiMapDto dto, String key) {
        return dto.getVariable(key);
    }

    /**
     * Client 에서 받은 파라미터 정보에서 key 에 해당하는 정보를 추출하기
     *
     * @param dto
     *            UI 툴로부터 받은 파라미터 정보
     * @param key
     *            키
     * @return
     */
    public Object getVariable(UiObjectDto dto, String key) {
        return dto.getVariable(key);
    }

    /**
     * Client 로부터 받은 파라미터 정보에서 서비스이름을 이용하여 서비스 객체 가져오기
     *
     * @param dto
     *            Client 로부터 받은 파라미터 객체
     * @return
     * @throws BizException
     */
    protected Object getServiceByName(UiObjectDto dto) throws BizException {
        String name = (String) getVariable(dto, SERVICE);
        return getServiceByName(name);
    }

    /**
     * Client 로부터 받은 파라미터 정보에서 서비스이름을 이용하여 서비스 객체 가져오기
     *
     * @param dto
     *            Client 로부터 받은 파라미터 객체
     * @return
     * @throws BizException
     */
    protected Object getServiceByName(UiMapDto dto) throws BizException {
        String name = (String) getVariable(dto, SERVICE);
        if(name != null){
        	return getServiceByName(name);
        }
        return null;
    }

    /**
     * 객체에서 메소드이름으로 메소드 객체 가져오기
     *
     * @param bean
     * @param methodName
     * @return
     * @throws Exception
     */
    protected Method getMethod(Object bean, String methodName) throws NoSuchMethodError {
        Method[] methods = bean.getClass().getMethods();

        for (int i = 0, n = methods.length; methodName != null && i < n; i++) {
            if (methods[i].getName().equals(methodName)) {
                return methods[i];
            }
        }

        throw new NoSuchMethodError("Can not find name of the method [" + methodName + "]");
    }

    /**
     * 서비스 객체 수행하기
     *
     * @param dto
     * @param model
     * @throws Exception
     */
    protected View execute(UiMapDto dto, Model model) throws Exception {
        Object service = getServiceByName(dto);
        return this.execute(dto, model, service);
    }

    /**
     * 서비스 객체 수행하기
     *
     * @param dto
     * @param model
     * @param service
     * @throws Exception
     */
    protected View execute(UiMapDto dto, Model model, Object service) throws Exception {
        return this.execute(dto, model, service, null);
    }

    /**
     * 서비스 객체에서 메소드 이름에 해당하는 메소드 수행하기
     *
     * @param dto
     * @param model
     * @param service
     * @throws Exception
     */
    protected View execute(UiMapDto dto, Model model, Object service, String methodName){
        try {
            if (service == null) {
                throw new BizException("service is empty");
            }

            if (methodName == null) {
                methodName = (String) getVariable(dto, METHOD);
                
                if (methodName == null) {
                	throw new NoSuchMethodError("Method not found");
                }
            }

            Method method = getMethod(service, methodName);

            logger.debug("execute to service\n({}.java:1)#{}() - {}", new Object[] { service.getClass().getSimpleName(), method.getName(), dto });
            method.invoke(service, dto);

            model.addAttribute(UiConstant.OUT_VARIABLES_ATT_NAME, dto.getOutVariableMap());
            model.addAttribute(UiConstant.OUT_DATASET_ATT_NAME, dto.getOutDataSetMap());
        } catch (NoSuchMethodError | IllegalAccessException | InvocationTargetException e) {
            model.addAttribute(UiConstant.RESULT_CODE, "500");
            model.addAttribute(UiConstant.ERROR_MSG, e.getMessage());
            logger.error("failed : ", e);
        } 

        return uiView;
    }

}
