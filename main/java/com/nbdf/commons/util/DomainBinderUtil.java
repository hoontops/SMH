package com.nbdf.commons.util;

import java.util.Map;

import org.springframework.beans.MutablePropertyValues;
import org.springframework.web.bind.WebDataBinder;

/**
 * @Class DomainBinderUtil
 * @Description Special DataBinder for data binding from web request parameters to JavaBean objects. Designed for web environments, but not dependent on the Servlet API; serves as
 *              base class for more specific DataBinder variants, such as org.springframework.web.bind.ServletRequestDataBinder.
 * 
 *              Includes support for field markers which address a common problem with HTML checkboxes and select options: detecting that a field was part of the form, but did not
 *              generate a request parameter because it was empty. A field marker allows to detect that state and reset the corresponding bean property accordingly. Default values,
 *              for parameters that are otherwise not present, can specify a value for the field other then empty.
 * 
 * 
 * @Modification
 * 
 * @author
 * @version 1.0
 * @see
 */
public class DomainBinderUtil extends WebDataBinder {

    public DomainBinderUtil(Object target) {
        super(target);
    }

    public DomainBinderUtil(Object target, String objectName) {
        super(target, objectName);
    }

    public void doBind(MutablePropertyValues mpvs) {
        checkFieldMarkers(mpvs);
        super.doBind(mpvs);
    }

    public void getMapToObj(Map<Object, Object> map) {
        Object[] keyArr = map.keySet().toArray();
        MutablePropertyValues mpvs = new MutablePropertyValues();
        for (int i = 0, n = keyArr.length; i < n; i++) {
            String key = (String) keyArr[i];
            mpvs.addPropertyValue(key.toLowerCase(), map.get(key));
        }
        doBind(mpvs);
    }

}
