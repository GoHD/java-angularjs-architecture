package com.github.app.common.exception;

public class MensagemDeErro {

    private String chave;
    private String mensagem;

    public MensagemDeErro(String chave, String mensagem) {
        this.chave = chave;
        this.mensagem = mensagem;
    }

    public String getChave() {
        return chave;
    }

    public String getMensagem() {
        return mensagem;
    }

}
