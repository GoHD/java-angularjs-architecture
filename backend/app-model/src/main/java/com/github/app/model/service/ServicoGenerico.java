package com.github.app.model.service;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;
import javax.validation.Validator;

import com.github.app.common.exception.EntidadeNaoEncontradaException;
import com.github.app.common.utils.ValidationUtils;
import com.github.app.model.dao.DaoGenerico;
import com.github.app.model.entity.IEntity;

public abstract class ServicoGenerico<E extends IEntity<ID>, ID extends Serializable> {
    
    @Inject
    Validator validator;
    
    public E insereOuAtualiza(E entity) {
        if (entity.getId() == null) {
            return insere(entity);
        } else {
            return atualiza(entity);
        }
    }
    
    public E insere(E entity) {
        ValidationUtils.validaAtributosDaEntidade(validator, entity);
        return getDao().insere(entity);
    }
    
    public E atualiza(E entity) {
        ValidationUtils.validaAtributosDaEntidade(validator, entity);

        if (!getDao().verificaSeEstaCadastrado(entity.getId())) {
            throw new EntidadeNaoEncontradaException();
        }

        return getDao().atualiza(entity);
    }

    public E buscaPorId(ID id) {
        final E entity = getDao().buscaPorId(id);
        if (entity == null) {
            throw new EntidadeNaoEncontradaException();
        }
        return entity;
    }
    
    public List<E> buscaTodos() {
        List<E> entities = getDao().buscaTodos();
        if (entities == null) {
            throw new EntidadeNaoEncontradaException();
        }
        return entities;
    }

    public void remove(ID id) {
        getDao().remove(id);
    }
    
    protected abstract DaoGenerico<E, ID> getDao();
    
}
