package com.github.app.exparsers;

import com.github.app.common.exception.Erro;

public class DefaultExceptionParser implements ExceptionParser<Exception>  {

    @Override
    public Erro parse(Exception exception) {
        // Trocar para i18n
        Erro erro = new Erro("Erro inesperado no servidor.");
        erro.adicionaMensagem(exception.getMessage());
        return erro;
    }

}
