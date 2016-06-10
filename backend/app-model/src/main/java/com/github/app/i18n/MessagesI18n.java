package com.github.app.i18n;

import java.util.ResourceBundle;

public enum MessagesI18n {

    TEST;
    
    public String mensagem() {
        return ResourceBundle.getBundle("i18n.usuarioI18n").getString(name());
    }
}
