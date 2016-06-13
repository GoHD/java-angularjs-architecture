package com.github.app.filters;

import java.io.IOException;
import java.lang.reflect.Method;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ResourceInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

import com.github.app.annotations.AuthenticationNotRequired;
import com.github.app.commons.security.JWTKey;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;

@Provider
public class AutenticacaoRequestFilter implements ContainerRequestFilter {

    @Context
    private ResourceInfo resourceInfo;

    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {

        if (isAuthenticationNotRequired()) {
            return;
        }

        final String jwtToken = requestContext.getHeaderString(HttpHeaders.AUTHORIZATION);

        try {
            Jwts.parser().setSigningKey(JWTKey.key).parseClaimsJws(jwtToken);
            // .getBody().getSubject().equals(usuario.getLogin())
        } catch (SignatureException e) {
            requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).entity("User cannot access the resource.").build());
        }

    }

    private boolean isAuthenticationNotRequired() {
        final Method method = resourceInfo.getResourceMethod();
        return method != null && method.isAnnotationPresent(AuthenticationNotRequired.class);
    }

}