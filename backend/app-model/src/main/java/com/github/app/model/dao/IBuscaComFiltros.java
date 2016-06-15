package com.github.app.model.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

public interface IBuscaComFiltros<E, F> {

    @SuppressWarnings("unchecked")
    default List<E> buscaComFiltros(F filtros) {
        StringBuilder jpql = new StringBuilder();
        jpql.append("SELECT e FROM " + getPersistentClass().getSimpleName() + " e ");
        jpql.append(criaClausulaWhereParaBuscaComFiltros(filtros));
        Query query = getEntityManager().createQuery(jpql.toString());
        setaParametrosParaBuscaComFiltros(query, filtros);
        return query.getResultList();
    }
    
    abstract void setaParametrosParaBuscaComFiltros(Query query, F filtros);

    abstract String criaClausulaWhereParaBuscaComFiltros(F filtros);

    abstract Class<E> getPersistentClass();

    abstract EntityManager getEntityManager();
    
}
