package com.github.app.rest;

import com.github.app.model.dto.ClienteDto;
import com.github.app.model.dto.ClienteListagemDto;
import com.github.app.model.entity.Cliente;
import com.github.app.model.service.ClienteService;

import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.Path;

@Path("/cliente")
@ApplicationScoped
public class ClienteRest extends CrudDtoRest<Cliente, Long, ClienteService, ClienteDto, ClienteListagemDto> {


}
