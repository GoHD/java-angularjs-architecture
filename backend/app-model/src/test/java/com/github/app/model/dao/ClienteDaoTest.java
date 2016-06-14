package com.github.app.model.dao;

import org.junit.After;
import org.junit.Before;

import com.github.app.testcommons.utils.TestBaseRepository;

public class ClienteDaoTest extends TestBaseRepository {

    private ClienteDao clienteDao;
    
    @Before
    public void initTestCase() {
        initializeTestDB();
        clienteDao = new ClienteDao();
        clienteDao.em = em;
    }

    @After
    public void setDownTestCase() {
        closeEntityManager();
    }
    
    
}
