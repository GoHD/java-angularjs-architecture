package com.github.app.rest;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.github.app.annotations.AuthenticationNotRequired;
import com.github.app.commons.secutiry.JWTKey;
import com.github.app.model.entity.Usuario;
import com.github.app.model.service.UsuarioService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Path("/login")
public class LoginRest {
    
    @Inject
    private UsuarioService usuarioService;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    @AuthenticationNotRequired
    public Response realizaLogin(Usuario usuario) {
        
        System.out.println("Login: " + usuario.getLogin());
        System.out.println("Senha: " + usuario.getSenha());
        
        // TODO Valida usuário no banco 
        
        String jwtToken = Jwts.builder().setSubject(usuario.getLogin()).signWith(SignatureAlgorithm.HS512, JWTKey.key).compact();
        System.out.println("Token Gerado: " + jwtToken);
        
        return Response.status(Status.OK).entity(jwtToken).build() ;
        
    }

}
