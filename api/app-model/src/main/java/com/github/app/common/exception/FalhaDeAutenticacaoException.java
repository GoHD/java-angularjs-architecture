package com.github.app.common.exception;

public class FalhaDeAutenticacaoException extends ErroDoClienteException {
    private static final long serialVersionUID = 1L;
    
    public FalhaDeAutenticacaoException(String chaveI18n, String mensagem) {
        super(chaveI18n, mensagem);
    }
    
}
