package com.github.app.common.exception;

import javax.ejb.ApplicationException;

@ApplicationException
public class EntidadeNaoEncontradaException extends RuntimeException {
    private static final long serialVersionUID = 1L;
}