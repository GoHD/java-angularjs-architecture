package com.github.app.i18n;

import java.util.ResourceBundle;

public enum MensagensI18n {

    TEST;
    
    public String mensagem() {
        return ResourceBundle.getBundle("i18n.mensagensI18n").getString(name());
    }
}
