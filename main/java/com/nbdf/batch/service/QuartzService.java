package com.nbdf.batch.service;

import org.quartz.Scheduler;

public interface QuartzService{

    public void onloadQuartz(String serverIp, String serverMode);

    public Scheduler getScheduler();

}