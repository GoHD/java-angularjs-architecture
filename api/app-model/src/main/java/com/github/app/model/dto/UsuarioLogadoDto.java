package com.github.app.model.dto;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class UsuarioLogadoDto {

    private Long id;
    private String login;
    private String nome;
    private String email;
    private String token;

    public UsuarioLogadoDto(Long id, String login, String nome, String email, String token) {
        this.id = id;
        this.login = login;
        this.nome = nome;
        this.email = email;
        this.token = token;
    }

    public Long getId() {
        return id;
    }

    public String getLogin() {
        return login;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getToken() {
        return token;
    }

}
