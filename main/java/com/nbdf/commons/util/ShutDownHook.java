package com.nbdf.commons.util;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.quartz.Scheduler;
import org.quartz.impl.StdSchedulerFactory;

public class ShutDownHook implements ServletContextListener{

@Override
public void contextDestroyed(ServletContextEvent ev) {

	try{

		if(ev != null && ev.getServletContext() != null){
			Scheduler scheduler = StdSchedulerFactory.getDefaultScheduler();
			scheduler.shutdown(true);
			Thread.sleep(1000); // sleep for a bit so that we don't get any errors
		}

	}catch(Exception e){
		e.printStackTrace();
	}

}

	 

	 @Override

	 public void contextInitialized(ServletContextEvent arg0) {}

}
