package com.github.app.model.service;

import static com.github.app.testcommons.mock.LoginDtoMocks.*;
import static com.github.app.testcommons.mock.UsuarioMocks.*;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.github.app.common.exception.FalhaDeAutenticacaoException;
import com.github.app.model.dao.UsuarioDao;
import com.github.app.model.dto.UsuarioLogadoDto;

public class AutenticacaoServiceTest {

    private AutenticacaoService autenticacaoService;
    private UsuarioService usuarioService;

    @Mock
    private UsuarioDao usuarioDao;

    @Before
    public void initTestCase() {
        MockitoAnnotations.initMocks(this);
        usuarioService = new UsuarioService();
        usuarioService.usuarioDao = usuarioDao;
        autenticacaoService = new AutenticacaoService();
        autenticacaoService.usuarioService = usuarioService;
    }

    @Test(expected = FalhaDeAutenticacaoException.class)
    public void realizaAutenticacaoComLoginInexistente() {
        when(usuarioDao.buscaPorLogin(LoginDtoComLoginInexistente().getLogin())).thenReturn(null);
        autenticacaoService.realizaLogin(LoginDtoComLoginInexistente());
    }

    @Test(expected = FalhaDeAutenticacaoException.class)
    public void realizaAutenticacaoComSenhaInvalida() {
        when(usuarioDao.buscaPorLogin(LoginDtoLoginValidoSenhaInvalida().getLogin())).thenReturn(pedroMendonca());
        autenticacaoService.realizaLogin(LoginDtoLoginValidoSenhaInvalida());
    }

    @Test()
    public void realizaAutenticacaoComUsuarioESenhaValidos() {
        when(usuarioDao.buscaPorLogin(LoginDtoValido().getLogin())).thenReturn(pedroMendonca());
        UsuarioLogadoDto loginDto = autenticacaoService.realizaLogin(LoginDtoValido());

        assertEquals(loginDto.getId(), pedroMendonca().getId());
    }

}
