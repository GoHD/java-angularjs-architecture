package com.github.app.model.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public abstract class DaoGenerico<E, ID> {

    @PersistenceContext(name = "appPU")
    EntityManager em;

    public E insere(final E entity) {
        em.persist(entity);
        return entity;
    }

    public E buscaPorId(final ID id) {
        if (id == null) {
            return null;
        }
        return em.find(getPersistentClass(), id);
    }

    public E atualiza(final E entity) {
        return em.merge(entity);
    }

    @SuppressWarnings("unchecked")
    public List<E> buscaTodos() {
        return em.createQuery("Select e From " + getPersistentClass().getSimpleName() + " e").getResultList();
    }

    public boolean verificaSeEstaCadastrado(final ID id) {
        String jpql = "Select 1 From " + getPersistentClass().getSimpleName() + " e where e.id = :id";
        return em.createQuery(jpql).setParameter("id", id).setMaxResults(1).getResultList().size() > 0;
    }
    
    public void remove(final ID id) {
        E entity = buscaPorId(id);
        if (entity != null) {
            em.remove(entity);
        }
    }

    abstract Class<E> getPersistentClass();

}
