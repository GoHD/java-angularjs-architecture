package com.github.app.common.exception;

import javax.ejb.ApplicationException;

@ApplicationException
public class AtributosDaEntidadeInvalidosException extends ErroDoClienteException {
    private static final long serialVersionUID = 1L;

    private Erro erro;

    public AtributosDaEntidadeInvalidosException(final String chaveI18n, final String tituloDoErro) {
        super(chaveI18n, tituloDoErro);
        this.erro = new Erro(chaveI18n, tituloDoErro);
    }

    public void adicionaAtributoInvalido(String atributo, String mensagem) {
        erro.adicionaMensagem(atributo, mensagem);
    }
    
    public Erro getErro() {
        return erro;
    }

    @Override
    public String toString() {
        return "AtributosDaEntidadeInvalidosException [" + erro + "]";
    }
    
}