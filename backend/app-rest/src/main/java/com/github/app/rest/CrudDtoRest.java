package com.github.app.rest;

import com.github.app.common.exception.EntidadeNaoEncontradaException;
import com.github.app.mapper.DefaultModelMapper;
import com.github.app.model.entity.IEntity;
import com.github.app.model.service.ServicoGenerico;

import javax.enterprise.inject.Instance;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.List;

@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public abstract class CrudDtoRest<E extends IEntity<ID>, ID extends Serializable, S extends ServicoGenerico<E, ID>, Dto, DtoListagem> {

    @Inject
    protected DefaultModelMapper dtoMapper;

    @Inject
    protected Instance<S> service;

    private Class<E> classE;
    private Class<Dto> classDto;
    private Class<DtoListagem> classDtoListagem;

    @GET
    @Path("/{id}")
    public Response buscaPorId(@PathParam("id") final ID id) {
        try {
            E entidade = service.get().buscaPorId(id);
            Dto dto = dtoMapper.toDto(entidade, getClassDto());
            return Response.status(Status.OK).entity(dto).build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Status.NOT_FOUND).build();
        }
    }

    @GET
    public Response buscaTodos() {
        try {
            List<E> entidades = service.get().buscaTodos();
            List<DtoListagem> dtos = dtoMapper.toDto(entidades, getClassDtoListagem());
            return Response.status(Status.OK).entity(dtos).build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Status.NOT_FOUND).build();
        }
    }

    @POST
    public Response insere(Dto dto) {
        E entidade = dtoMapper.fromDto(dto, getClassE());
        E entidadeInserida = service.get().insere(entidade);
        return Response.status(Status.CREATED).entity(entidadeInserida).build();
    }

    @PUT
    public Response atualiza(Dto dto) {
        E entidade = dtoMapper.fromDto(dto, getClassE());
        E entidadeAtualizada = service.get().atualiza(entidade);
        return Response.status(Status.OK).entity(entidadeAtualizada).build();
    }

    @DELETE
    @Path("/{id}")
    public Response remove(@PathParam("id") final ID id) {
        service.get().remove(id);
        return Response.status(Status.OK).build();
    }

    public Class<E> getClassE() {
        if (classE == null) {
            classE = (Class<E>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
        }
        return classE;
    }

    public Class<Dto> getClassDto() {
        if (classDto == null) {
            classDto = (Class<Dto>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[3];
        }
        return classDto;
    }

    public Class<DtoListagem> getClassDtoListagem() {
        if (classDtoListagem == null) {
            classDtoListagem = (Class<DtoListagem>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[4];
        }
        return classDtoListagem;
    }

}
