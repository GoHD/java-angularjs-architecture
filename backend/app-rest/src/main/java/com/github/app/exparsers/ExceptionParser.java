package com.github.app.exparsers;

import com.github.app.common.exception.Erro;

public interface ExceptionParser<T extends Exception> {
    public Erro parse(T exception);
}
