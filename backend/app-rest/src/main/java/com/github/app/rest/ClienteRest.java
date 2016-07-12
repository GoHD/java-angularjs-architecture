package com.github.app.rest;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.github.app.common.exception.ErroDoClienteException;
import com.github.app.i18n.MensagensI18n;
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
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response insere(Cliente entidade) {
    	throw new ErroDoClienteException(MensagensI18n.TEST.name(), MensagensI18n.TEST.mensagem());
    }

}
