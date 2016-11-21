package com.github.app.model.dao;

import java.util.Optional;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.RequestScoped;
import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;

import com.github.app.model.entity.Usuario;
import com.github.app.model.entity.Usuario.NamedQueries;

@ApplicationScoped
public class UsuarioDao extends DaoGenerico<Usuario, Long> {

    @Override
    protected Class<Usuario> getPersistentClass() {
        return Usuario.class;
    }

    public Optional<Usuario> buscaPorLogin(String login) {
        TypedQuery<Usuario> query = em.createNamedQuery(NamedQueries.BUSCA_POR_LOGIN.name, Usuario.class);
        query.setParameter("login", login);
        
        try {
            return Optional.ofNullable(query.getSingleResult());
        } catch (NoResultException ex) {
            return Optional.empty();
        }
    }

}
