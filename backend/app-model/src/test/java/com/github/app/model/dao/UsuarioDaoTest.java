package com.github.app.model.dao;

import static com.github.app.testcommons.mock.UsuarioMocks.*;
import static org.junit.Assert.*;

import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.github.app.model.entity.Usuario;
import com.github.app.testcommons.utils.TestBaseRepository;

public class UsuarioDaoTest extends TestBaseRepository {

    private UsuarioDao usuarioDao;

    @Before
    public void initTestCase() {
        initializeTestDB();
        usuarioDao = new UsuarioDao();
        usuarioDao.em = em;
    }

    @After
    public void setDownTestCase() {
        closeEntityManager();
    }

    @Test
    public void addUsuarioAndFindIt() {
        final Long usuarioAddedId = dbCommandExecutor.executeCommand(() -> {
            return usuarioDao.add(joaoDaSilva()).getId();
        });
        assertNotNull(usuarioAddedId);

        final Usuario usuario = usuarioDao.findById(usuarioAddedId);
        assertNotNull(usuario);
        assertEquals(joaoDaSilva().getNome(), usuario.getNome());
    }

    @Test
    public void findUsuarioByIdNotFound() {
        final Usuario usuario = usuarioDao.findById(999L);
        assertNull(usuario);
    }

    @Test
    public void updateUsuario() {

        Long usuarioAddedId = dbCommandExecutor.executeCommand(() -> {
            return usuarioDao.add(joaoDaSilva()).getId();
        });

        assertNotNull(usuarioAddedId);

        final Usuario usuario = usuarioDao.findById(usuarioAddedId);
        assertNotNull(usuario);

        usuario.setNome(NOME_USUARIO_EDITADO);

        dbCommandExecutor.executeCommand(() -> {
            usuarioDao.update(usuario);
            return null;
        });

        Usuario usuarioEditado = usuarioDao.findById(usuarioAddedId);
        assertEquals(NOME_USUARIO_EDITADO, usuarioEditado.getNome());

    }

    @Test
    public void findAllUsuarios() {

        insereUsuariosParaTestarFinds();
        
        List<Usuario> usuarios = dbCommandExecutor.executeCommand(() -> {
            return usuarioDao.findAll();
        });
        
        assertEquals(joaoDaSilva().getNome(), usuarios.get(0).getNome());
        assertEquals(juliaCarvalho().getNome(), usuarios.get(1).getNome());
        assertEquals(pedroMendonca().getNome(), usuarios.get(2).getNome());

    }

    private void insereUsuariosParaTestarFinds() {
        dbCommandExecutor.executeCommand(() -> {
            usuarioDao.add(joaoDaSilva());
            usuarioDao.add(juliaCarvalho());
            usuarioDao.add(pedroMendonca());
            return null;
        });
    }

}
