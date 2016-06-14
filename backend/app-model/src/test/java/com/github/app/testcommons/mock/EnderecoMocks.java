package com.github.app.testcommons.mock;

import com.github.app.model.entity.Endereco;

public class EnderecoMocks {

    public static Endereco enderecoDoSamEDean() {
        Endereco endereco = new Endereco();
        endereco.setBairro("Bairro 1");
        endereco.setCep("88704080");
        endereco.setCidade("Cidade 1");
        endereco.setComplemento("Casa branca");
        endereco.setEstado(EstadoMocks.SC());
        endereco.setNumero(999);
        endereco.setPontoDeReferencia("Não tem");
        endereco.setRua("Rua 1");
        return endereco;
    }
    
    public static Endereco enderecoPadrao() {
        Endereco endereco = new Endereco();
        endereco.setBairro("Bairro Padrão");
        endereco.setCep("88704020");
        endereco.setCidade("Cidade Padrão");
        endereco.setComplemento("Casa Padrão");
        endereco.setEstado(EstadoMocks.PR());
        endereco.setNumero(999);
        endereco.setPontoDeReferencia("Padrão");
        endereco.setRua("Rua Padrão");
        return endereco;
    }
}
