package com.github.app.common.exception;

public class ErroDoClienteException extends RuntimeException {
    private static final long serialVersionUID = 1L;
    
    private String chaveI18n;
    
    public ErroDoClienteException(String chaveI18n, String mensagem) {
        super(mensagem);
        this.chaveI18n = chaveI18n;
    }

    public String getChaveI18n() {
        return chaveI18n;
    }
    
}
