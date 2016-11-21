package com.github.app.rest;

import com.github.app.common.exception.EntidadeNaoEncontradaException;
import com.github.app.model.entity.IEntity;
import com.github.app.model.service.ServicoGenerico;

import javax.enterprise.inject.Instance;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import java.io.Serializable;
import java.util.List;

@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public abstract class CrudEntityRest<E extends IEntity<ID> , ID extends Serializable, S extends ServicoGenerico<E, ID>> {

    @Inject
    protected Instance<S> servico;

    @GET
    @Path("/{id}")
    public Response buscaPorId(@PathParam("id") final ID id) {
        try {
            E entidade  = servico.get().buscaPorId(id);
            return Response.status(Status.OK).entity(entidade).build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Status.NOT_FOUND).build();
        }
    }
    
    @GET
    public Response buscaTodos() {
        try {
            List<E> entidades = servico.get().buscaTodos();
            return Response.status(Status.OK).entity(entidades).build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Status.NOT_FOUND).build();
        }
    }
    
    @POST
    public Response insere(E entidade) {
         E entidadeInserida = servico.get().insere(entidade);
         return Response.status(Status.CREATED).entity(entidadeInserida).build();
    }
    
    @PUT
    public Response atualiza(E entidade) {
        E entidadeAtualizada = servico.get().atualiza(entidade);
        return Response.status(Status.OK).entity(entidadeAtualizada).build();
    }
    
    @DELETE
    @Path("/{id}")
    public Response remove(@PathParam("id") final ID id) {
        servico.get().remove(id);
        return Response.status(Status.OK).build();
    }

}
