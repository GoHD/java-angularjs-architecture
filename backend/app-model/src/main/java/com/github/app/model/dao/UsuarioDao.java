package com.github.app.model.dao;

import javax.persistence.TypedQuery;

import com.github.app.model.entity.Usuario;

public class UsuarioDao extends DaoGenerico<Usuario, Long> {

    @Override
    protected Class<Usuario> getPersistentClass() {
        return Usuario.class;
    }

    public Usuario buscaPorLogin(String login) {
        String jpql = "FROM Usuario WHERE login = :login";
        TypedQuery<Usuario> query = em.createQuery(jpql, Usuario.class);
        query.setParameter("login", login);
        return query.getSingleResult();
    }

}
