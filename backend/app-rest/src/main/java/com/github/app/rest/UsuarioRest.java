package com.github.app.rest;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

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
    public Usuario buscaUsuario(@PathParam("id") final Long id) {
        try {
            return usuarioService.findById(id);
        } catch (EntidadeNaoEncontradaException e) {
            return new Usuario();
        }
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Usuario> buscaUsuarios() {
        try {
            List<Usuario> usuarios = usuarioService.findAll();
            return usuarios;
        } catch (EntidadeNaoEncontradaException e) {
            return new ArrayList<Usuario>();
        }
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Usuario cadastraUsuario(Usuario usuario) {
        return usuarioService.addOrUpdate(usuario);
        // String resultado = "Usuario cadastrado com sucesso";
        // return Response.status(Status.CREATED).entity(resultado).build();
    }

    @DELETE
    @Path("/{id}")
    public void deletaUsuario(@PathParam("id") final Long id) {
        usuarioService.delete(id);
        // String resultado = "Usuario deletado com sucesso";
        // return Response.status(Status.OK).entity(resultado).build();
    }

}
