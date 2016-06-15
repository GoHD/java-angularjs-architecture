package com.github.app.i18n;

import java.util.ResourceBundle;

public enum MensagensI18n {

    TEST,
    ERRO_PREENCHIMENTO_CAMPOS,
    REGISTRO_JA_CADASTRADO,
    REGISTRO_NAO_ENCONTRADO,
    SENHA_INVALIDA,
    LOGIN_NAO_CADASTRADO;

    public String mensagem() {
        return ResourceBundle.getBundle("i18n.mensagensI18n").getString(name());
    }
}
