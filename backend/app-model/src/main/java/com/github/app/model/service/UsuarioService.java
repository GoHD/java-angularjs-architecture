package com.github.app.model.service;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.github.app.model.dao.DaoGenerico;
import com.github.app.model.dao.UsuarioDao;
import com.github.app.model.entity.Usuario;

@Stateless
public class UsuarioService extends ServicoGenerico<Usuario, Long> {
    
    @Inject
    UsuarioDao usuarioDao;
    
    @Override
    protected DaoGenerico<Usuario, Long> getDao() {
        return usuarioDao;
    }
    
}
