package com.github.app.i18n;

import java.util.ResourceBundle;

public enum UsuarioI18n {
    
    TESTE;
    
    public String mensagem() {
        return ResourceBundle.getBundle("i18n.usuarioI18n").getString(name());
    }
}
