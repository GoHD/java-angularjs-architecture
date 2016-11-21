package com.github.app.model.dao;

import static com.github.app.testcommons.mock.ClienteMocks.*;
import static org.junit.Assert.*;

import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.github.app.model.entity.Cliente;
import com.github.app.model.filtros.FiltroCliente.FiltroClienteBuilder;
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
    public void buscaClientePorNomeQueNaoExiste() {
        
        FiltroClienteBuilder filtro = new FiltroClienteBuilder();
        filtro.nome(castiel().getNome());
        
        final List<Cliente> clientes = dbCommandExecutor.executeCommand(() -> {
            clienteDao.insere(samWinchester());
            return clienteDao.buscaComFiltros(filtro.build());
        });
        
        assertTrue(clientes.isEmpty());
    }
    
    @Test
    public void adicionaClientesEBuscaPorDataDeNascimento() {
        insereClientesParaTestarBuscas();
        
        FiltroClienteBuilder filtro = new FiltroClienteBuilder();
        filtro.intervaloDataNascimento(DATA_NASCIMENTO_DEAN, DATA_NASCIMENTO_SAM);
        
        final List<Cliente> clientes = dbCommandExecutor.executeCommand(() -> {
            return clienteDao.buscaComFiltros(filtro.build());
        });
        
        assertTrue(clientes.contains(clienteComId(deanWinchester(), 1L)));
        assertTrue(clientes.contains(clienteComId(samWinchester(), 2L)));
        assertFalse(clientes.contains(clienteComId(balthazar(), 3L)));
    }
    
    @Test
    public void adicionaClienteEBuscaEle() {
        final Long idClienteAdicionado = dbCommandExecutor.executeCommand(() -> {
            return clienteDao.insere(deanWinchester()).getId();
        });
        assertNotNull(idClienteAdicionado);

        final Cliente cliente = clienteDao.buscaPorId(idClienteAdicionado);
        assertNotNull(cliente);
        assertEquals(deanWinchester().getNome(), cliente.getNome());
    }
    
    @Test
    public void buscaClientePorIdQueNaoExiste() {
        final Cliente cliente = clienteDao.buscaPorId(999L);
        assertNull(cliente);
    }
    
    @Test
    public void updateCliente() {

        Long idClienteAdicionado = dbCommandExecutor.executeCommand(() -> {
            return clienteDao.insere(samWinchester()).getId();
        });

        assertNotNull(idClienteAdicionado);

        final Cliente cliente = clienteDao.buscaPorId(idClienteAdicionado);
        assertNotNull(cliente);

        cliente.setNome(NOME_ClIENTE_EDITADO);

        dbCommandExecutor.executeCommand(() -> {
            clienteDao.atualiza(cliente);
            return null;
        });

        Cliente clienteEditado = clienteDao.buscaPorId(idClienteAdicionado);
        assertEquals(NOME_ClIENTE_EDITADO, clienteEditado.getNome());

    }
    
    @Test
    public void buscaTodosClientes() {
        insereClientesParaTestarBuscas();
        
        List<Cliente> clientes = dbCommandExecutor.executeCommand(() -> {
            return clienteDao.buscaTodos();
        });
        
        assertEquals(deanWinchester().getNome(), clientes.get(0).getNome());
        assertEquals(samWinchester().getNome(), clientes.get(1).getNome());
        assertEquals(balthazar().getNome(), clientes.get(2).getNome());
    }
    
    
    private void insereClientesParaTestarBuscas() {
        dbCommandExecutor.executeCommand(() -> {
            clienteDao.insere(deanWinchester()).getId();
            clienteDao.insere(samWinchester()).getId();
            clienteDao.insere(balthazar()).getId();
            return null;
        });
    }
    
}
