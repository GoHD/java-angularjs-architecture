package com.github.app.common.utils;

import java.util.Iterator;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;

import com.github.app.common.exception.AtributoEntidadeInvalidoException;

public class ValidationUtils {

	public static <T> void validaAtributosDaEntidade(final Validator validator, final T entity) {
		final Set<ConstraintViolation<T>> errors = validator.validate(entity);
		final Iterator<ConstraintViolation<T>> itErrors = errors.iterator();
		if (itErrors.hasNext()) {
			final ConstraintViolation<T> violation = itErrors.next();
			throw new AtributoEntidadeInvalidoException(violation.getPropertyPath().toString(), violation.getMessage());
		}
	}

}