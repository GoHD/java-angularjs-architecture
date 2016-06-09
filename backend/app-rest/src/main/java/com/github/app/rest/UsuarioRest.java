package com.github.app.rest;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.github.app.common.exception.EntidadeNaoEncontradaException;
import com.github.app.model.entity.Usuario;
import com.github.app.model.service.UsuarioService;

@Path("/usuario")
public class UsuarioRest {

    @Inject
    private UsuarioService usuarioService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{id}")
    public Response buscaUsuario(@PathParam("id") final Long id) {
        try {
            Usuario usuario = usuarioService.findById(id);
            return Response.status(Status.OK).entity(usuario).build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Status.NOT_FOUND).build();
        }
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response buscaUsuarios() {
        try {
            List<Usuario> usuarios = usuarioService.findAll();
            return Response.status(Status.OK).entity(usuarios).build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Status.NOT_FOUND).build();
        }
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response cadastraUsuario(Usuario usuario) {
         usuarioService.add(usuario);
         String resultado = "Usuario cadastrado com sucesso";
         return Response.status(Status.CREATED).entity(resultado).build();
    }
    
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public Response alteraUsuario(Usuario usuario) {
        usuarioService.update(usuario);
        String resultado = "Usuario atualizado com sucesso";
        return Response.status(Status.OK).entity(resultado).build();
    }

    @DELETE
    @Path("/{id}")
    public Response deletaUsuario(@PathParam("id") final Long id) {
        usuarioService.delete(id);
        String resultado = "Usuario deletado com sucesso";
        return Response.status(Status.OK).entity(resultado).build();
    }

}
