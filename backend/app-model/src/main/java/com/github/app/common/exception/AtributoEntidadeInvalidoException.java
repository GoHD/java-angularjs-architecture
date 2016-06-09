package com.github.app.common.exception;

import javax.ejb.ApplicationException;

@ApplicationException
public class AtributoEntidadeInvalidoException extends RuntimeException {
	private static final long serialVersionUID = 4525821332583716666L;

	private final String nomeAtributo;

	public AtributoEntidadeInvalidoException(final String nomeAtributo, final String mensagem) {
		super(mensagem);
		this.nomeAtributo = nomeAtributo;
	}

	public String getNomeAtributo() {
		return nomeAtributo;
	}

	@Override
	public String toString() {
		return "AtributoEntidadeInvalidoException [nomeAtributo=" + nomeAtributo + "]";
	}

}