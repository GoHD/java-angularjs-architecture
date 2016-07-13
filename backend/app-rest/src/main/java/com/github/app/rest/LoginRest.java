package com.github.app.rest;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.github.app.annotations.AuthenticationNotRequired;
import com.github.app.model.dto.LoginDto;
import com.github.app.model.dto.UsuarioLogadoDto;
import com.github.app.model.service.AutenticacaoService;

@Path("/login")
public class LoginRest {
    
    @Inject
    private AutenticacaoService autenticacaoService;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @AuthenticationNotRequired
    public Response realizaLogin(LoginDto loginDto) {
        UsuarioLogadoDto usuarioLogadoDto = autenticacaoService.realizaLogin(loginDto);
        return Response.status(Status.OK).entity(usuarioLogadoDto).build() ;
    }
    
    @GET
    public Response verfificaUsuarioAutenticado() {
    	return Response.status(Status.OK).build();
    }

}
