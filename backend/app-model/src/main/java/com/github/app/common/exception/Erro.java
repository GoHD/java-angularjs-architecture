package com.github.app.common.exception;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Erro {
    
    private String chaveI18n;
    private String tituloDoErro;
    private List<MensagemDeErro> mensagensDeErro = new ArrayList<>();
    
    public Erro(String chaveI18n, String tituloDoErro) {
        this.chaveI18n = chaveI18n;
        this.tituloDoErro = tituloDoErro;
    }

    public String getTituloDoErro() {
        return tituloDoErro;
    }
    
    public String getChaveI18n() {
        return chaveI18n;
    }

    public List<MensagemDeErro> getMensagensDeErro() {
        return Collections.unmodifiableList(mensagensDeErro);
    }

    public void adicionaMensagem(String mensagem) {
        adicionaMensagem("", mensagem);
    }

    public void adicionaMensagem(String chave, String mensagem) {
        mensagensDeErro.add(new MensagemDeErro(chave, mensagem));
    }

    @Override
    public String toString() {
        return "Erro [tituloDoErro=" + tituloDoErro + ", mensagensDeErro=" + mensagensDeErro + "]";
    }

}
