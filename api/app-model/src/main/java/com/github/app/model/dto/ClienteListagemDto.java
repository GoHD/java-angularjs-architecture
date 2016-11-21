package com.github.app.model.dto;

/**
 * Created by Alexandre.Zanelatto on 17/11/2016.
 */
public class ClienteListagemDto {

    private Long id;
    private String nome;
    private String sobrenome;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }
}
