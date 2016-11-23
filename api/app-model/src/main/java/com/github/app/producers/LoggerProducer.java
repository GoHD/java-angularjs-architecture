package com.github.app.producers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.enterprise.inject.Produces;
import javax.enterprise.inject.spi.InjectionPoint;

/**
 * Created by Alexandre.Zanelatto on 23/11/2016.
 */
public class LoggerProducer {

    @Produces
    public Logger produceLogger(InjectionPoint ip) {
        return LoggerFactory.getLogger(ip.getMember().getDeclaringClass().getName());
    }
}
