package com.github.app.model.service;

import static com.github.app.i18n.MensagensI18n.*;

import javax.ejb.Stateless;
import javax.inject.Inject;

import org.mindrot.jbcrypt.BCrypt;

import com.github.app.common.exception.FalhaDeAutenticacaoException;
import com.github.app.common.security.ConstantesDeSeguranca;
import com.github.app.model.dto.LoginDto;
import com.github.app.model.dto.UsuarioLogadoDto;
import com.github.app.model.entity.Usuario;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Stateless
public class AutenticacaoService {
    
    @Inject
    UsuarioService usuarioService;
    
    public UsuarioLogadoDto realizaLogin(LoginDto loginDto) {
        Usuario usuario = buscaUsuarioComLoginInformado(loginDto);
        validaSenhaInformada(loginDto.getSenha(), usuario.getSenha());
        
        String jwtToken = geraTokenJWT(loginDto.getLogin());
        
        UsuarioLogadoDto usuarioLogadoDto = criaDtoDoUsuarioLogado(usuario, jwtToken);
        
        return usuarioLogadoDto;
    }

    private UsuarioLogadoDto criaDtoDoUsuarioLogado(Usuario usuario, String jwtToken) {
        Long id = usuario.getId();
        String login = usuario.getLogin();
        String nome = usuario.getNome();
        String email = usuario.getEmail();
        
        UsuarioLogadoDto usuarioLogadoDto = new UsuarioLogadoDto(id, login, nome, email, jwtToken);
        return usuarioLogadoDto;
    }

    private void validaSenhaInformada(String senhaInformada, String hashSenhaUsuario) {
        boolean senhaValida = BCrypt.checkpw(senhaInformada, hashSenhaUsuario);
        if (!senhaValida) {
            throw new FalhaDeAutenticacaoException(SENHA_INVALIDA.name(), SENHA_INVALIDA.mensagem());
        }
    }

    private Usuario buscaUsuarioComLoginInformado(LoginDto loginDto) {
        Usuario usuario = usuarioService.buscaPorLogin(loginDto.getLogin());
        if (usuario == null) {
            throw new FalhaDeAutenticacaoException(LOGIN_NAO_CADASTRADO.name(), LOGIN_NAO_CADASTRADO.mensagem());
        }
        return usuario;
    }

    private String geraTokenJWT(String login) {
        return Jwts.builder().setSubject(login).signWith(SignatureAlgorithm.HS512, ConstantesDeSeguranca.JWT_KEY).compact();
    }
    
}
