package com.github.app.model.service;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.github.app.common.exception.FalhaDeAutenticacaoException;
import com.github.app.common.security.CriptografiaSHA512;
import com.github.app.commons.security.JWTKey;
import com.github.app.model.dto.LoginDto;
import com.github.app.model.dto.UsuarioLogadoDto;
import com.github.app.model.entity.Usuario;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Stateless
public class AutenticacaoService {
    
    @Inject
    private UsuarioService usuarioService;
    
    public UsuarioLogadoDto realizaLogin(LoginDto loginDto) {
        
        Usuario usuario = usuarioService.buscaPorLogin(loginDto.getLogin());
        
        if (usuario == null) {
            throw new FalhaDeAutenticacaoException("Login não cadastrado");
        }
        
        boolean senhaValida = validaSenhaInformada(loginDto, usuario);
        if (!senhaValida) {
            throw new FalhaDeAutenticacaoException("Senha inválida");
        }
        
        String jwtToken = geraTokenJWT(loginDto.getLogin());
        UsuarioLogadoDto usuarioLogadoDto = new UsuarioLogadoDto(1L, "admin", "admin", "admin@admin.admin", jwtToken);
        
        return usuarioLogadoDto;
    }

    private boolean validaSenhaInformada(LoginDto loginDto, Usuario usuario) {
        // TODO Tratar SALT
        String senhaDigitada = CriptografiaSHA512.criptografa(loginDto.getSenha(), "");
        return senhaDigitada.equals(usuario.getSenha());
    }

    private String geraTokenJWT(String login) {
        return Jwts.builder().setSubject(login).signWith(SignatureAlgorithm.HS512, JWTKey.key).compact();
    }
    
}
