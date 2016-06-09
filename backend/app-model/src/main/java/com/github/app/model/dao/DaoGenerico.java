package com.github.app.model.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public abstract class DaoGenerico<E, ID> {

    @PersistenceContext(name = "appPU")
    EntityManager em;

    public E add(final E entity) {
        em.persist(entity);
        return entity;
    }

    public E findById(final ID id) {
        if (id == null) {
            return null;
        }
        return em.find(getPersistentClass(), id);
    }

    public E update(final E entity) {
        return em.merge(entity);
    }

    @SuppressWarnings("unchecked")
    public List<E> findAll() {
        return em.createQuery("Select e From " + getPersistentClass().getSimpleName() + " e").getResultList();
    }

    public boolean existsById(final ID id) {
        String jpql = "Select 1 From " + getPersistentClass().getSimpleName() + " e where e.id = :id";
        return em.createQuery(jpql).setParameter("id", id).setMaxResults(1).getResultList().size() > 0;
    }
    
    public void delete(final ID id) {
        E entity = findById(id);
        if (entity != null) {
            em.remove(entity);
        }
    }

    protected abstract Class<E> getPersistentClass();

}
