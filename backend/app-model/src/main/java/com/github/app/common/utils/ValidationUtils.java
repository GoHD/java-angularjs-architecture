package com.github.app.common.utils;

import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.validation.Validator;

public class ValidationUtils {

	public static <T> void validaAtributosDaEntidade(final Validator validator, final T entity) {
		final Set<ConstraintViolation<T>> errors = validator.validate(entity);
		if (!errors.isEmpty()) {
		    throw new ConstraintViolationException(errors);
		}
	}

}