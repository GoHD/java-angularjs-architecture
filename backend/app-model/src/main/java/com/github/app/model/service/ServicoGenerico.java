package com.github.app.model.service;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;
import javax.validation.Validator;

import com.github.app.common.exception.EntidadeNaoEncontradaException;
import com.github.app.common.exception.AtributoEntidadeInvalidoException;
import com.github.app.common.utils.ValidationUtils;
import com.github.app.model.dao.DaoGenerico;
import com.github.app.model.entity.IEntity;

public abstract class ServicoGenerico<E extends IEntity<ID>, ID extends Serializable> {
    
    @Inject
    Validator validator;
    
    public E addOrUpdate(E entity) throws AtributoEntidadeInvalidoException {
        ValidationUtils.validaAtributosDaEntidade(validator, entity);
        
        if (entity.getId() == null) {
            return getDao().add(entity);
        } else {
            return getDao().update(entity);
        }
        
    }
    
    public E add(E entity) throws AtributoEntidadeInvalidoException {
        ValidationUtils.validaAtributosDaEntidade(validator, entity);
        return getDao().add(entity);
    }
    
    public E update(E entity) throws AtributoEntidadeInvalidoException, EntidadeNaoEncontradaException {
        ValidationUtils.validaAtributosDaEntidade(validator, entity);

        if (!getDao().existsById(entity.getId())) {
            throw new EntidadeNaoEncontradaException();
        }

        return getDao().update(entity);
    }

    public E findById(ID id) throws EntidadeNaoEncontradaException {
        final E entity = getDao().findById(id);
        if (entity == null) {
            throw new EntidadeNaoEncontradaException();
        }
        return entity;
    }
    
    public List<E> findAll() {
        List<E> entities = getDao().findAll();
        if (entities == null) {
            throw new EntidadeNaoEncontradaException();
        }
        return entities;
    }

    public void delete(ID id) {
        getDao().delete(id);
    }
    
    protected abstract DaoGenerico<E, ID> getDao();
    
}
