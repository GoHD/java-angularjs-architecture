package com.github.app.exparsers;

import java.util.function.Consumer;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.validation.Path;
import javax.validation.ValidationException;

import com.github.app.common.exception.Erro;

public class ConstraintViolationToErroParser implements ExceptionParser<ValidationException> {
    
    // Implementar todas as exceptions
    // ConstraintDeclarationException, ConstraintDefinitionException, ConstraintViolationException, GroupDefinitionException
    
    public Erro parse(ValidationException exception) {
        
        if (exception instanceof ConstraintViolationException) {
            return parse((ConstraintViolationException) exception);
        }
        
        return new Erro(exception.getMessage());
        
    }

    private Erro parse(ConstraintViolationException exception) {
        Erro erro = new Erro("Erro no preenchimento dos campos.");
        
        for (ConstraintViolation<?> constraintViolation : exception.getConstraintViolations()) {
            String campo = constraintViolation.getPropertyPath().toString();
            campo = campo.substring(campo.lastIndexOf(".") + 1);
            erro.adicionaMensagem(campo, campo + " " + constraintViolation.getMessage());
        }

        return erro;
    }

}
