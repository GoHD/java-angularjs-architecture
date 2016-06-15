package com.github.app.common.exception;

import javax.ejb.ApplicationException;

import com.github.app.i18n.MensagensI18n;

@ApplicationException
public class EntidadeJaCadastradaException extends ErroDoClienteException {
	private static final long serialVersionUID = 1L;
	private static final String chaveI18n = MensagensI18n.REGISTRO_JA_CADASTRADO.name();
	private static final String mensagem = MensagensI18n.REGISTRO_JA_CADASTRADO.mensagem();
	
	public EntidadeJaCadastradaException() {
	    super(chaveI18n, mensagem);
    }
}