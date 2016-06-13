package com.github.app.model.service;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;
import javax.validation.Validator;

import com.github.app.common.exception.EntidadeNaoEncontradaException;
import com.github.app.common.exception.AtributosDaEntidadeInvalidosException;
import com.github.app.common.utils.ValidationUtils;
import com.github.app.model.dao.DaoGenerico;
import com.github.app.model.entity.IEntity;

public abstract class ServicoGenerico<E extends IEntity<ID>, ID extends Serializable> {
    
    @Inject
    Validator validator;
    
    public E insereOuAtualiza(E entity) throws AtributosDaEntidadeInvalidosException {
        if (entity.getId() == null) {
            return insere(entity);
        } else {
            return atualiza(entity);
        }
    }
    
    public E insere(E entity) throws AtributosDaEntidadeInvalidosException {
        ValidationUtils.validaAtributosDaEntidade(validator, entity);
        preparaEntidadeParaInserir(entity);
        return getDao().insere(entity);
    }
    
    protected void preparaEntidadeParaInserir(E entity) {};

    public E atualiza(E entity) throws AtributosDaEntidadeInvalidosException, EntidadeNaoEncontradaException {
        ValidationUtils.validaAtributosDaEntidade(validator, entity);

        if (!getDao().verificaSeEstaCadastrado(entity.getId())) {
            throw new EntidadeNaoEncontradaException();
        }

        return getDao().atualiza(entity);
    }

    public E buscaPorId(ID id) throws EntidadeNaoEncontradaException {
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
