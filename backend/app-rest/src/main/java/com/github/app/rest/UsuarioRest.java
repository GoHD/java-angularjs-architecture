package com.github.app.rest;

import javax.inject.Inject;
import javax.ws.rs.Path;

import com.github.app.model.entity.Usuario;
import com.github.app.model.service.ServicoGenerico;
import com.github.app.model.service.UsuarioService;

@Path("/usuario")
public class UsuarioRest extends CrudEntityRest<Usuario, Long, UsuarioService> {

}
