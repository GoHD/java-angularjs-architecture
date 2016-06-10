package com.github.app.exparsers;

import javax.validation.ValidationException;

public class ExceptionParsersFactory {
    
    public static ExceptionParser<ValidationException> make(ValidationException ex) {
        return new ConstraintViolationToErroParser();
    }
    
    public static ExceptionParser<Exception> make(Exception exception) {
        return new DefaultExceptionParser();
    }
    
}
