package com.github.app.rest;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.github.app.annotations.AuthenticationNotRequired;
import com.github.app.commons.secutiry.JWTKey;
import com.github.app.model.bo.AutenticacaoBO;
import com.github.app.model.service.AutenticacaoService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Path("/login")
public class LoginRest {
    
    @Inject
    private AutenticacaoService autenticacaoService;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    @AuthenticationNotRequired
    public Response realizaLogin(@Valid AutenticacaoBO autenticacao) {
    
        System.out.println("Login: " + autenticacao.getLogin());
        System.out.println("Senha: " + autenticacao.getSenha());
        
        // TODO Valida usuário no banco 
        
        String jwtToken = Jwts.builder().setSubject(autenticacao.getLogin()).signWith(SignatureAlgorithm.HS512, JWTKey.key).compact();
        System.out.println("Token Gerado: " + jwtToken);
        
        return Response.status(Status.OK).entity(jwtToken).build() ;
        
    }

}
