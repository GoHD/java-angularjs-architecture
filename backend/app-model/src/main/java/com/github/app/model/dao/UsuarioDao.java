package com.github.app.model.dao;

import com.github.app.model.entity.Usuario;

public class UsuarioDao extends DaoGenerico<Usuario, Long> {
    
    @Override
    protected Class<Usuario> getPersistentClass() {
        return Usuario.class;
    }
    
}
