package com.github.app.model.dao;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static com.github.app.testcommons.mock.ClienteMocks.*;
import static org.junit.Assert.assertEquals;

import java.util.List;

import com.github.app.model.entity.Cliente;
import com.github.app.testcommons.utils.TestBaseRepository;

public class ClienteDaoTest extends TestBaseRepository {

    private ClienteDao clienteDao;
    
    @Before
    public void iniciaCasoDeTeste() {
        initializeTestDB();
        clienteDao = new ClienteDao();
        clienteDao.em = em;
    }

    @After
    public void finalizaCasoDeTeste() {
        closeEntityManager();
    }
    
    @Test
    public void buscaTodosClientes() {
        insereClientesParaTestarFinds();
        
        List<Cliente> clientes = dbCommandExecutor.executeCommand(() -> {
            return clienteDao.buscaTodos();
        });
        
        assertEquals(deanWinchester().getNome(), clientes.get(0).getNome());
        assertEquals(samWinchester().getNome(), clientes.get(1).getNome());
        assertEquals(balthazar().getNome(), clientes.get(2).getNome());
    }
    
    
    private void insereClientesParaTestarFinds() {
        dbCommandExecutor.executeCommand(() -> {
            clienteDao.insere(deanWinchester());
            clienteDao.insere(samWinchester());
            clienteDao.insere(balthazar());
            return null;
        });
    }
    
}
