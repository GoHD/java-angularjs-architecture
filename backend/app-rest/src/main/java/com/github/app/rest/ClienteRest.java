package com.github.app.rest;

import javax.inject.Inject;
import javax.ws.rs.Path;

import com.github.app.model.entity.Cliente;
import com.github.app.model.service.ClienteService;
import com.github.app.model.service.ServicoGenerico;

@Path("/cliente")
public class ClienteRest extends CrudRest<Cliente, Long> {

    @Inject
    private ClienteService clienteService;
    
    @Override
    protected ServicoGenerico<Cliente, Long> getServico() {
        return clienteService;
    }

}
