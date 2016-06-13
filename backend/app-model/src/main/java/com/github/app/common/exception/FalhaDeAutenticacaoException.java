package com.github.app.common.exception;

public class FalhaDeAutenticacaoException extends RuntimeException {
    private static final long serialVersionUID = 1L;
    
    public FalhaDeAutenticacaoException(String mensagem) {
        super(mensagem);
    }
    
}
