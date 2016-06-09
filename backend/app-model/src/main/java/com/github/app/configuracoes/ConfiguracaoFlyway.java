package com.github.app.configuracoes;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import javax.ejb.EJBException;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.sql.DataSource;

import org.flywaydb.core.Flyway;

@Singleton
//@Startup
@TransactionManagement(TransactionManagementType.BEAN) 
public class ConfiguracaoFlyway {
    
    @Resource(lookup = "java:jboss/datasources/appDS")
    private DataSource dataSource;
 
    @PostConstruct
    protected void onStartup() {
        if (dataSource == null) {
            throw new EJBException("no datasource found to execute the db migrations!");
        }
 
        Flyway flyway = new Flyway();
        flyway.setDataSource(dataSource);
        flyway.migrate();
    }
}