package com.github.app.model.dao;

import javax.persistence.TypedQuery;

import com.github.app.model.entity.Usuario;
import com.github.app.model.entity.Usuario.NamedQueries;

public class UsuarioDao extends DaoGenerico<Usuario, Long> {

    @Override
    protected Class<Usuario> getPersistentClass() {
        return Usuario.class;
    }

    public Usuario buscaPorLogin(String login) {
        TypedQuery<Usuario> query = em.createNamedQuery(NamedQueries.BUSCA_POR_LOGIN.name, Usuario.class);
        query.setParameter("login", login);
        return query.getSingleResult();
    }

}
