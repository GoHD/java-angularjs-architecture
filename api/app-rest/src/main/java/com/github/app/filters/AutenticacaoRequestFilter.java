package com.github.app.filters;

import java.lang.reflect.Method;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ResourceInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.Provider;

import org.jboss.resteasy.api.validation.Validation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.github.app.annotations.AuthenticationNotRequired;
import com.github.app.common.security.ConstantesDeSeguranca;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;

@Provider
public class AutenticacaoRequestFilter implements ContainerRequestFilter {

	private static final Logger LOGGER = LoggerFactory.getLogger(AutenticacaoRequestFilter.class);
	
    @Context
    private ResourceInfo resourceInfo;

    @Override
    public void filter(ContainerRequestContext requestContext) {

        if (isAuthenticationNotRequired()) {
            return;
        }

        final String jwtToken = requestContext.getHeaderString(HttpHeaders.AUTHORIZATION);

        try {
            Jwts.parser().setSigningKey(ConstantesDeSeguranca.JWT_KEY).parseClaimsJws(jwtToken);
        } catch (SignatureException e) {
        	LOGGER.info("User cannot access the resource", e);
            requestContext.abortWith(buildResponseUnauthorized("User cannot access the resource."));
        } catch (IllegalArgumentException e) {
        	LOGGER.error("Invalid Token", e);
        	requestContext.abortWith(buildResponseUnauthorized("Invalid Token."));
        }

    }

    private boolean isAuthenticationNotRequired() {
        final Method method = resourceInfo.getResourceMethod();
        return method != null && method.isAnnotationPresent(AuthenticationNotRequired.class);
    }
    
    private Response buildResponseUnauthorized(Object entity) {
        ResponseBuilder builder = Response.status(Status.UNAUTHORIZED).entity(entity);
        builder.type(MediaType.TEXT_PLAIN);
        builder.header(Validation.VALIDATION_HEADER, "true");
        return builder.build();
    }
}