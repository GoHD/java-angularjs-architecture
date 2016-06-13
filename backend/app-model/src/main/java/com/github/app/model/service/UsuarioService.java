package com.github.app.model.service;

import javax.ejb.Stateless;
import javax.inject.Inject;

import org.mindrot.jbcrypt.BCrypt;

import com.github.app.common.security.ConstantesDeSeguranca;
import com.github.app.model.dao.DaoGenerico;
import com.github.app.model.dao.UsuarioDao;
import com.github.app.model.entity.Usuario;

@Stateless
public class UsuarioService extends ServicoGenerico<Usuario, Long> {

    @Inject
    UsuarioDao usuarioDao;

    @Override
    protected DaoGenerico<Usuario, Long> getDao() {
        return usuarioDao;
    }

    @Override
    protected void preparaEntidadeParaInserir(Usuario entity) {
        String salt = BCrypt.gensalt(ConstantesDeSeguranca.BCRYPT_WORKLOAD);
        entity.setSenha(BCrypt.hashpw(entity.getSenha(), salt));
    }

    public Usuario buscaPorLogin(String login) {
        return usuarioDao.buscaPorLogin(login);
    }

}
