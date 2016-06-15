package com.github.app.model.service;

import javax.ejb.Stateless;
import javax.inject.Inject;

import org.mindrot.jbcrypt.BCrypt;

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
        validaSeLoginJaExiste(entity);
        geraSenhaCriptografada(entity);
        return getDao().insere(entity);
    }

    private void validaSeLoginJaExiste(Usuario entity) {
        
        Usuario usuarioComMesmoLogin = buscaPorLogin(entity.getLogin());
        
        if (usuarioComMesmoLogin != null) {
//            throw new 
        }
        
        
    }

    private void geraSenhaCriptografada(Usuario entity) {
        String salt = BCrypt.gensalt(ConstantesDeSeguranca.BCRYPT_WORKLOAD);
        entity.setSenha(BCrypt.hashpw(entity.getSenha(), salt));
    }
    
    private static void geraSenhaCriptografada2(Usuario entity) {
        String salt = BCrypt.gensalt(ConstantesDeSeguranca.BCRYPT_WORKLOAD);
        entity.setSenha(BCrypt.hashpw(entity.getSenha(), salt));
    }
    
    public static void main(String[] args) {
        Usuario user = new Usuario();
        user.setSenha("1234");
        geraSenhaCriptografada2(user);
        System.out.println(user.getSenha());
    }

    public Usuario buscaPorLogin(String login) {
        return usuarioDao.buscaPorLogin(login);
    }

}
