package com.nbdf.commons.system.support;

import com.nbdf.commons.system.CommonConstant;
import com.nbdf.commons.system.SystemControlManager;
import com.nbdf.commons.system.schema.ImcsConfigType;
import com.nbdf.commons.system.schema.ImcsService;
import com.nbdf.commons.system.schema.IpField;
import com.nbdf.commons.system.schema.ServiceField;
import com.nbdf.commons.util.DateUtil;

import java.io.File;
import java.util.Timer;
import java.util.TimerTask;

import javax.xml.bind.JAXBElement;

public class RefreshObserver {
	
	private long loadedTime = 0;
	
    XmLModifieCheckWorker checkWorker = new XmLModifieCheckWorker();
    
    public RefreshObserver() {
    	super();
    	checkWorker.startTask();
    }
    
    public class XmLModifieCheckWorker extends TimerTask {
        Timer timer;

        public XmLModifieCheckWorker() {
        	super();
            this.timer = new Timer() ;
        }

        public void run() {
        	isModified();
        }

        private boolean isModified() {
        	File configFile = new File(CommonConstant.SYSTEM_CONTROL_FILE);
        	
        	if (!configFile.exists()) {
        		SystemControlManager.setOffService(true);
        		return false;
        	}
        	
        	if (loadedTime == 0 || loadedTime != configFile.lastModified()) {
        		loadedTime = configFile.lastModified();
        		refreshConfig();
        		SystemControlManager.setOffService(false);
        		return true;
        	}

        	return false;
        }
        
        public void startTask() {
            timer.schedule( this, 5000, 5 * 60 * 100); 
        }
    }
    
    private void refreshConfig(){
    	
    	SystemControlManager.clearMap();
    	
    	JAXBElement<ImcsConfigType> obj = new com.nbdf.commons.system.schema.ObjectFactory().createImcsConfig(new ImcsConfigType());
    	obj =  (JAXBElement<com.nbdf.commons.system.schema.ImcsConfigType>) SystemControlSupport.unmarshal();
    	
    	for (IpField ipField : obj.getValue().getAllowIps().getIp()) {
    		SystemControlManager.setSystemControlMap(ipField.getValue(), ipField.getValue());
    	}
    	
    	for (ServiceField serviceField : obj.getValue().getRepairServices().getService() ) {
   			SystemControlManager.setSystemControlMap(serviceField.getName(), serviceField);
		}
    }
}
