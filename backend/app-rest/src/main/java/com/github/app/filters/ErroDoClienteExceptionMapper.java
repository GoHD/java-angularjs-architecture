package com.github.app.filters;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

import org.jboss.resteasy.api.validation.Validation;

import com.github.app.common.exception.AtributosDaEntidadeInvalidosException;
import com.github.app.common.exception.Erro;
import com.github.app.common.exception.ErroDoClienteException;

@Provider
public class ErroDoClienteExceptionMapper implements ExceptionMapper<ErroDoClienteException> {

    @Override
    public Response toResponse(ErroDoClienteException exception) {
        Erro erro;
        
        if (exception instanceof AtributosDaEntidadeInvalidosException) {
            erro = ((AtributosDaEntidadeInvalidosException) exception).getErro();
        } else {
            erro = new Erro(exception.getChaveI18n(), exception.getMessage());
        }
        
        return buildResponse(erro, MediaType.APPLICATION_JSON, Status.BAD_REQUEST);
    }
    
    protected Response buildResponse(Object entity, String mediaType, Status status) {
        ResponseBuilder builder = Response.status(status).entity(entity);
        builder.type(mediaType);
        builder.header(Validation.VALIDATION_HEADER, "true");
        return builder.build();
    }

}
