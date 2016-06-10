package com.github.app.filters;

import javax.validation.ValidationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;
import javax.ws.rs.core.Response.Status;
import org.jboss.resteasy.api.validation.Validation;

import com.github.app.common.exception.Erro;
import com.github.app.exparsers.ExceptionParsersFactory;

@Provider
public class ValidationExceptionMapper implements ExceptionMapper<ValidationException> {

    @Override
    public Response toResponse(ValidationException exception) {
        Erro erro = ExceptionParsersFactory.make(exception).parse(exception);
        return buildResponse(erro, MediaType.APPLICATION_JSON, Status.INTERNAL_SERVER_ERROR);
    }
    
    protected Response buildResponse(Object entity, String mediaType, Status status) {
        ResponseBuilder builder = Response.status(status).entity(entity);
        builder.type(mediaType);
        builder.header(Validation.VALIDATION_HEADER, "true");
        return builder.build();
    }

}
