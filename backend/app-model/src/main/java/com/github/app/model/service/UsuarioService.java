package com.github.app.model.service;

import static com.github.app.i18n.MensagensI18n.*;

import java.util.Optional;

import javax.ejb.Stateless;
import javax.inject.Inject;

import org.mindrot.jbcrypt.BCrypt;

import com.github.app.common.exception.ErroDoClienteException;
import com.github.app.common.security.ConstantesDeSeguranca;
import com.github.app.common.utils.ValidationUtils;
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
    public Usuario insere(Usuario entity) {
        ValidationUtils.validaAtributosDaEntidade(validator, entity);
        validaSeLoginJaFoiUtilizado(entity);
        geraSenhaCriptografada(entity);
        return getDao().insere(entity);
    }

    private void validaSeLoginJaFoiUtilizado(Usuario entity) {
        Optional<Usuario> usuarioComMesmoLogin = buscaPorLogin(entity.getLogin());
        if (usuarioComMesmoLogin.isPresent()) {
            throw new ErroDoClienteException(LOGIN_JA_UTILIZADO.name(), LOGIN_JA_UTILIZADO.mensagem());
        }
    }

    private void geraSenhaCriptografada(Usuario entity) {
        String salt = BCrypt.gensalt(ConstantesDeSeguranca.BCRYPT_WORKLOAD);
        entity.setSenha(BCrypt.hashpw(entity.getSenha(), salt));
    }
    
    public Optional<Usuario> buscaPorLogin(String login) {
        return usuarioDao.buscaPorLogin(login);
    }

}
