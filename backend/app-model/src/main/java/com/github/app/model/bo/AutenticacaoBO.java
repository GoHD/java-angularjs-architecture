package com.github.app.model.bo;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class AutenticacaoBO {

    @NotNull
    @Size(min = 4, max = 40)
    private String login;

    @NotNull
    @Size(min = 4, max = 40)
    private String senha;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
    
}
