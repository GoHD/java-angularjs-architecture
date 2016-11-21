package com.github.app.common.utils;

import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;

import com.github.app.common.exception.AtributosDaEntidadeInvalidosException;
import com.github.app.i18n.MensagensI18n;

public class ValidationUtils {

	public static <T> void validaAtributosDaEntidade(final Validator validator, final T entity) {
		
	    final Set<ConstraintViolation<T>> errors = validator.validate(entity);
		
		if (!errors.isEmpty()) {
		    String chaveI18n = MensagensI18n.ERRO_PREENCHIMENTO_CAMPOS.name();
		    String tituloErro = MensagensI18n.ERRO_PREENCHIMENTO_CAMPOS.mensagem();
		    AtributosDaEntidadeInvalidosException ex = new AtributosDaEntidadeInvalidosException(chaveI18n, tituloErro);
		    
		    for (ConstraintViolation<T> cv : errors) {
                String atributo = cv.getPropertyPath().toString();
                ex.adicionaAtributoInvalido(atributo, cv.getMessage());
            }
		    
		    throw ex;
		}
	}

}