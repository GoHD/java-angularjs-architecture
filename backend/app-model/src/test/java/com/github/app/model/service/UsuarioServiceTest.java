package com.github.app.model.service;

import javax.validation.Validation;
import javax.validation.Validator;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.github.app.model.dao.UsuarioDao;
import com.github.app.model.entity.Usuario;

public class UsuarioServiceTest {
    
    private UsuarioService usuarioService;
    private static Validator validator;
    
    @Mock
    private UsuarioDao usuarioDao;
    
    
    @BeforeClass
    public void initTestClass() {
        validator = Validation.buildDefaultValidatorFactory().getValidator();
    }
    
    @Before
    public void initTestCase() {
        MockitoAnnotations.initMocks(this);
        usuarioService.validator = validator;
        usuarioService.usuarioDao = usuarioDao;
    }
    
//    @Test
    public void adicionaUsuarioComAtributosNulos() {
        final Usuario usuario = new Usuario();
//        usuarioService.a
        
    }
    
    
}
